# HIP Booking Hub V1 — build notes

## Decisions answered from Claude brief

### Auth model
- Staff dashboard: Supabase Auth for Karen, Cormac and Blue Canvas/us.
- Roles: admin, staff, readonly.
- Schools do not need accounts in V1.
- School edits/changes use secure manage links backed by an opaque `change_token`.

### Multi-presenter sessions
- Supported in V1 by `session_slots.presenter_user_id` / `presenter_name`.
- Simultaneous NI/ROI or online/face-to-face sessions are separate slots with their own presenter, capacity, joining link and calendar event.
- Admin confirmation drawer can assign/change presenter before final confirmation.

### Cancellation/change policy
- Schools submit change/cancel requests through manage link.
- HIP manually confirms changes in V1.
- Once confirmed, sync jobs update email, Google Calendar and Zoho.
- Audit events record who changed what and when.

### Pricing
- Pricing is stored internally on courses/bookings/class lines.
- Public price display should stay off until Karen/Cormac confirm the full list.
- The current £240/2 classes demo value is example/mock only, not a final rule.

## Implementation order

1. Apply `supabase/schema.sql` to a dedicated Supabase project.
2. Add Supabase client/server helpers.
3. Replace homepage mock reads with server-side queries. Done for the pilot public flow.
4. Add public request creation route/server action. Done for access-code protected Online Primary sessions.
5. Add staff auth and protected admin route. Done with staff role checks.
6. Add email queue/send implementation. Done through Resend with an explicit live-send switch.
7. Add Google Calendar update implementation. V1 uses checklist/export only.
8. Add Zoho CRM sync implementation. V1 uses checklist/export only.
9. Add reminder/reconciliation cron jobs. Reminder cron route exists.
10. Add automatic meeting/joining-link creation later if manual setup becomes the bottleneck.

## Prototype status

The V1 pilot remains controlled:
- public booking requires a pilot access code
- public booking writes only to Supabase and email logs
- live emails require Resend env vars and `EMAIL_SENDING_ENABLED=true`
- Zoho and Google Calendar stay manual checklist items
- protected admin confirmation updates Supabase and sends confirmation emails only when live email is enabled
