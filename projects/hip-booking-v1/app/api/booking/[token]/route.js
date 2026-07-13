export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { normaliseEmail, normaliseText } from '../../../../lib/bookingUtils'
import { sendBookingEmail } from '../../../../lib/integrations/email'
import { getServiceSupabase } from '../../../../lib/supabase/server'

async function loadContext(supabase, token) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, schools(*), booker:contacts!bookings_booker_contact_id_fkey(*), teacher:contacts!bookings_teacher_contact_id_fkey(*), workshops(*), requested_slot:session_slots!bookings_requested_slot_id_fkey(*), confirmed_slot:session_slots!bookings_confirmed_slot_id_fkey(*), booking_class_lines(*), change_requests:booking_change_requests(*)')
    .eq('change_token', token)
    .single()
  if (error) throw error
  return {
    booking: data,
    school: data.schools,
    booker: data.booker,
    teacher: data.teacher,
    workshop: data.workshops,
    slot: data.confirmed_slot || data.requested_slot,
    classLines: data.booking_class_lines || [],
    changeRequests: data.change_requests || [],
  }
}

export async function GET(request, { params }) {
  try {
    const supabase = getServiceSupabase()
    const context = await loadContext(supabase, params.token)
    return NextResponse.json({
      ok: true,
      booking: {
        public_ref: context.booking.public_ref,
        status: context.booking.status,
        school: context.school?.name,
        workshop: context.workshop?.title,
        slot: context.slot,
        teacher: context.teacher,
        classLines: context.classLines,
        openChangeRequests: context.changeRequests.filter((item) => item.status === 'requested').length,
      },
    })
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Booking link not found or expired' }, { status: 404 })
  }
}

export async function PATCH(request, { params }) {
  const start = Date.now()
  try {
    const body = await request.json()
    const supabase = getServiceSupabase()
    const context = await loadContext(supabase, params.token)
    const requestPayload = {
      teacherName: normaliseText(body.teacherName),
      teacherEmail: normaliseEmail(body.teacherEmail),
      teacherPhone: normaliseText(body.teacherPhone),
      preferredSlot: normaliseText(body.preferredSlot),
      classDetails: normaliseText(body.classDetails),
      notes: normaliseText(body.notes),
    }

    const { data: changeRequest, error } = await supabase
      .from('booking_change_requests')
      .insert({
        booking_id: context.booking.id,
        request_type: body.requestType || 'details_update',
        request_payload: requestPayload,
        requester_email: normaliseEmail(body.requesterEmail) || context.booker?.email || context.teacher?.email || null,
        status: 'requested',
      })
      .select('*')
      .single()
    if (error) throw error

    await supabase
      .from('bookings')
      .update({ status: 'change_requested', last_change_requested_at: new Date().toISOString(), updated_at: new Date().toISOString() })
      .eq('id', context.booking.id)

    await supabase.from('audit_events').insert({
      booking_id: context.booking.id,
      event_type: 'school_change_requested',
      event_payload: { changeRequestId: changeRequest.id, requestType: changeRequest.request_type },
    })

    await sendBookingEmail({ supabase, templateKey: 'change_request_internal', context: { ...context, changeRequest } })
    console.log(JSON.stringify({ level: 'info', msg: 'school_change_requested', route: '/api/booking/[token]', booking: context.booking.public_ref, ms: Date.now() - start }))
    return NextResponse.json({ ok: true, changeRequest })
  } catch (error) {
    console.error(JSON.stringify({ level: 'error', msg: 'school_change_request_failed', route: '/api/booking/[token]', error: error.message, ms: Date.now() - start }))
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
}
