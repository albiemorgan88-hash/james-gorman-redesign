export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { countBookedClasses, isOnlinePrimaryWorkshop } from '../../../../lib/bookingUtils'
import { validatePilotAccessCode } from '../../../../lib/pilotAccess'
import { getServiceSupabase } from '../../../../lib/supabase/server'

function mapWorkshop(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    stage: row.stage,
    delivery: row.delivery,
    termLabel: row.term_label,
    description: row.description,
    programmeTitle: row.programmes?.title,
    programmeType: row.programmes?.school_type,
    region: row.programmes?.region || row.region,
  }
}

function mapSlot(row, bookedClasses) {
  const remaining = Math.max(Number(row.capacity || 0) - bookedClasses, 0)
  return {
    id: row.id,
    workshopId: row.workshop_id,
    label: row.label,
    startsAt: row.starts_at,
    endsAt: row.ends_at,
    delivery: row.delivery,
    region: row.region,
    facilitator: row.presenter_name || 'HIP facilitator',
    capacity: row.capacity,
    booked: bookedClasses,
    remaining,
    status: remaining <= 0 ? 'full' : row.status,
    zoomReady: Boolean(row.zoom_registration_url),
  }
}

export async function GET(request) {
  const start = Date.now()
  const url = new URL(request.url)
  const accessCode = url.searchParams.get('accessCode')

  try {
    const supabase = getServiceSupabase()
    const access = await validatePilotAccessCode(supabase, accessCode)
    if (!access.ok) return NextResponse.json({ ok: false, error: access.error }, { status: 401 })

    const { data: workshopRows, error: workshopError } = await supabase
      .from('workshops')
      .select('*, programmes(*)')
      .eq('active', true)
      .eq('delivery', 'online')
      .order('title', { ascending: true })

    if (workshopError) throw workshopError

    const workshops = (workshopRows || [])
      .filter(isOnlinePrimaryWorkshop)
      .filter((workshop) => workshop.slug === 'online-primary')
    const workshopIds = workshops.map((workshop) => workshop.id)
    if (!workshopIds.length) {
      return NextResponse.json({ ok: true, workshops: [], sessions: [], message: 'No pilot courses are configured yet.' })
    }

    const { data: slotRows, error: slotError } = await supabase
      .from('session_slots')
      .select('*')
      .in('workshop_id', workshopIds)
      .in('status', ['open', 'draft'])
      .order('starts_at', { ascending: true })

    if (slotError) throw slotError

    const slotIds = (slotRows || []).map((slot) => slot.id)
    const { data: bookingRows, error: bookingError } = slotIds.length
      ? await supabase
        .from('bookings')
        .select('id,status,total_classes,requested_slot_id,confirmed_slot_id')
        .or(`requested_slot_id.in.(${slotIds.join(',')}),confirmed_slot_id.in.(${slotIds.join(',')})`)
      : { data: [], error: null }

    if (bookingError) throw bookingError

    const sessions = (slotRows || []).map((slot) => {
      const slotBookings = (bookingRows || []).filter((booking) => booking.requested_slot_id === slot.id || booking.confirmed_slot_id === slot.id)
      return mapSlot(slot, countBookedClasses(slotBookings))
    })

    console.log(JSON.stringify({ level: 'info', msg: 'public_booking_data_loaded', route: '/api/public/booking-data', ms: Date.now() - start }))
    return NextResponse.json({
      ok: true,
      accessLabel: access.accessCode.label,
      workshops: workshops.map(mapWorkshop),
      sessions,
    })
  } catch (error) {
    console.error(JSON.stringify({ level: 'error', msg: 'public_booking_data_failed', route: '/api/public/booking-data', error: error.message, ms: Date.now() - start }))
    return NextResponse.json({ ok: false, error: 'Booking is not available right now. Please contact HIP.' }, { status: 500 })
  }
}
