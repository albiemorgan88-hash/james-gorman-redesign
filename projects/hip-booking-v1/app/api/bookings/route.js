export const dynamic = 'force-dynamic'

import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import {
  buildExternalChecklistText,
  countBookedClasses,
  isOnlinePrimaryWorkshop,
  normaliseClassLines,
  normaliseEmail,
  normaliseText,
  publicManageUrl,
} from '../../../lib/bookingUtils'
import { sendBookingEmail } from '../../../lib/integrations/email'
import { validatePilotAccessCode, recordPilotAccessUse } from '../../../lib/pilotAccess'
import { requireStaffUser } from '../../../lib/supabase/admin'
import { getServiceSupabase } from '../../../lib/supabase/server'

function publicErrorMessage(error) {
  if (/api key|service role|supabase/i.test(error.message)) return 'Booking is not available right now. Please contact HIP.'
  return error.message
}

async function getOrCreateSchool(supabase, body) {
  const schoolName = normaliseText(body.schoolName)
  const { data: existing } = await supabase.from('schools').select('*').ilike('name', schoolName).limit(1).maybeSingle()
  if (existing) return existing

  const { data, error } = await supabase
    .from('schools')
    .insert({
      name: schoolName,
      school_type: body.schoolType || 'Primary',
      region: body.region || 'NI',
      phone: body.schoolPhone || body.bookerPhone || null,
      funding_notes: body.fundingSource || null,
    })
    .select('*')
    .single()
  if (error) throw error
  return data
}

async function getOrCreateContact(supabase, schoolId, contact) {
  const email = normaliseEmail(contact.email)
  const { data: existing } = await supabase.from('contacts').select('*').eq('email', email).limit(1).maybeSingle()
  if (existing) {
    const { data, error } = await supabase
      .from('contacts')
      .update({
        school_id: schoolId,
        name: contact.name || existing.name,
        phone: contact.phone || existing.phone,
        contact_type: contact.type,
        updated_at: new Date().toISOString(),
      })
      .eq('id', existing.id)
      .select('*')
      .single()
    if (error) throw error
    return data
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert({ school_id: schoolId, name: contact.name || null, email, phone: contact.phone || null, contact_type: contact.type })
    .select('*')
    .single()
  if (error) throw error
  return data
}

async function loadWorkshopAndSlot(supabase, body) {
  const { data: workshop, error: workshopError } = await supabase
    .from('workshops')
    .select('*, programmes(*)')
    .eq('id', body.workshopId)
    .maybeSingle()
  if (workshopError) throw workshopError
  if (!workshop || !isOnlinePrimaryWorkshop(workshop)) throw new Error('Course is not available for this pilot')

  const { data: slot, error: slotError } = await supabase
    .from('session_slots')
    .select('*')
    .eq('id', body.requestedSlotId)
    .eq('workshop_id', workshop.id)
    .maybeSingle()
  if (slotError) throw slotError
  if (!slot) throw new Error('Session slot not found')
  if (slot.status !== 'open') throw new Error('Session slot is not open for booking')
  if (!slot.zoom_registration_url) throw new Error('This session is not ready for booking yet')

  return { workshop, slot }
}

async function assertCapacity(supabase, slot, requestedClasses) {
  const { data, error } = await supabase
    .from('bookings')
    .select('id,status,total_classes,requested_slot_id,confirmed_slot_id')
    .or(`requested_slot_id.eq.${slot.id},confirmed_slot_id.eq.${slot.id}`)
  if (error) throw error

  const bookedClasses = countBookedClasses(data || [])
  const remaining = Number(slot.capacity || 0) - bookedClasses
  if (remaining < requestedClasses) throw new Error(`Only ${Math.max(remaining, 0)} class place(s) remain for this session`)
}

async function createChecklistJobs(supabase, context) {
  const copyText = buildExternalChecklistText(context)
  await supabase.from('sync_jobs').insert([
    { booking_id: context.booking.id, target: 'zoho', status: 'pending', payload: { mode: 'manual_checklist', copyText } },
    { booking_id: context.booking.id, target: 'google_calendar', status: 'pending', payload: { mode: 'manual_checklist', copyText } },
  ])
}

export async function GET(request) {
  const auth = await requireStaffUser(request)
  if (auth.error) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })

  const { data, error } = await auth.supabase
    .from('bookings')
    .select('*, schools(*), booker:contacts!bookings_booker_contact_id_fkey(*), teacher:contacts!bookings_teacher_contact_id_fkey(*), workshops(*), requested_slot:session_slots!bookings_requested_slot_id_fkey(*), confirmed_slot:session_slots!bookings_confirmed_slot_id_fkey(*), booking_class_lines(*), sync_jobs(*), email_logs(*), change_requests:booking_change_requests(*)')
    .order('created_at', { ascending: false })
    .limit(100)

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  const bookings = (data || []).filter((booking) => booking.workshops?.slug === 'online-primary')
  return NextResponse.json({ ok: true, bookings, staff: auth.staff })
}

