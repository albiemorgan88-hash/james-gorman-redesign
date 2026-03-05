-- ClubDraw: Initial Schema
-- Production-grade weekly numbers draw SaaS for sports clubs
-- Run against a fresh Supabase project

-- ============================================================
-- EXTENSIONS
-- ============================================================
create extension if not exists "pgcrypto";
create extension if not exists "uuid-ossp";

-- ============================================================
-- ENUMS
-- ============================================================
create type draw_status as enum ('scheduled', 'open', 'closed', 'drawn', 'cancelled');
create type payment_status as enum ('pending', 'succeeded', 'failed', 'refunded');
create type member_role as enum ('member', 'admin', 'super_admin');
create type entry_status as enum ('active', 'paused', 'cancelled');
create type payout_status as enum ('pending', 'processing', 'paid', 'failed');

-- ============================================================
-- CLUBS
-- ============================================================
create table public.clubs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  sport text not null default 'cricket',
  primary_colour text not null default '#1a365d',
  secondary_colour text not null default '#ffffff',
  logo_url text,
  ground_name text,
  ground_address text,
  website text,
  facebook_url text,
  instagram_url text,
  stripe_account_id text unique,         -- Stripe Connect Express account
  stripe_onboarding_complete boolean not null default false,
  council_reg_number text,               -- Society lottery registration
  council_name text,
  draw_day smallint not null default 5,  -- 0=Sun..6=Sat, 5=Friday
  draw_time time not null default '20:00',
  numbers_range_max smallint not null default 50,
  numbers_per_entry smallint not null default 5,
  price_per_number integer not null default 100,  -- pence (£1.00)
  prize_pct smallint not null default 60,         -- 60% of pot to prizes
  platform_fee_pct smallint not null default 10,  -- 10% platform fee
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_clubs_slug on public.clubs(slug);

-- ============================================================
-- PROFILES (extends Supabase auth.users)
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  email text not null,
  age_verified boolean not null default false,
  date_of_birth date,
  stripe_customer_id text,
  whatsapp_opted_in boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- CLUB MEMBERSHIPS (many-to-many: profiles <-> clubs)
-- ============================================================
create table public.club_memberships (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  role member_role not null default 'member',
  joined_at timestamptz not null default now(),
  unique(club_id, profile_id)
);

create index idx_memberships_club on public.club_memberships(club_id);
create index idx_memberships_profile on public.club_memberships(profile_id);

-- ============================================================
-- NUMBER SELECTIONS (persistent picks per member per club)
-- ============================================================
create table public.number_selections (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  numbers smallint[] not null,  -- e.g. {3, 14, 22, 38, 41}
  status entry_status not null default 'active',
  stripe_subscription_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint chk_numbers_length check (array_length(numbers, 1) >= 1),
  unique(club_id, profile_id)
);

create index idx_selections_club on public.number_selections(club_id);

-- ============================================================
-- DRAWS
-- ============================================================
create table public.draws (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  draw_number integer not null,  -- sequential per club
  status draw_status not null default 'scheduled',
  scheduled_at timestamptz not null,
  drawn_at timestamptz,
  -- Provably fair
  seed_hash text,          -- SHA-256 hash published before draw
  seed text,               -- actual seed published after draw
  drawn_numbers smallint[], -- the winning numbers
  -- Financials
  total_entries integer not null default 0,
  pot_amount integer not null default 0,        -- pence
  prize_pool integer not null default 0,        -- pence (pot × prize_pct%)
  platform_fee integer not null default 0,      -- pence (pot × 10%)
  club_share integer not null default 0,        -- pence (pot - prize_pool - platform_fee)
  rollover_amount integer not null default 0,   -- pence carried from previous
  created_at timestamptz not null default now(),
  unique(club_id, draw_number)
);

create index idx_draws_club_status on public.draws(club_id, status);
create index idx_draws_scheduled on public.draws(scheduled_at);

