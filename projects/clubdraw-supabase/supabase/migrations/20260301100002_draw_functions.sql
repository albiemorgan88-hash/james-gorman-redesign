-- ClubDraw: Core draw execution + helper functions
-- These run as SECURITY DEFINER (service role) — called from Edge Functions

-- ============================================================
-- Generate provably fair seed & hash
-- ============================================================
create or replace function public.generate_draw_seed()
returns table(seed text, seed_hash text) as $$
declare
  v_seed text;
begin
  v_seed := encode(gen_random_bytes(32), 'hex');
  return query select v_seed as seed, encode(digest(v_seed::bytea, 'sha256'), 'hex') as seed_hash;
end;
$$ language plpgsql security definer;

-- ============================================================
-- Pick N unique random numbers from 1..max using a seed
-- Deterministic: same seed = same numbers
-- ============================================================
create or replace function public.seeded_draw(
  p_seed text,
  p_count smallint default 5,
  p_max smallint default 50
)
returns smallint[] as $$
declare
  v_numbers smallint[] := '{}';
  v_hash bytea;
  v_num smallint;
  v_i integer := 0;
begin
  while array_length(v_numbers, 1) is null or array_length(v_numbers, 1) < p_count loop
    v_hash := digest((p_seed || v_i::text)::bytea, 'sha256');
    v_num := (get_byte(v_hash, 0) * 256 + get_byte(v_hash, 1)) % p_max + 1;
    if not v_num = any(v_numbers) then
      v_numbers := v_numbers || v_num;
    end if;
    v_i := v_i + 1;
    if v_i > 1000 then exit; end if;  -- safety
  end loop;
  return v_numbers;
end;
$$ language plpgsql immutable;

-- ============================================================
-- Execute a draw: pick winners, calculate prizes, update records
-- Called by execute-draw Edge Function with service_role key
-- ============================================================
create or replace function public.execute_draw(p_draw_id uuid)
returns jsonb as $$
declare
  v_draw record;
  v_club record;
  v_seed text;
  v_drawn smallint[];
  v_entry record;
  v_matches smallint;
  v_max_matches smallint := 0;
  v_winners uuid[] := '{}';
  v_prize_per_winner integer;
  v_total_entries integer;
  v_pot integer;
  v_prize_pool integer;
  v_platform_fee integer;
  v_club_share integer;
  v_result jsonb;
begin
  -- Lock the draw row
  select * into v_draw from public.draws where id = p_draw_id for update;
  if not found then raise exception 'Draw not found: %', p_draw_id; end if;
  if v_draw.status != 'closed' then raise exception 'Draw not in closed state: %', v_draw.status; end if;

  select * into v_club from public.clubs where id = v_draw.club_id;

  -- Reveal the seed and generate numbers
  v_seed := v_draw.seed;
  v_drawn := public.seeded_draw(v_seed, v_club.numbers_per_entry, v_club.numbers_range_max);

  -- Count entries and calculate pot
  select count(*), coalesce(sum(array_length(e.numbers, 1)), 0)
  into v_total_entries, v_pot
  from public.draw_entries e
  where e.draw_id = p_draw_id;

  v_pot := v_pot * v_club.price_per_number + v_draw.rollover_amount;
  v_platform_fee := (v_pot * v_club.platform_fee_pct) / 100;
  v_prize_pool := (v_pot * v_club.prize_pct) / 100;
  v_club_share := v_pot - v_prize_pool - v_platform_fee;

  -- Find matches for each entry
  for v_entry in select * from public.draw_entries where draw_id = p_draw_id loop
    v_matches := 0;
    for i in 1..array_length(v_entry.numbers, 1) loop
      if v_entry.numbers[i] = any(v_drawn) then
        v_matches := v_matches + 1;
      end if;
    end loop;

    update public.draw_entries set matches = v_matches where id = v_entry.id;

    if v_matches > v_max_matches then
      v_max_matches := v_matches;
      v_winners := array[v_entry.profile_id];
    elsif v_matches = v_max_matches and v_matches > 0 then
      v_winners := v_winners || v_entry.profile_id;
    end if;
  end loop;

  -- Award prizes (split among winners with most matches)
  if v_max_matches >= 3 and array_length(v_winners, 1) > 0 then
    v_prize_per_winner := v_prize_pool / array_length(v_winners, 1);
    for i in 1..array_length(v_winners, 1) loop
      insert into public.prizes (draw_id, profile_id, numbers_matched, prize_amount)
      values (p_draw_id, v_winners[i], v_max_matches, v_prize_per_winner);
    end loop;
  end if;

  -- Update draw record
  update public.draws set
    status = 'drawn',
    drawn_at = now(),
    drawn_numbers = v_drawn,
    total_entries = v_total_entries,
    pot_amount = v_pot,
    prize_pool = case when v_max_matches >= 3 then v_prize_pool else 0 end,
    platform_fee = v_platform_fee,
    club_share = v_club_share
  where id = p_draw_id;

  -- If no winner (< 3 matches), rollover prize pool to next draw
  if v_max_matches < 3 then
    -- Create next draw with rollover
    insert into public.draws (club_id, draw_number, status, scheduled_at, rollover_amount)
    select v_club.id,
           v_draw.draw_number + 1,
           'scheduled',
           v_draw.scheduled_at + interval '7 days',
           v_prize_pool
    on conflict (club_id, draw_number) do update set rollover_amount = excluded.rollover_amount;
  end if;

  -- Audit
  insert into public.audit_log (action, entity_type, entity_id, metadata)
  values ('draw_executed', 'draw', p_draw_id, jsonb_build_object(
    'drawn_numbers', v_drawn,
    'pot', v_pot,
    'winners', v_winners,
    'max_matches', v_max_matches
  ));

  v_result := jsonb_build_object(
    'draw_id', p_draw_id,
    'drawn_numbers', v_drawn,
    'total_entries', v_total_entries,
    'pot_amount', v_pot,
    'prize_pool', v_prize_pool,
    'platform_fee', v_platform_fee,
    'club_share', v_club_share,
    'max_matches', v_max_matches,
    'winners', v_winners,
    'rollover', v_max_matches < 3
  );

  return v_result;
