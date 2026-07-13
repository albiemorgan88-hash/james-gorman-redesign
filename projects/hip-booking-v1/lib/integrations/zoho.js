export async function queueZohoSync({ booking, school, booker, teacher }) {
  // V1 implementation target:
  // - upsert Zoho Account for school
  // - upsert Zoho Contacts for booker and attending teacher
  // - create/update one Deal per school booking by default
  // - copy class lines into structured note/custom fields
  // - write sync_jobs row for success/failure/retry
  return {
    queued: true,
    provider: 'zoho_stub',
    bookingRef: booking?.id || booking?.public_ref || null,
    school: school?.name || booking?.school || null,
    contacts: [booker?.email, teacher?.email].filter(Boolean),
  }
}