export async function POST(request) {
  const start = Date.now()
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
  }

  try {
    const supabase = getServiceSupabase()
    const access = await validatePilotAccessCode(supabase, body.accessCode)
    if (!access.ok) return NextResponse.json({ ok: false, error: access.error }, { status: 401 })

    const schoolName = normaliseText(body.schoolName)
    const bookerEmail = normaliseEmail(body.bookerEmail)
    const teacherEmail = normaliseEmail(body.teacherEmail)
    if (!schoolName || !bookerEmail || !teacherEmail || !body.workshopId || !body.requestedSlotId) {
      return NextResponse.json({ ok: false, error: 'School, booker email, attending teacher email, course and date are required' }, { status: 400 })
    }

    const { workshop, slot } = await loadWorkshopAndSlot(supabase, body)
    const classLines = normaliseClassLines(body)
    const totalClasses = classLines.reduce((sum, line) => sum + line.class_count, 0)
    await assertCapacity(supabase, slot, totalClasses)

    const school = await getOrCreateSchool(supabase, body)
    const booker = await getOrCreateContact(supabase, school.id, {
      name: normaliseText(body.bookerName) || 'School booker',
      email: bookerEmail,
      phone: normaliseText(body.bookerPhone) || null,
      type: 'booker',
    })
    const teacher = await getOrCreateContact(supabase, school.id, {
      name: normaliseText(body.teacherName) || 'Attending teacher',
      email: teacherEmail,
      phone: normaliseText(body.teacherPhone) || null,
      type: 'teacher',
    })

    const basePrice = workshop.base_price_ex_vat == null ? null : Number(workshop.base_price_ex_vat)
    const totalExVat = basePrice == null ? null : totalClasses * basePrice
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert({
        school_id: school.id,
        booker_contact_id: booker.id,
        teacher_contact_id: teacher.id,
        workshop_id: workshop.id,
        requested_slot_id: slot.id,
        status: 'requested',
        pilot_access_code_id: access.accessCode.id,
        funding_source: body.fundingSource || null,
        purchase_order: normaliseText(body.purchaseOrder) || null,
        total_classes: totalClasses,
        total_ex_vat: totalExVat,
        internal_notes: normaliseText(body.notes) || null,
        change_token: randomUUID(),
      })
      .select('*')
      .single()

    if (bookingError) throw bookingError

    const classRows = classLines.map((line) => ({ ...line, booking_id: booking.id }))
    await supabase.from('booking_class_lines').insert(classRows)

    const context = { booking, school, booker, teacher, workshop, slot, classLines }
    await createChecklistJobs(supabase, context)
    await supabase.from('audit_events').insert({ booking_id: booking.id, event_type: 'booking_requested', event_payload: { source: 'pilot_public_form' } })
    await recordPilotAccessUse(supabase, access.accessCode)

    await sendBookingEmail({ supabase, templateKey: 'booking_received_booker', context })
    await sendBookingEmail({ supabase, templateKey: 'booking_received_teacher', context })
    await sendBookingEmail({ supabase, templateKey: 'booking_internal_alert', context })

    const origin = process.env.PUBLIC_APP_URL || new URL(request.url).origin
    console.log(JSON.stringify({ level: 'info', msg: 'booking_created', route: '/api/bookings', booking: booking.public_ref, ms: Date.now() - start }))
    return NextResponse.json({
      ok: true,
      booking: {
        id: booking.id,
        public_ref: booking.public_ref,
        manage_url: publicManageUrl(origin, booking),
      },
    })
  } catch (error) {
    console.error(JSON.stringify({ level: 'error', msg: 'booking_create_failed', route: '/api/bookings', error: error.message, ms: Date.now() - start }))
    return NextResponse.json({ ok: false, error: publicErrorMessage(error) }, { status: 500 })
  }
}
