# HIP Booking V1 Handover Pack

Prepared for Cormac and Karen.

## 1. What Exists Now

The HIP Booking V1 product has been built as a production-track pilot for Online Primary courses.

It currently includes:

- Public school booking page with pilot access code.
- Online Primary course and date selection.
- Separate booker and attending teacher details.
- Class line capture for year group/class count.
- Funding and purchase order fields for HIP records.
- Supabase-backed booking, school, contact, class-line, audit, email-log and checklist tables.
- HIP staff admin area.
- Staff role support: admin, staff, readonly.
- Booking confirmation/cancellation actions.
- Session readiness editing: capacity, presenter, joining link and session status.
- Zoho and Google Calendar checklist/export workflow.
- Secure school manage links for change/cancel requests.
- Reminder cron endpoint for 2-week and 2-day teacher reminders.
- Resend email implementation, off by default until production email is configured.
- Health check endpoint for deployment readiness.

The product is not yet deployed to `booking.hippsychology.com`. It is currently available as a local preview on this machine.

Local preview URL:

```text
http://127.0.0.1:3127
```

## 2. What You Can See Now

### Public Pilot Booking Page

URL:

```text
http://127.0.0.1:3127
```

This shows:

- HIP-branded public booking screen.
- Pilot access-code gate.
- Online Primary booking wording.

Once production Supabase data and a pilot code are configured, schools will be able to:

- Enter the pilot access code.
- Select an Online Primary course.
- Choose an open online session.
- Enter school, booker and attending teacher details.
- Add class lines.
- Submit a booking request for HIP review.

### Staff Login

URL:

```text
http://127.0.0.1:3127/login
```

This shows:

- HIP staff login.
- Email/password sign-in.
- Magic-link option.

Staff accounts must exist in Supabase Auth and in the `staff_users` table before login will work fully.

### HIP Admin

URL:

```text
http://127.0.0.1:3127/admin
```

This shows:

- Login-required gate if no staff session exists.
- Staff dashboard after login.
- Request queue.
- Booking detail view.
- Confirm/cancel actions.
- Session readiness editor.
- Zoho/Google Calendar checklist actions.
- School change request review.

### School Manage Link

URL pattern:

```text
http://127.0.0.1:3127/booking/[secure-token]
```

This is the page schools use to request changes after they have booked.

Schools can request:

- Teacher detail changes.
- Class detail changes.
- Reschedule request.
- Cancellation request.

HIP staff still approve or reject the request in admin. Schools cannot directly change confirmed bookings themselves.

## 3. What Needs Configured Before Real Testing

Before testing with real schools, these items must be completed.

### Supabase

Required:

- Apply `supabase/schema.sql`.
- Rotate the existing Supabase service-role key before sharing with HIP or real schools.
- Add HIP staff users to Supabase Auth.
- Add matching rows to `staff_users` for Karen, Cormac and any Blue Canvas support user.
- Seed the agreed Online Primary programme/course/session schedule.
- Seed at least one active pilot access code.

Important:

- The current local environment may not have the final production schema applied yet.
- If Supabase keys are invalid or the schema is missing, the public page will show a safe configuration error instead of accepting bookings.

### Resend Email

Required before live email:

- Verify the HIP sending domain in Resend.
- Set `RESEND_API_KEY`.
- Set `RESEND_FROM_EMAIL`.
- Set `HIP_INTERNAL_EMAIL`.
- Set `EMAIL_SENDING_ENABLED=true`.

Until `EMAIL_SENDING_ENABLED=true`, the app will not send live emails. It will create skipped email-log records instead.

### Vercel And Domain

Required:

- Create or connect the Vercel project.
- Add production environment variables.
- Add `booking.hippsychology.com` to the Vercel project.
- Point DNS for `booking.hippsychology.com` to Vercel.
- Confirm `/api/health` reports ready.

### Cron Reminders

The app includes a Vercel cron route:

```text
/api/cron/reminders
```

Required:

- Set `CRON_SECRET`.
- Keep the route protected with `Authorization: Bearer $CRON_SECRET`.
- Confirm the Vercel cron is active after production deployment.

## 4. Suggested Test Plan For Karen And Cormac

