# HIP Psychology Booking/Admin Hub — V1 Plan

Date: 2026-05-07
Source docs:
- HIP Booking Process Review 2
- 20260331 Blue Canvas AI Work Draft

## V1 Goal

Build a private staff-only booking/admin hub plus a simple public booking flow so HIP can manage online and face-to-face workshop bookings from one source of truth.

The main operational win is to stop Karen copying the same details between Gravity Forms/email, Zoho CRM, Google Calendar, Zoom and spreadsheets.

## Current Process Summary

### Current systems
- WordPress / Gravity Forms on hippsychology.com
- Zoho CRM and Zoho Campaigns
- Google Calendar
- Zoom links are mandatory and currently manually created
- Tracking spreadsheet used as the integration substitute
- Emails/manual reminders handled by Karen

### Current phases
1. Annual setup each May: Cormac agrees workshop dates/times.
2. Karen creates separate Gravity Forms per workshop/package.
3. Karen manually adds sessions to Google Calendar.
4. Karen manually creates a Zoom registration link per session.
5. Karen checks names/details across calendar, Zoom and Zoho.
6. School submits booking form.
7. Karen receives email notification.
8. Karen manually clones/updates Zoho deal and calendar entry.
9. Confirmation goes to booker, often not the attending teacher.
10. Two-week reminder sent manually.
11. Changes cause manual updates across Zoho/calendar/email.
12. Two-day urgent reminder sent manually.
13. Karen phones schools because teacher comms are unreliable.
14. Teacher joins Zoom; correct teacher details often only captured at Zoom registration.

## Core Problems To Solve First

1. Booker and attending teacher are not always the same person.
2. No single source of truth for booking/session/class details.
3. Multiple class bookings are awkward because Zoho basic cannot use subforms.
4. Karen manually updates Zoho + Google Calendar + email reminders.
5. Late changes cascade across systems.
6. Calendar/session/facilitator availability needs to support more than one facilitator and simultaneous sessions.
7. Schools ideally need a way to check/change bookings themselves.

## V1 Recommendation

Build V1 as a controlled self-serve booking system where schools pick exact pre-approved workshop slots from a session catalogue.

Not fully open calendar scheduling yet. Instead:
- HIP creates/imports the annual session catalogue.
- Each session has date, time, workshop, region, capacity, facilitator and Zoom link.
- Schools pick from available sessions.
- The system captures booker + attending teacher details at booking time.
- Karen/Cormac can review, amend and troubleshoot from the dashboard.

## V1 Public Flow

### URL
Recommended:
- `bookings.hippsychology.com`

Optionally linked from HIP WordPress site.

### Public pages
1. Workshop catalogue
2. Workshop/session detail
3. Booking form
4. Confirmation page
5. Manage booking link/token page

### Booking form fields

#### School / organisation
- School name
- School type: Primary, Post-primary, ROI Primary, ROI Post-primary, Housing Association, Charity, Business sponsor, Other
- Region: NI, ROI, Belfast, border areas, Dundalk, Drogheda, Monaghan, other
- Address / postcode / Eircode
- Phone

#### Booker/admin contact
- Booker name
- Booker role
- Booker email
- Booker phone

#### Attending teacher/session lead
- Teacher name
- Teacher role
- Teacher email
- Teacher phone optional

#### Booking/session details
- Programme
- Workshop
- Delivery type: online / face-to-face
- Preferred/exact session slot
- Number of classes/groups
- Class/year group(s)
- Number of pupils/staff
- Who is paying / funding source
- Purchase order / invoice notes optional
- Worksheet/accessibility/practical notes
- Safeguarding or access notes optional

#### Multiple class workaround
Because Zoho basic lacks subforms, V1 should store multiple class lines in our own database and then sync to Zoho as:
- one parent deal per school booking, plus
- structured notes/tasks/custom text fields listing each class line, or
- multiple Zoho deals if HIP prefers one deal per class/session.

