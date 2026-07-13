import { randomUUID } from 'crypto'
import { existsSync, readFileSync } from 'fs'
import { createClient } from '@supabase/supabase-js'
import { hashAccessCode } from '../lib/bookingUtils.js'

function loadEnvFile(path = '.env.local') {
  if (!existsSync(path)) return
  for (const line of readFileSync(path, 'utf8').split(/\n/)) {
    if (!line || line.trim().startsWith('#')) continue
    const index = line.indexOf('=')
    if (index === -1) continue
    const key = line.slice(0, index).trim()
    const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '')
    if (key && process.env[key] === undefined) process.env[key] = value
  }
}

loadEnvFile()

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) throw new Error('Missing Supabase env vars. Source .env.local first.')

const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
const demoStaffPassword = process.env.DEMO_STAFF_PASSWORD || 'HIP-Demo-2026!'

async function upsertOne(table, match, row, options = {}) {
  const updateExisting = options.updateExisting !== false
  const { data: existing, error: selectError } = await supabase.from(table).select('*').match(match).maybeSingle()
  if (selectError) throw selectError
  if (existing) {
    if (!updateExisting) return existing
    const { data, error } = await supabase.from(table).update({ ...row, updated_at: new Date().toISOString() }).match(match).select('*').single()
    if (error) throw error
    return data
  }
  const { data, error } = await supabase.from(table).insert(row).select('*').single()
  if (error) throw error
  return data
}

