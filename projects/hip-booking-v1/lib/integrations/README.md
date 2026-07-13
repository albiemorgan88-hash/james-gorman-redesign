# HIP Booking V1 integration boundaries

These are intentionally safe stubs for the real build. They define what each integration should do without making live writes from the prototype.

## Order to wire

1. Supabase database/auth
2. Email confirmations/internal alerts through Resend
3. Reminder cron jobs
4. Google Calendar manual checklist/export
5. Zoho CRM manual checklist/export
6. Automatic online meeting/joining-link creation later if HIP wants to remove manual setup

## Safety rules

- No client-side service keys.
- All writes happen in server actions/API routes.
- Public school flow writes through server-side validation only.
- School manage links use opaque booking `change_token`, never direct Supabase anon table access.
- Log every email send attempt to `email_logs`.
- Keep Zoho and Google Calendar as staff checklist jobs in V1; mark completion in `sync_jobs`.