We should decide this with Karen before implementation.

## Workshop Catalogue From Docs

### NI Primary
- Staff Development Online: August and end/start of term
- KS1 HIP 'N' HAPPY Programme P1-P3, face-to-face
  - HIP 'N' HAPPY — Tricky Times
  - HIP 'N' HAPPY — My Feelings and I
  - HIP 'N' HAPPY — Building Friendships
- KS2 HIP 'N' Healthy Programme, generally online
  - Conquering P7 Worries, October
  - Anti-Bullying Megathon, November
  - Children's Mental Health Week, February
  - Tackling Anxiety, March
  - Enhancing Resilience, April
  - Taking The Next Step / Transitions, May-June
  - Cultural Diversity, May, new/review

### NI Post-primary
All face-to-face from doc:
- Staff Development
- KS3 Transitions P7-Year 8, June
- Year 8: Ready For Action, September/October
- Year 8 & 9: Tackling Anxiety
- Anti-Bullying
- Year 10: Taking The Next Step, January/February
- The Truth About Vaping
- KS4 Level Up — Transitioning to Year 11 and crushing GCSEs, September/October
- Year 12: Peak GCSE Exam Performance
- The Truth About Vaping
- KS5: Taking Control
- Nailing the Interview Game
- Financial Foundations
- Leading By Example
- Senior Prefect Leadership

### ROI
- Croke Park Hours Staff Development Online: August/September, January, April
- Junior 3rd to 6th Class HIP 'N' Healthy Programme, currently online, same as NI
- Junior Cycle 1st to 3rd Year topics similar to NI
- Transition Year topics
- Senior Cycle 5th to 6th Year topics
- Prefect Team / Leadership topics

### Sales/funding groupings
- RAISE
- Shared Education
- Extended Schools
- Neighbourhood Renewal
- Housing Associations
- Charities, e.g. East Belfast Restorative Justice programme
- Local wellbeing champions sponsorship, e.g. banks/credit unions for finance/interview skills workshops

## Pricing

The extracted docs reference packages and discounts but did not expose a clean price list in text.

OCR on the embedded screenshots found one example booking submission for Cultural Diversity with:
- Total Number of Classes: 2
- Total Cost (Ex. VAT): 240

That suggests a possible £120/class ex VAT for that example, but this should not be treated as the full price list without Karen/Cormac confirmation.

V1 should include pricing fields, but we need Karen/Cormac to confirm the actual prices before making them public or syncing values to Zoho.

Pricing fields to support:
- Base price
- Currency: GBP/EUR
- Package price
- Discount label/percentage
- Funding source
- Invoice required yes/no
- PO number optional
- VAT/tax treatment if relevant

## Private Dashboard V1

### Users
- Karen
- Cormac
- Blue Canvas/us

### Auth
- Email/password or magic link
- Role-based access: admin, staff, readonly

### Screens
1. Dashboard overview
   - new bookings
   - confirmed sessions
   - upcoming 2-week reminders
   - upcoming 2-day reminders
   - failed syncs
   - missing teacher email warnings

2. Bookings list
   - filter by status, school, workshop, date, facilitator, region, sync error

3. Booking detail
   - school/contact details
   - teacher details
   - classes/groups
   - chosen session slot
   - notes
   - status timeline
   - sync statuses
   - resend/retry buttons

4. Session catalogue
   - create/edit workshops and exact slots
   - assign facilitator
   - capacity
   - Google Calendar event ID
   - Zoom link
   - booking count

5. Workshop/programme admin
   - programme metadata
   - delivery type
   - target year groups
   - price/package fields
   - worksheet/instruction template

6. Sync/errors page
   - Zoho create/update status
   - Google Calendar status
   - email send status
   - retry action

7. School manage page/token lookup
   - resend confirmation
   - edit teacher details
   - request/change slot

## Automations V1

