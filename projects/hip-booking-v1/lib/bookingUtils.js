import { createHash } from 'crypto'

export const BOOKING_STATUSES_COUNTING_TOWARD_CAPACITY = ['requested', 'needs_info', 'confirmed', 'change_requested']
export const ONLINE_PRIMARY_PROGRAMME_TYPES = ['Primary', 'NI Primary', 'Primary + Post-primary']

export function normaliseEmail(value) {
  return String(value || '').trim().toLowerCase()
}

export function normaliseText(value) {
  return String(value || '').trim()
}

export function hashAccessCode(code) {
  return createHash('sha256').update(String(code || '').trim().toUpperCase()).digest('hex')
}

export function normaliseClassLines(body) {
  const fallback = [{
    year_group: body.yearGroup || 'TBC',
    class_count: Number(body.totalClasses || 1),
    notes: body.classDetails || null,
  }]
  const lines = Array.isArray(body.classLines) && body.classLines.length ? body.classLines : fallback

  return lines.map((line) => ({
    year_group: normaliseText(line.year_group || line.group || 'TBC') || 'TBC',
    class_count: Math.max(Number(line.class_count || line.classes || 1), 1),
    pupil_count: line.pupil_count ? Number(line.pupil_count) : null,
    notes: normaliseText(line.notes) || null,
  }))
}

export function countBookedClasses(bookings = []) {
  return bookings
    .filter((booking) => BOOKING_STATUSES_COUNTING_TOWARD_CAPACITY.includes(booking.status))
    .reduce((sum, booking) => sum + Number(booking.total_classes || 0), 0)
}

export function remainingCapacity(slot, bookings = []) {
  return Math.max(Number(slot?.capacity || 0) - countBookedClasses(bookings), 0)
}

export function isOnlinePrimaryWorkshop(workshop) {
  const programmeType = workshop?.programmes?.school_type || workshop?.programme?.school_type || workshop?.school_type
  return workshop?.active !== false &&
    workshop?.delivery === 'online' &&
    ONLINE_PRIMARY_PROGRAMME_TYPES.some((type) => String(programmeType || '').includes(type))
}

export function formatSlotDateTime(slot) {
  if (!slot?.starts_at) return 'No slot selected'
  const starts = new Date(slot.starts_at)
  const ends = slot.ends_at ? new Date(slot.ends_at) : null
  const date = starts.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
  const startTime = starts.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const endTime = ends ? ends.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) : ''
  return `${slot.label} · ${date} · ${startTime}${endTime ? `-${endTime}` : ''}`
}

export function buildExternalChecklistText({ booking, school, booker, teacher, workshop, slot, classLines }) {
  const lines = [
    `Booking: ${booking.public_ref}`,
    `School: ${school?.name || 'TBC'}`,
    `Course: ${workshop?.title || 'TBC'}`,
    `Date/time: ${formatSlotDateTime(slot)}`,
    `Booker: ${booker?.name || 'TBC'} <${booker?.email || 'missing'}> ${booker?.phone || ''}`.trim(),
    `Attending teacher: ${teacher?.name || 'TBC'} <${teacher?.email || 'missing'}> ${teacher?.phone || ''}`.trim(),
    `Funding/PO: ${booking.funding_source || 'TBC'}${booking.purchase_order ? ` / ${booking.purchase_order}` : ''}`,
    `Classes: ${(classLines || []).map((line) => `${line.year_group} x${line.class_count}`).join(', ') || 'TBC'}`,
    `Course joining link: ${slot?.zoom_registration_url || 'Missing'}`,
  ]

  return lines.join('\n')
}

export function publicManageUrl(origin, booking) {
  if (!origin || !booking?.change_token) return null
  return `${origin.replace(/\/$/, '')}/booking/${booking.change_token}`
}
