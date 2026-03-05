-- Seed: Ardmore Cricket Club (first customer)
-- Run AFTER a super_admin user has signed up

-- Insert Ardmore CC
insert into public.clubs (
  name, slug, sport, primary_colour, secondary_colour,
  ground_name, ground_address, draw_day, draw_time,
  numbers_range_max, numbers_per_entry, price_per_number,
  prize_pct, platform_fee_pct
) values (
  'Ardmore Cricket Club', 'ardmore', 'cricket', '#1a365d', '#c9a84c',
  'The Bleach Green', 'Maghera, Co. Derry BT46', 5, '20:00',
  50, 5, 100,
  60, 10
);

-- Note: After signing up as Phil, run this to make yourself admin:
-- insert into public.club_memberships (club_id, profile_id, role)
-- select c.id, p.id, 'super_admin'
-- from public.clubs c, public.profiles p
-- where c.slug = 'ardmore' and p.email = 'your-email@example.com';