### On booking submission
1. Save booking to database.
2. Create/update school/contact in Zoho CRM.
3. Create Zoho deal/activity for the booking.
4. Update Google Calendar event with school, teacher, class, payment/funding notes.
5. Email booking contact confirmation.
6. Email attending teacher confirmation with Zoom link, date/time and worksheet instructions.
7. Email Karen + Cormac internal alert.

### Two weeks before
- Send teacher practical reminder.
- CC/booker optional.
- Include Zoom link, worksheet print instructions, class details, contact/change link.

### Two days before
- Send urgent teacher reminder.
- Flag dashboard if no teacher email or reminders failed.

### Changes
- Booking changed once in dashboard or manage link.
- System updates database, Zoho, calendar and email logs.

## Zoom Handling

Doc says Zoom is a MUST USE.

V1 safest approach:
- Keep Zoom link creation manual during annual setup.
- Store the Zoom registration link on each session slot.
- Automate the distribution and tracking of that link.

V1.1 / V2:
- Explore Zoom API to create sessions automatically with required settings:
  - registration enabled
  - custom school/class question
  - close registration after meeting

## Google Calendar Handling

User confirmed Google Calendar for now.

V1:
- Use Google Calendar API.
- Session slots can be created/imported into DB and calendar.
- On booking, update calendar event description/attendees with school/teacher/class data.

Longer term:
- M365/Outlook migration can be revisited later.

## Zoho CRM Handling

User confirmed Zoho CRM API already available.

V1 needs mapping decision:
- One deal per booking, or
- One deal per class/session line.

Recommended default:
- One Zoho deal per school booking.
- Add class/session lines as structured notes or custom fields.
- Use tasks/activities for reminders and delivery.

## Data Model

### tables
- users
- schools
- contacts
- programmes
- workshops
- session_slots
- bookings
- booking_class_lines
- booking_notes
- sync_jobs
- email_logs
- audit_events

### key statuses
- draft
- submitted
- confirmed
- change_requested
- delivered
- cancelled
- no_show

### sync statuses
- pending
- synced
- failed
- skipped

## Tech Stack

Recommended:
- Next.js app on Vercel
- Supabase Postgres + Auth
- Google Calendar API
- Zoho CRM API
- Resend or Google Workspace SMTP for emails from `info@hippsychology.com`
- Cron jobs for reminders/reconciliation
- Hosted on `bookings.hippsychology.com`

## Build Phases

### Phase 0 — setup and mapping
- Confirm price list
- Confirm Zoho deal mapping
- Confirm Google Calendar account/calendar
- Confirm email send method
- Confirm annual session list import format

### Phase 1 — staff dashboard and database
- Auth
- Booking/session schema
- Admin booking list/detail
- Session catalogue
- Manual booking creation/editing

### Phase 2 — public booking flow
- Public catalogue/booking form
- Teacher email captured separately
- Exact session selection
- Confirmation page

### Phase 3 — automation
- Confirmation emails
- Internal alerts
- Google Calendar update
- Zoho CRM sync
- Sync logs/retries

### Phase 4 — reminders and manage link
- Two-week and two-day reminders
- School manage/change link
- Dashboard warnings

### Phase 5 — hardening
- Import annual schedule
- Error reconciliation
- Admin reporting
- Role permissions

## Required Access / Decisions

1. Google Calendar API access and target calendar ID.
2. Zoho CRM API details and module/custom field mapping.
3. Confirm whether Zoho Campaigns remains separate or touched later.
4. Email sending approval and DNS if using Resend for `info@hippsychology.com`.
5. Actual prices/packages/discounts.
6. Current worksheet/instruction templates for each workshop.
7. Annual session schedule format for upcoming academic year.
8. Facilitator list and rules for simultaneous sessions.
9. Decision: one Zoho deal per booking vs per class/session line.
10. Subdomain DNS access for `bookings.hippsychology.com`.

## Important Security Note

The supplied docs contain login credentials. Do not repeat them in chat/docs. Move production secrets into environment variables and rotate passwords/API keys after the integration is complete.
