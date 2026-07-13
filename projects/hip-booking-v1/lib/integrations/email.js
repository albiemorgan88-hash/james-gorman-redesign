import { formatSlotDateTime, publicManageUrl } from '../bookingUtils'

const templateLabels = {
  booking_received_booker: 'Booking request received',
  booking_received_teacher: 'Course request received',
  booking_internal_alert: 'New HIP booking request',
  booking_confirmed_booker: 'Booking confirmed',
  booking_confirmed_teacher: 'Course details confirmed',
  reminder_2_weeks: 'Course reminder',
  reminder_2_days: 'Urgent course reminder',
  change_request_internal: 'Booking change requested',
}

function appOrigin() {
  return process.env.PUBLIC_APP_URL || process.env.NEXT_PUBLIC_APP_URL || 'https://booking.hippsychology.com'
}

function fromEmail() {
  return process.env.RESEND_FROM_EMAIL || 'HIP Psychology <bookings@hippsychology.com>'
}

function internalEmail() {
  return process.env.HIP_INTERNAL_EMAIL || 'info@hippsychology.com'
}

function emailEnabled() {
  return process.env.EMAIL_SENDING_ENABLED === 'true' && Boolean(process.env.RESEND_API_KEY)
}

function baseBookingLines(context) {
  const { booking, school, workshop, slot, teacher } = context
  return [
    `Reference: ${booking?.public_ref || 'TBC'}`,
    `School: ${school?.name || 'TBC'}`,
    `Course: ${workshop?.title || 'TBC'}`,
    `Date/time: ${formatSlotDateTime(slot)}`,
    `Attending teacher: ${teacher?.name || 'TBC'} (${teacher?.email || 'email missing'})`,
    `Course joining link: ${slot?.zoom_registration_url || 'to follow from HIP'}`,
  ]
}

function paragraph(lines) {
  return lines.map((line) => `<p>${escapeHtml(line)}</p>`).join('')
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function renderBookingEmail(templateKey, context) {
  const { booking, teacher, booker, slot, changeRequest } = context
  const manageUrl = publicManageUrl(appOrigin(), booking)
  const lines = baseBookingLines(context)

  if (templateKey === 'booking_received_booker') {
    return {
      subject: `HIP Psychology booking request received (${booking.public_ref})`,
      html: paragraph([
        'Thanks, we have received your HIP Psychology booking request.',
        'HIP will review the course details and confirm the booking shortly.',
        ...lines,
        manageUrl ? `Need to change anything? Use ${manageUrl}` : '',
      ]),
    }
  }

  if (templateKey === 'booking_received_teacher') {
    return {
      subject: `HIP Psychology course request received (${booking.public_ref})`,
      html: paragraph([
        'You have been listed as the attending teacher for this HIP Psychology course request.',
        'HIP will confirm the final details shortly. You will receive the practical course reminders directly.',
        ...lines,
        manageUrl ? `Need to change anything? Use ${manageUrl}` : '',
      ]),
    }
  }

  if (templateKey === 'booking_confirmed_booker' || templateKey === 'booking_confirmed_teacher') {
    return {
      subject: `HIP Psychology booking confirmed (${booking.public_ref})`,
      html: paragraph([
        'Your HIP Psychology course booking is confirmed.',
        'Please make sure the attending teacher has the joining link and any course instructions before the session.',
        ...lines,
        manageUrl ? `Need to request a change? Use ${manageUrl}` : '',
      ]),
    }
  }

  if (templateKey === 'reminder_2_weeks') {
    return {
      subject: `HIP Psychology course reminder: ${slot?.label || booking.public_ref}`,
      html: paragraph([
        'Your HIP Psychology course is coming up in around two weeks.',
        'Please check the course details and prepare any required class materials in advance.',
        ...lines,
        manageUrl ? `Need to request a change? Use ${manageUrl}` : '',
      ]),
    }
  }

  if (templateKey === 'reminder_2_days') {
    return {
      subject: `Urgent HIP Psychology reminder: ${slot?.label || booking.public_ref}`,
      html: paragraph([
        'Your HIP Psychology course is coming up shortly.',
        'Please confirm the attending teacher has the joining link and class materials ready.',
        ...lines,
        manageUrl ? `Need to request a change? Use ${manageUrl}` : '',
      ]),
    }
  }

  if (templateKey === 'change_request_internal') {
    return {
      subject: `Change requested for HIP booking ${booking.public_ref}`,
      html: paragraph([
        `A school has requested a change for booking ${booking.public_ref}.`,
        `Requested change: ${changeRequest?.request_type || 'details_update'}`,
        changeRequest?.request_payload?.notes ? `Notes: ${changeRequest.request_payload.notes}` : '',
        ...lines,
      ]),
    }
  }

  return {
    subject: `${templateLabels[templateKey] || 'HIP Booking update'} (${booking?.public_ref || 'booking'})`,
    html: paragraph(lines),
  }
}

export function recipientsForTemplate(templateKey, context) {
  const { booker, teacher } = context
  if (templateKey.endsWith('_teacher') || templateKey.startsWith('reminder_')) {
    return [{ email: teacher?.email, type: 'teacher' }].filter((item) => item.email)
  }
  if (templateKey.endsWith('_booker')) {
    return [{ email: booker?.email, type: 'booker' }].filter((item) => item.email)
  }
  if (templateKey.endsWith('_internal')) {
    return [{ email: internalEmail(), type: 'internal' }]
  }
  return []
}

export async function sendBookingEmail({ supabase, templateKey, context }) {
  const rendered = renderBookingEmail(templateKey, context)
  const recipients = recipientsForTemplate(templateKey, context)
  const results = []

  for (const recipient of recipients) {
    const logRow = {
      booking_id: context.booking?.id || null,
      template_key: templateKey,
      recipient_email: recipient.email,
      recipient_type: recipient.type,
      status: 'pending',
    }

    if (!emailEnabled()) {
      const { data } = await supabase
        .from('email_logs')
        .insert({ ...logRow, status: 'skipped', error_message: 'Email sending disabled or RESEND_API_KEY missing' })
        .select('*')
        .single()
      results.push({ ok: true, skipped: true, log: data })
      continue
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail(),
          to: recipient.email,
          subject: rendered.subject,
          html: rendered.html,
        }),
      })
      const json = await response.json().catch(() => ({}))
      const ok = response.ok
      const { data } = await supabase
        .from('email_logs')
        .insert({
          ...logRow,
          status: ok ? 'synced' : 'failed',
          provider_message_id: json.id || null,
          error_message: ok ? null : (json.message || `Resend status ${response.status}`),
          sent_at: ok ? new Date().toISOString() : null,
        })
        .select('*')
        .single()
      results.push({ ok, response: json, log: data })
    } catch (error) {
      const { data } = await supabase
        .from('email_logs')
        .insert({ ...logRow, status: 'failed', error_message: error.message })
        .select('*')
        .single()
      results.push({ ok: false, error: error.message, log: data })
    }
  }

  return results
}