end;
$$ language plpgsql security definer;

-- ============================================================
-- Close a draw and snapshot entries
-- ============================================================
create or replace function public.close_draw_and_snapshot(p_draw_id uuid)
returns integer as $$
declare
  v_draw record;
  v_count integer;
begin
  select * into v_draw from public.draws where id = p_draw_id for update;
  if v_draw.status != 'open' and v_draw.status != 'scheduled' then
    raise exception 'Draw not open: %', v_draw.status;
  end if;

  -- Snapshot active selections into draw_entries
  insert into public.draw_entries (draw_id, profile_id, club_id, numbers)
  select p_draw_id, ns.profile_id, ns.club_id, ns.numbers
  from public.number_selections ns
  where ns.club_id = v_draw.club_id
    and ns.status = 'active'
  on conflict (draw_id, profile_id) do nothing;

  get diagnostics v_count = row_count;

  -- Generate seed and publish hash
  update public.draws set
    status = 'closed',
    seed = encode(gen_random_bytes(32), 'hex'),
    seed_hash = encode(digest(encode(gen_random_bytes(32), 'hex')::bytea, 'sha256'), 'hex'),
    total_entries = v_count
  where id = p_draw_id;

  -- Actually: generate seed properly (seed_hash must match seed)
  with new_seed as (
    select encode(gen_random_bytes(32), 'hex') as s
  )
  update public.draws set
    seed = new_seed.s,
    seed_hash = encode(digest(new_seed.s::bytea, 'sha256'), 'hex')
  from new_seed
  where draws.id = p_draw_id;

  return v_count;
end;
$$ language plpgsql security definer;

-- ============================================================
-- Get draw results (public, for results page)
-- ============================================================
create or replace function public.get_draw_results(p_club_slug text, p_limit integer default 10)
returns jsonb as $$
begin
  return (
    select coalesce(jsonb_agg(row_to_json(r)), '[]'::jsonb)
    from (
      select
        d.id,
        d.draw_number,
        d.drawn_numbers,
        d.drawn_at,
        d.pot_amount,
        d.prize_pool,
        d.total_entries,
        d.seed,
        d.seed_hash,
        d.rollover_amount,
        (
          select coalesce(jsonb_agg(jsonb_build_object(
            'name', p.full_name,
            'matched', pr.numbers_matched,
            'prize', pr.prize_amount
          )), '[]'::jsonb)
          from public.prizes pr
          join public.profiles p on p.id = pr.profile_id
          where pr.draw_id = d.id
        ) as winners
      from public.draws d
      join public.clubs c on c.id = d.club_id
      where c.slug = p_club_slug and d.status = 'drawn'
      order by d.draw_number desc
      limit p_limit
    ) r
  );
end;
$$ language plpgsql security definer;
