export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { normaliseText } from '../../../../../lib/bookingUtils'
import { sendBookingEmail } from '../../../../../lib/integrations/email'
import { canWrite, requireStaffUser } from '../../../../../lib/supabase/admin'

async function loadBookingContext(supabase, id) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, schools(*), booker:contacts!bookings_booker_contact_id_fkey(*), teacher:contacts!bookings_teacher_contact_id_fkey(*), workshops(*), requested_slot:session_slots!bookings_requested_slot_id_fkey(*), confirmed_slot:session_slots!bookings_confirmed_slot_id_fkey(*), booking_class_lines(*)')
    .eq('id', id)
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
  }
}

async function applyChangeRequest(supabase, bookingId, changeRequestId, staff, approved) {
  const { data: request, error } = await supabase
    .from('booking_change_requests')
    .select('*')
    .eq('id', changeRequestId)
    .eq('booking_id', bookingId)
    .single()
  if (error) throw error

  const payload = request.request_payload || {}
  const { data: bookingForChange } = await supabase
    .from('bookings')
    .select('teacher_contact_id, internal_notes, status, confirmed_at, confirmed_slot_id')
    .eq('id', bookingId)
    .single()
  const statusAfterChange = bookingForChange?.status === 'change_requested'
    ? (bookingForChange?.confirmed_at || bookingForChange?.confirmed_slot_id ? 'confirmed' : 'requested')
    : bookingForChange?.status

  let approvedBookingPatch = null
  if (approved) {
    if (payload.teacherEmail || payload.teacherName || payload.teacherPhone) {
      if (bookingForChange?.teacher_contact_id) {
        await supabase
          .from('contacts')
          .update({
            name: payload.teacherName || undefined,
            email: payload.teacherEmail || undefined,
            phone: payload.teacherPhone || undefined,
            updated_at: new Date().toISOString(),
          })
          .eq('id', bookingForChange.teacher_contact_id)
      }
    }

    if (request.request_type === 'cancel') {
      approvedBookingPatch = {
        status: 'cancelled',
        cancelled_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    } else {
      const changeNotes = [
        payload.preferredSlot ? `Requested date/time: ${payload.preferredSlot}` : null,
        payload.classDetails ? `Class details: ${payload.classDetails}` : null,
        payload.notes ? `School notes: ${payload.notes}` : null,
      ].filter(Boolean)
      const approvedNotes = changeNotes.length
        ? [
            bookingForChange?.internal_notes,
            `Approved school change request (${request.request_type}):`,
            ...changeNotes,
          ].filter(Boolean).join('\n')
        : bookingForChange?.internal_notes
      approvedBookingPatch = {
        status: statusAfterChange || 'requested',
        internal_notes: approvedNotes || undefined,
        updated_at: new Date().toISOString(),
      }
    }

    await supabase.from('bookings').update(approvedBookingPatch).eq('id', bookingId)
    await supabase
      .from('sync_jobs')
      .update({ status: 'pending', updated_at: new Date().toISOString() })
      .eq('booking_id', bookingId)
      .in('target', ['zoho', 'google_calendar'])
  } else if (bookingForChange?.status === 'change_requested') {
    await supabase
      .from('bookings')
      .update({ status: statusAfterChange || 'requested', updated_at: new Date().toISOString() })
      .eq('id', bookingId)
  }

  await supabase
    .from('booking_change_requests')
    .update({
      status: approved ? 'approved' : 'rejected',
      resolved_by_user_id: staff.id,
      resolved_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', changeRequestId)
}

export async function PATCH(request, { params }) {
  const start = Date.now()
  const auth = await requireStaffUser(request, ['admin', 'staff'])
  if (auth.error) return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  if (!canWrite(auth.staff)) return NextResponse.json({ ok: false, error: 'Readonly staff cannot update bookings' }, { status: 403 })

  try {
    const body = await request.json()
    const patch = { updated_at: new Date().toISOString() }
    const action = body.action || 'patch'

    if (action === 'confirm') {
      patch.status = 'confirmed'
      patch.confirmed_slot_id = body.confirmedSlotId || body.confirmed_slot_id || body.requestedSlotId || undefined
      patch.confirmed_at = body.confirmedAt || new Date().toISOString()
    } else if (action === 'cancel') {
      patch.status = 'cancelled'
      patch.cancelled_at = new Date().toISOString()
    } else if (action === 'approve_change' || action === 'reject_change') {
      await applyChangeRequest(auth.supabase, params.id, body.changeRequestId, auth.staff, action === 'approve_change')
    } else {
      if (body.status) patch.status = body.status
      if (body.confirmedSlotId) patch.confirmed_slot_id = body.confirmedSlotId
      if (body.confirmedAt) patch.confirmed_at = body.confirmedAt
    }

    if (body.internalNotes !== undefined) patch.internal_notes = normaliseText(body.internalNotes) || null
    if (body.purchaseOrder !== undefined) patch.purchase_order = normaliseText(body.purchaseOrder) || null
    if (body.fundingSource !== undefined) patch.funding_source = normaliseText(body.fundingSource) || null

    let data
    if (Object.keys(patch).length > 1 || action === 'confirm' || action === 'cancel') {
      const result = await auth.supabase
        .from('bookings')
        .update(patch)
        .eq('id', params.id)
        .select('*')
        .single()
      if (result.error) throw result.error
      data = result.data
    } else {
      const result = await auth.supabase.from('bookings').select('*').eq('id', params.id).single()
      if (result.error) throw result.error
      data = result.data
    }

    await auth.supabase.from('audit_events').insert({
      booking_id: params.id,
      actor_user_id: auth.staff.id,
      event_type: `booking_admin_${action}`,
      event_payload: body,
    })

    if (action === 'confirm') {
      const context = await loadBookingContext(auth.supabase, params.id)
      await sendBookingEmail({ supabase: auth.supabase, templateKey: 'booking_confirmed_booker', context })
      await sendBookingEmail({ supabase: auth.supabase, templateKey: 'booking_confirmed_teacher', context })
    }

    console.log(JSON.stringify({ level: 'info', msg: 'booking_admin_updated', route: '/api/admin/booking/[id]', bookingId: params.id, action, ms: Date.now() - start }))
    return NextResponse.json({ ok: true, booking: data })
  } catch (error) {
    console.error(JSON.stringify({ level: 'error', msg: 'booking_admin_update_failed', route: '/api/admin/booking/[id]', bookingId: params.id, error: error.message, ms: Date.now() - start }))
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
}