Use test school/contact data first. Do not start with live school data until the setup checks above are complete.

### Test 1: Staff Login

1. Go to `/login`.
2. Sign in as a HIP staff user.
3. Open `/admin`.
4. Confirm the dashboard loads.
5. Confirm the user role looks correct.

Pass condition:

- Staff can access admin.
- Non-staff users cannot access admin data.

### Test 2: Public Booking Request

1. Go to `/`.
2. Enter the pilot access code.
3. Select an Online Primary course.
4. Select an open online session.
5. Enter test school details.
6. Enter separate booker and attending teacher details.
7. Add at least one class line.
8. Submit the booking request.

Pass condition:

- Booking request is created.
- Public reference is shown.
- Booking appears in `/admin`.
- Email logs are created.

### Test 3: Confirm Booking

1. Open the booking in `/admin`.
2. Check the school, booker, teacher, class and session details.
3. Confirm the booking.

Pass condition:

- Booking status changes to confirmed.
- Confirmation email logs are created.
- If email sending is enabled, booker and teacher receive confirmation emails.

### Test 4: Zoho And Calendar Checklist

1. Open the confirmed booking in `/admin`.
2. Copy the Zoho checklist text.
3. Update Zoho manually.
4. Mark Zoho done.
5. Copy the Google Calendar checklist text.
6. Update the calendar manually.
7. Mark Calendar done.

Pass condition:

- Checklist items move from pending to done.
- HIP can copy the required information without retyping from emails.

### Test 5: School Change Request

1. Open the secure manage link for a test booking.
2. Request a teacher or class detail change.
3. Open `/admin`.
4. Review the change request.
5. Approve or reject it.

Pass condition:

- Change request appears in admin.
- HIP controls whether the change is accepted.
- The booking is not silently changed by the school.

### Test 6: Reminder Email Readiness

1. Confirm a booking with a session within the reminder window.
2. Run or wait for the cron reminder.
3. Check `email_logs`.

Pass condition:

- Teacher reminder email is logged.
- If email sending is enabled, the teacher receives the reminder.

## 5. What This Replaces

This product is intended to reduce or remove:

- Karen manually reading Gravity Forms emails and copying data.
- Manual re-entry of the same school data into several places.
- Confirmation emails only going to the person who booked.
- Teachers missing joining links or worksheet instructions.
- Phone calls caused by the wrong person receiving the reminder.
- The spreadsheet acting as the only source of truth.

In V1, Zoho and Calendar are still manual. The difference is that HIP gets a controlled checklist and copy-ready payload instead of reconstructing information from emails.

## 6. What Is Not Included In V1

V1 does not include:

- Automatic Zoho writes.
- Automatic Google Calendar writes.
- Automatic online meeting/joining-link creation.
- Public pricing or payments.
- Post-primary workflow.
- Full face-to-face course workflow.
- CSV import of the annual schedule.

These are deliberate exclusions to keep the first handoff stable.

## 7. Recommended Next Steps

### Step 1: Production Setup

- Rotate Supabase service key.
- Apply schema.
- Seed real Online Primary schedule.
- Configure staff users.
- Configure pilot access code.

### Step 2: Email Setup

- Configure Resend.
- Verify HIP sending domain.
- Approve email wording.
- Enable live sending.

### Step 3: Private Pilot

- Choose a small number of schools.
- Give them the pilot access code.
- Ask them to complete real or realistic bookings.
- Karen/Cormac confirm bookings in admin.
- Check whether emails, admin details and checklist text are correct.

### Step 4: Fix Pilot Issues

- Fix any wording, missing fields, reminder timing or checklist formatting issues.
- Confirm HIP can run the workflow without Blue Canvas entering data manually.

### Step 5: Launch

- Connect `booking.hippsychology.com`.
- Keep the pilot access code in place for the first launch period.
- Expand to more schools once Karen and Cormac are happy with the workflow.

## 8. Operational Rule

For V1, Supabase is the source of truth.

If a school changes something:

1. The change should be requested through the manage link or entered by HIP in admin.
2. HIP should approve it.
3. Then Zoho and Calendar should be updated from the checklist.

Do not update Zoho or Calendar first and then try to remember to update the booking system afterwards.