async function main() {
  const karen = await upsertOne('staff_users', { email: 'karen.demo@hippsychology.com' }, { name: 'Karen', email: 'karen.demo@hippsychology.com', role: 'admin' })
  const cormac = await upsertOne('staff_users', { email: 'cormac.demo@hippsychology.com' }, { name: 'Cormac', email: 'cormac.demo@hippsychology.com', role: 'admin' })
  const bluecanvas = await upsertOne('staff_users', { email: 'bluecanvas.demo@hippsychology.com' }, { name: 'Blue Canvas', email: 'bluecanvas.demo@hippsychology.com', role: 'admin' })

  for (const staff of [karen, cormac, bluecanvas]) {
    const authUser = await ensureAuthUser(staff.email, demoStaffPassword, staff.name)
    if (authUser?.id && staff.auth_user_id !== authUser.id) {
      await supabase.from('staff_users').update({ auth_user_id: authUser.id, updated_at: new Date().toISOString() }).eq('id', staff.id)
    }
  }

  const primary = await upsertOne('programmes', { slug: 'ni-primary' }, {
    slug: 'ni-primary', title: 'NI Primary Support Programme', region: 'NI', school_type: 'Primary',
    description: 'P1-P7 wellbeing, resilience, anxiety, friendships, transitions and cultural diversity support.', sort_order: 1,
  })
  await upsertOne('programmes', { slug: 'ni-post-primary' }, {
    slug: 'ni-post-primary', title: 'NI Post-primary Support Programme', region: 'NI', school_type: 'Post-primary',
    description: 'Face-to-face support across KS3, KS4 and KS5.', sort_order: 2,
  })
  await upsertOne('programmes', { slug: 'roi-programme' }, {
    slug: 'roi-programme', title: 'ROI Programme', region: 'ROI', school_type: 'Primary + Post-primary',
    description: 'Online-first ROI school courses with border-area face-to-face options.', sort_order: 3,
  })

  await upsertOne('pilot_access_codes', { code_hash: hashAccessCode(process.env.PILOT_ACCESS_CODE || 'HIP-PILOT-2026') }, {
    code_hash: hashAccessCode(process.env.PILOT_ACCESS_CODE || 'HIP-PILOT-2026'),
    label: 'Online Primary pilot',
    active: true,
    scope: 'online_primary',
  })

  const onlinePrimary = await upsertOne('workshops', { slug: 'online-primary' }, {
    programme_id: primary.id,
    slug: 'online-primary',
    title: 'Online Primary',
    stage: 'Primary',
    delivery: 'online',
    term_label: 'June',
    base_price_ex_vat: 120,
    currency: 'GBP',
    description: 'Live online HIP Psychology course for primary teachers.',
  })

  const slotRows = [
    ['online-primary-1', 'Online Primary — Date 1', '2026-06-10T10:00:00+01:00', '2026-06-10T11:30:00+01:00', 20, 4],
    ['online-primary-2', 'Online Primary — Date 2', '2026-06-18T13:00:00+01:00', '2026-06-18T14:30:00+01:00', 20, 2],
    ['online-primary-3', 'Online Primary — Date 3', '2026-06-23T10:00:00+01:00', '2026-06-23T11:30:00+01:00', 20, 1],
    ['online-primary-4', 'Online Primary — Date 4', '2026-07-01T10:00:00+01:00', '2026-07-01T11:30:00+01:00', 20, 1],
    ['online-primary-5', 'Online Primary — Date 5', '2026-07-08T13:00:00+01:00', '2026-07-08T14:30:00+01:00', 20, 1],
  ]
  const slots = []
  for (const [slug, label, starts_at, ends_at, capacity] of slotRows) {
    slots.push(await upsertOne('session_slots', { label }, {
      workshop_id: onlinePrimary.id, label, starts_at, ends_at, delivery: 'online', region: 'NI', capacity,
      presenter_user_id: karen.id, presenter_name: 'Cormac', status: 'open',
      zoom_registration_url: 'https://zoom.us/meeting/register/demo',
    }))
  }

  await supabase
    .from('workshops')
    .update({ active: false, updated_at: new Date().toISOString() })
    .in('slug', ['cultural-diversity', 'p7-worries'])

  const school = await upsertOne('schools', { name: "St Macartan's PS" }, { name: "St Macartan's PS", school_type: 'Primary', region: 'NI', phone: '02800000000', funding_notes: 'School funded' })
  const booker = await upsertOne('contacts', { email: 'admin.stmacartans@example.school' }, { school_id: school.id, name: 'School Admin', email: 'admin.stmacartans@example.school', phone: '02800000000', contact_type: 'booker' })
  const teacher = await upsertOne('contacts', { email: 'teacher.pending@example.school' }, { school_id: school.id, name: 'To confirm', email: 'teacher.pending@example.school', contact_type: 'teacher' })

  const booking = await upsertOne('bookings', { school_id: school.id, workshop_id: onlinePrimary.id }, {
    school_id: school.id,
    booker_contact_id: booker.id,
    teacher_contact_id: teacher.id,
    workshop_id: onlinePrimary.id,
    requested_slot_id: slots[0].id,
    status: 'requested',
    owner_user_id: karen.id,
    funding_source: 'School funded',
    total_classes: 2,
    total_ex_vat: 240,
    internal_notes: 'Demo request waiting for presenter/time confirmation.',
    change_token: randomUUID(),
  }, { updateExisting: false })

  const { data: existingLines } = await supabase.from('booking_class_lines').select('id').eq('booking_id', booking.id).limit(1)
  if (!existingLines?.length) {
    await supabase.from('booking_class_lines').insert([
      { booking_id: booking.id, year_group: 'Composite P4/P5', class_count: 1 },
      { booking_id: booking.id, year_group: 'Composite P6/P7', class_count: 1 },
    ])
  }

  console.log('Seed complete:', { programmes: 3, slots: slots.length, booking: booking.public_ref })
}

async function ensureAuthUser(email, password, name) {
  const created = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name },
  })
  if (!created.error) return created.data.user
  if (!String(created.error.message || '').toLowerCase().includes('already')) throw created.error

  const { data, error } = await supabase.auth.admin.listUsers({ page: 1, perPage: 200 })
  if (error) throw error
  const existing = data.users.find((user) => user.email?.toLowerCase() === email.toLowerCase())
  if (!existing) throw created.error

  const updated = await supabase.auth.admin.updateUserById(existing.id, {
    password,
    email_confirm: true,
    user_metadata: { name },
  })
  if (updated.error) throw updated.error
  return updated.data.user
}

main().catch((error) => {
  console.error('Seed failed:', error.message)
  process.exit(1)
})
