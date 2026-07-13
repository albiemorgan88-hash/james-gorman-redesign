import { bookings, programmes, sessionSlots } from './mockData'

export const v1Decisions = {
  authModel: {
    staff: 'Supabase Auth for Karen, Cormac and Blue Canvas/admin users.',
    schools: 'No school accounts in V1. Schools submit requests publicly and manage changes through secure magic links/change tokens.',
  },
  bookingModel: 'Request-to-book: school picks preferred exact slot, HIP confirms presenter/time before final confirmation email.',
  multiPresenter: 'Each session slot carries presenter assignment. Simultaneous NI/ROI or online/face-to-face sessions are supported by separate slots with separate presenters/capacity.',
  cancellationPolicy: 'Schools can request changes/cancellation via manage link. HIP staff approve and then update calendar/email/Zoho from the V1 checklist.',
  pricing: 'Store pricing internally per course/booking/class line. Do not expose final public pricing until Karen/Cormac confirm the full price list. Current demo pricing is example-only.',
}

export function getProgrammeOptions() {
  return programmes.map((programme) => ({
    id: programme.id,
    title: programme.title,
    description: programme.description,
    workshopCount: programme.workshops.length,
  }))
}

export function getAvailableSlots() {
  return sessionSlots
    .filter((slot) => slot.booked < slot.capacity)
    .map((slot) => ({
      ...slot,
      remaining: slot.capacity - slot.booked,
      isPending: slot.booked > 0 && slot.booked >= slot.capacity - 2,
    }))
}

export function getAdminSummary() {
  return {
    needsAttention: 2,
    bookingRequests: bookings.length,
    exactSlots: sessionSlots.length,
    syncErrors: bookings.filter((booking) => [booking.zoho, booking.calendar, booking.email].includes('failed')).length,
    teacherGaps: bookings.filter((booking) => !booking.teacher.email).length,
  }
}

export function getBookingById(id) {
  return bookings.find((booking) => booking.id === id) || null
}

export function getNeedsAttentionBookings() {
  return bookings.filter((booking) => booking.status === 'needs-teacher' || booking.zoho === 'failed' || booking.email === 'failed')
}
