export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { sendBookingEmail } from '../../../../lib/integrations/email'
import { getServiceSupabase } from '../../../../lib/supabase/server'

const DAY_MS = 24 * 60 * 60 * 1000

function dueTemplate(slot) {
  if (!slot?.starts_at) return null
  const msUntil = new Date(slot.starts_at).getTime() - Date.now()
  if (msUntil <= 14 * DAY_MS && msUntil > 7 * DAY_MS) return 'reminder_2_weeks'
  if (msUntil <= 2 * DAY_MS && msUntil > 0) return 'reminder_2_days'
  return null
}

async function alreadySent(supabase, bookingId, templateKey, recipient) {
  const { data, error } = await supabase
    .from('email_logs')
    .select('id')
    .eq('booking_id', bookingId)
    .eq('template_key', templateKey)
    .eq('recipient_email', recipient)
    .in('status', ['synced', 'skipped', 'pending'])
    .limit(1)
  if (error) throw error
  return Boolean(data?.length)
}

export async function GET(request) {
  const start = Date.now()
  const authHeader = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    const supabase = getServiceSupabase()
    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*, schools(*), booker:contacts!bookings_booker_contact_id_fkey(*), teacher:contacts!bookings_teacher_contact_id_fkey(*), workshops(*), requested_slot:session_slots!bookings_requested_slot_id_fkey(*), confirmed_slot:session_slots!bookings_confirmed_slot_id_fkey(*), booking_class_lines(*)')
      .eq('status', 'confirmed')
      .limit(200)

    if (error) throw error

    const results = []
    for (const booking of bookings || []) {
      const slot = booking.confirmed_slot || booking.requested_slot
      const templateKey = dueTemplate(slot)
      const teacherEmail = booking.teacher?.email
      if (!templateKey || !teacherEmail) continue
      if (await alreadySent(supabase, booking.id, templateKey, teacherEmail)) continue

      const context = {
        booking,
        school: booking.schools,
        booker: booking.booker,
        teacher: booking.teacher,
        workshop: booking.workshops,
        slot,
        classLines: booking.booking_class_lines || [],
      }
      const sent = await sendBookingEmail({ supabase, templateKey, context })
      results.push({ booking: booking.public_ref, templateKey, sent })
    }

    console.log(JSON.stringify({ level: 'info', msg: 'reminder_cron_completed', route: '/api/cron/reminders', sent: results.length, ms: Date.now() - start }))
    return NextResponse.json({ ok: true, sent: results.length, results })
  } catch (error) {
    console.error(JSON.stringify({ level: 'error', msg: 'reminder_cron_failed', route: '/api/cron/reminders', error: error.message, ms: Date.now() - start }))
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
}