-- ============================================================
-- DRAW ENTRIES (snapshot of who was in each draw)
-- ============================================================
create table public.draw_entries (
  id uuid primary key default gen_random_uuid(),
  draw_id uuid not null references public.draws(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  club_id uuid not null references public.clubs(id) on delete cascade,
  numbers smallint[] not null,
  payment_id uuid,  -- links to payments table
  matches smallint not null default 0,
  created_at timestamptz not null default now(),
  unique(draw_id, profile_id)
);

create index idx_entries_draw on public.draw_entries(draw_id);

-- ============================================================
-- PRIZES / WINNERS
-- ============================================================
create table public.prizes (
  id uuid primary key default gen_random_uuid(),
  draw_id uuid not null references public.draws(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  numbers_matched smallint not null,
  prize_amount integer not null,  -- pence
  payout_status payout_status not null default 'pending',
  stripe_transfer_id text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create index idx_prizes_draw on public.prizes(draw_id);

-- ============================================================
-- PAYMENTS
-- ============================================================
create table public.payments (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  club_id uuid not null references public.clubs(id) on delete cascade,
  draw_id uuid references public.draws(id),
  stripe_payment_intent_id text unique,
  stripe_invoice_id text,
  amount integer not null,         -- pence
  platform_fee integer not null default 0,  -- pence
  currency text not null default 'gbp',
  status payment_status not null default 'pending',
  metadata jsonb default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_payments_profile on public.payments(profile_id);
create index idx_payments_club on public.payments(club_id);
create index idx_payments_stripe on public.payments(stripe_payment_intent_id);

-- ============================================================
-- PLATFORM CONFIG (singleton for super-admin settings)
-- ============================================================
create table public.platform_config (
  id integer primary key default 1 check (id = 1),  -- singleton
  stripe_platform_account_id text,
  default_platform_fee_pct smallint not null default 10,
  support_email text default 'hello@clubdraw.co.uk',
  updated_at timestamptz not null default now()
);

insert into public.platform_config (id) values (1);

-- ============================================================
-- AUDIT LOG
-- ============================================================
create table public.audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb default '{}',
  created_at timestamptz not null default now()
);

create index idx_audit_created on public.audit_log(created_at desc);

-- ============================================================
-- FUNCTIONS
-- ============================================================

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Updated_at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_clubs_updated before update on public.clubs
  for each row execute function public.set_updated_at();
create trigger trg_profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();
create trigger trg_selections_updated before update on public.number_selections
  for each row execute function public.set_updated_at();
create trigger trg_payments_updated before update on public.payments
  for each row execute function public.set_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table public.clubs enable row level security;
alter table public.profiles enable row level security;
alter table public.club_memberships enable row level security;
alter table public.number_selections enable row level security;
alter table public.draws enable row level security;
alter table public.draw_entries enable row level security;
alter table public.prizes enable row level security;
alter table public.payments enable row level security;
alter table public.platform_config enable row level security;
alter table public.audit_log enable row level security;

-- CLUBS: public read, admin write
create policy "clubs_select" on public.clubs for select using (true);
create policy "clubs_insert" on public.clubs for insert with check (
  exists (select 1 from public.club_memberships where club_id = id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
  or exists (select 1 from public.club_memberships where profile_id = auth.uid() and role = 'super_admin')
);
create policy "clubs_update" on public.clubs for update using (
  exists (select 1 from public.club_memberships where club_id = clubs.id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);

-- PROFILES: own profile read/write, admins can read their club members
create policy "profiles_select_own" on public.profiles for select using (id = auth.uid());
create policy "profiles_select_admin" on public.profiles for select using (
  exists (
    select 1 from public.club_memberships cm1
    join public.club_memberships cm2 on cm1.club_id = cm2.club_id
    where cm1.profile_id = auth.uid() and cm1.role in ('admin', 'super_admin')
    and cm2.profile_id = profiles.id
  )
);
create policy "profiles_update_own" on public.profiles for update using (id = auth.uid());

-- CLUB MEMBERSHIPS
create policy "memberships_select" on public.club_memberships for select using (
  profile_id = auth.uid()
  or exists (select 1 from public.club_memberships where club_id = club_memberships.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);
create policy "memberships_insert" on public.club_memberships for insert with check (
  profile_id = auth.uid()  -- self-join
  or exists (select 1 from public.club_memberships where club_id = club_memberships.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);
create policy "memberships_update" on public.club_memberships for update using (
  exists (select 1 from public.club_memberships where club_id = club_memberships.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);

-- NUMBER SELECTIONS: own read/write, club admin read
create policy "selections_select" on public.number_selections for select using (
  profile_id = auth.uid()
  or exists (select 1 from public.club_memberships where club_id = number_selections.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);
create policy "selections_insert" on public.number_selections for insert with check (profile_id = auth.uid());
create policy "selections_update" on public.number_selections for update using (profile_id = auth.uid());

-- DRAWS: public read, system/admin write
create policy "draws_select" on public.draws for select using (true);
create policy "draws_insert" on public.draws for insert with check (
  exists (select 1 from public.club_memberships where club_id = draws.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);
create policy "draws_update" on public.draws for update using (
  exists (select 1 from public.club_memberships where club_id = draws.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);

-- DRAW ENTRIES: own read, club admin read
create policy "entries_select" on public.draw_entries for select using (
  profile_id = auth.uid()
  or exists (select 1 from public.club_memberships where club_id = draw_entries.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);

-- PRIZES: own read, club admin read, public for results
create policy "prizes_select" on public.prizes for select using (
  profile_id = auth.uid()
  or exists (
    select 1 from public.draws d
    join public.club_memberships cm on cm.club_id = d.club_id
    where d.id = prizes.draw_id and cm.profile_id = auth.uid() and cm.role in ('admin', 'super_admin')
  )
);

-- PAYMENTS: own read, club admin read
create policy "payments_select" on public.payments for select using (
  profile_id = auth.uid()
  or exists (select 1 from public.club_memberships where club_id = payments.club_id and profile_id = auth.uid() and role in ('admin', 'super_admin'))
);

-- PLATFORM CONFIG: super_admin only
create policy "config_select" on public.platform_config for select using (
  exists (select 1 from public.club_memberships where profile_id = auth.uid() and role = 'super_admin')
);
create policy "config_update" on public.platform_config for update using (
  exists (select 1 from public.club_memberships where profile_id = auth.uid() and role = 'super_admin')
);

-- AUDIT LOG: super_admin read only
create policy "audit_select" on public.audit_log for select using (
  exists (select 1 from public.club_memberships where profile_id = auth.uid() and role = 'super_admin')
);
