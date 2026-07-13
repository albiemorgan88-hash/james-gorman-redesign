# HIP Booking V1 Handoff Runbook

## Production Launch

1. Rotate the Supabase service-role key before any client-facing pilot.
2. Apply `supabase/schema.sql` to the production Supabase project.
3. Seed the agreed Online Primary course schedule and a pilot access code.
4. Configure Vercel production env vars from `.env.example`.
5. Add `booking.hippsychology.com` to the Vercel project and set DNS with HIP.
6. Configure Resend for the HIP sending domain, then set `EMAIL_SENDING_ENABLED=true`.
7. Run `npm run check` before production deployment.
8. Confirm `/api/health` reports Supabase, Resend, cron secret and public URL readiness.

## Day-To-Day HIP Workflow

- Schools use the private pilot access code to request Online Primary course places.
- HIP staff review requests in `/admin`, confirm bookings, and update session readiness.
- Confirmation emails go to the booker and attending teacher when a staff member confirms a booking.
- Zoho and Google Calendar are V1 checklist items: copy the prepared payload, update the external system, then mark the checklist item done.
- Schools use their manage link to request teacher/date/class/cancellation changes; HIP approves or rejects those from `/admin`.

## Reminder Automation

- Vercel calls `/api/cron/reminders` daily at 08:00 UTC.
- The route requires `Authorization: Bearer $CRON_SECRET`.
- The cron sends teacher reminders around 2 weeks and 2 days before confirmed sessions.
- Every attempt is recorded in `email_logs`; failed attempts are visible in Supabase and Vercel logs.

## Support And Recovery

- Use `/api/health` for first-line environment/database checks.
- Use Vercel runtime logs for structured route errors.
- If Resend is misconfigured, set `EMAIL_SENDING_ENABLED=false`; the app will keep creating skipped email logs without blocking bookings.
- If Supabase is unavailable, public booking returns a clear error and no external writes are attempted.
- If a school submits the wrong details, use the manage link or staff admin edit/checklist flow rather than editing external systems first.

## Handoff Acceptance

- At least one selected school completes a pilot booking.
- HIP confirms the request appears in `/admin` with correct booker, teacher, class, funding and slot details.
- HIP confirms booker/teacher emails are received.
- HIP copies and completes the Zoho and Google Calendar checklist items.
- HIP submits a change request through the manage link and confirms it appears in `/admin`.
