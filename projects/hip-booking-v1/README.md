# HIP Booking Hub V1

Production-track booking product for HIP Psychology Online Primary course pilots.

## Run

```bash
cd /Users/philsagent/.openclaw/workspace/projects/hip-booking-v1
npm install
npm run dev -- --hostname 127.0.0.1 --port 3127
```

Open: http://127.0.0.1:3127

## Current scope

- Access-code protected public pilot flow for Online Primary courses
- Supabase-backed courses, sessions, bookings, contacts, class lines, email logs, audit logs and checklist jobs
- HIP staff admin with role checks, confirmation/cancellation, session readiness, school change requests and Zoho/Calendar checklist support
- Resend-backed transactional email implementation with safe `EMAIL_SENDING_ENABLED` switch
- Secure school manage links for requesting changes
- Vercel cron route for teacher reminders

## Not live yet

- No Zoho writes
- No Google Calendar writes
- Email sends only when Resend env vars are configured and `EMAIL_SENDING_ENABLED=true`
- No automatic joining-link creation

## Next build steps

1. Rotate the existing Supabase service-role key before any client-facing demo.
2. Apply `supabase/schema.sql` to production Supabase.
3. Seed HIP's approved Online Primary course schedule and pilot access code.
4. Configure Resend domain authentication and Vercel production env vars.
5. Run pilot acceptance with selected schools.
6. Expand beyond Online Primary once the remaining HIP booking process is documented.

## Privacy

Keep raw source docs and credentials out of the app. Use `.env.example` as the production env contract and rotate any shared keys before launch.
