export async function queueCalendarUpdate({ booking, slot }) {
  // V1 implementation target:
  // - update existing HIP session event when a request is confirmed
  // - include school, booker, teacher, class lines, funding and joining-link details
  // - store google_calendar_event_id on session_slots
  // - write sync_jobs row for success/failure/retry
  return {
    queued: true,
    provider: 'google_calendar_stub',
    bookingRef: booking?.id || booking?.public_ref || null,
    slotId: slot?.id || booking?.confirmed_slot_id || booking?.requested_slot_id || null,
  }
}
