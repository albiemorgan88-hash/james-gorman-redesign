-- HIP Booking Hub V1 schema
-- Apply to a dedicated Supabase project/database before wiring live data.
-- Keep service keys/API secrets in environment variables only.

create extension if not exists pgcrypto;

do $$
begin
  create type user_role as enum ('admin', 'staff', 'readonly');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type booking_status as enum ('requested', 'needs_info', 'confirmed', 'change_requested', 'cancelled', 'delivered', 'no_show');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type delivery_type as enum ('online', 'face_to_face', 'hybrid');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type sync_status as enum ('pending', 'synced', 'failed', 'skipped');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type sync_target as enum ('zoho', 'google_calendar', 'email', 'zoom');
exception
  when duplicate_object then null;
end $$;

create table if not exists staff_users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  name text not null,
  email text not null unique,
  role user_role not null default 'staff',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists schools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  school_type text,
  region text,
  address text,
  postcode text,
  phone text,
  funding_notes text,
  zoho_account_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  school_id uuid references schools(id) on delete set null,
  name text,
  role text,
  email text not null,
  phone text,
  contact_type text not null default 'booker', -- booker, teacher, payer, other
  zoho_contact_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists programmes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  region text,
  school_type text,
  description text,
  active boolean not null default true,
  sort_order int not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists workshops (
  id uuid primary key default gen_random_uuid(),
  programme_id uuid references programmes(id) on delete cascade,
  slug text not null unique,
  title text not null,
  stage text,
  delivery delivery_type not null default 'online',
  term_label text,
  description text,
  base_price_ex_vat numeric(10,2),
  currency text not null default 'GBP',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists session_slots (
  id uuid primary key default gen_random_uuid(),
  workshop_id uuid references workshops(id) on delete cascade,
  label text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  delivery delivery_type not null default 'online',
  region text,
  capacity int not null default 1,
  presenter_user_id uuid references staff_users(id) on delete set null,
  presenter_name text,
  zoom_registration_url text,
  google_calendar_event_id text,
  status text not null default 'draft', -- draft, open, full, cancelled
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (capacity >= 1),
  check (ends_at > starts_at)
);

create table if not exists pilot_access_codes (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  label text not null,
  active boolean not null default true,
  scope text not null default 'online_primary',
  max_uses int,
  use_count int not null default 0,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (max_uses is null or max_uses >= 1),
  check (use_count >= 0)
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  public_ref text not null unique default upper(substr(encode(gen_random_bytes(6), 'hex'), 1, 10)),
  school_id uuid references schools(id) on delete restrict,
  booker_contact_id uuid references contacts(id) on delete set null,
  teacher_contact_id uuid references contacts(id) on delete set null,
  workshop_id uuid references workshops(id) on delete restrict,
  requested_slot_id uuid references session_slots(id) on delete set null,
  confirmed_slot_id uuid references session_slots(id) on delete set null,
  status booking_status not null default 'requested',
  owner_user_id uuid references staff_users(id) on delete set null,
  pilot_access_code_id uuid references pilot_access_codes(id) on delete set null,
  funding_source text,
  purchase_order text,
  total_classes int not null default 1,
  total_ex_vat numeric(10,2),
  currency text not null default 'GBP',
  internal_notes text,
  change_token text not null default encode(gen_random_bytes(24), 'base64url'),
  requested_at timestamptz not null default now(),
  confirmed_at timestamptz,
  cancelled_at timestamptz,
  last_change_requested_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (total_classes >= 1)
);

create table if not exists booking_class_lines (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  year_group text not null,
  class_count int not null default 1,
  pupil_count int,
  notes text,
  created_at timestamptz not null default now(),
  check (class_count >= 1)
);

create table if not exists booking_notes (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  author_user_id uuid references staff_users(id) on delete set null,
  note text not null,
  created_at timestamptz not null default now()
);

create table if not exists booking_change_requests (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  request_type text not null default 'details_update', -- details_update, reschedule, cancel
  request_payload jsonb not null default '{}'::jsonb,
  status text not null default 'requested', -- requested, approved, rejected
  requester_email text,
  resolved_by_user_id uuid references staff_users(id) on delete set null,
  resolved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists sync_jobs (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  target sync_target not null,
  status sync_status not null default 'pending',
  attempt_count int not null default 0,
  external_id text,
  error_message text,
  payload jsonb,
  next_retry_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists email_logs (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  template_key text not null,
  recipient_email text not null,
  recipient_type text,
  status sync_status not null default 'pending',
  provider_message_id text,
  error_message text,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists audit_events (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  actor_user_id uuid references staff_users(id) on delete set null,
  event_type text not null,
  event_payload jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_bookings_status on bookings(status);
create index if not exists idx_bookings_requested_slot on bookings(requested_slot_id);
create index if not exists idx_session_slots_workshop_starts on session_slots(workshop_id, starts_at);
create index if not exists idx_sync_jobs_status_target on sync_jobs(status, target);
create index if not exists idx_email_logs_booking on email_logs(booking_id);
create index if not exists idx_pilot_access_codes_active on pilot_access_codes(active, scope);
create index if not exists idx_booking_change_requests_booking on booking_change_requests(booking_id, status);

alter table if exists bookings add column if not exists pilot_access_code_id uuid references pilot_access_codes(id) on delete set null;
alter table if exists bookings add column if not exists last_change_requested_at timestamptz;
alter table if exists email_logs add column if not exists updated_at timestamptz not null default now();
alter table if exists sync_jobs add column if not exists completed_at timestamptz;
alter table if exists sync_jobs add column if not exists completed_by_user_id uuid references staff_users(id) on delete set null;

-- Suggested RLS approach when auth is wired:
-- 1. Enable RLS on all tables.
-- 2. Staff users can read/write through authenticated roles based on staff_users.role.
-- 3. Public booking form writes only through server actions/API routes using service role.
-- 4. School manage links read/update one booking via change_token through server-side checks, never direct anon table access.
