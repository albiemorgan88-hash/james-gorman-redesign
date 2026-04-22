# Teacher Cover Tool Build Guide

This is the dumb-simple version for walking Kevy through it on a video call.

Do not start with a fancy Copilot agent.
Start with a boring Microsoft workflow that works:

`Microsoft Form -> Microsoft List -> Power Automate -> Outlook emails -> simple dashboard`

Copilot can sit on top later.

## What We Are Actually Building

When a teacher is going to be off, the school should be able to:

1. Log the absence quickly on a phone or laptop.
2. Store the absence in one clean place.
3. Decide whether it needs internal cover or an external specialist.
4. Notify the right people automatically.
5. Send the chosen cover teacher the timetable, room info, and lesson-plan link.
6. Confirm back to the head/admin that it is sorted.

## Important Call Rule

For version 1, do not try to build:

- live SIMS integration
- automatic SMS parsing
- first-reply-wins booking logic
- a fully autonomous Copilot agent

Those can come later.

For version 1, the goal is simple:

- one form to log the absence
- one list to track it
- one flow to send the right emails
- one approval step for the head/admin

## What To Open In Microsoft 365

From the Microsoft `All apps` screen, open these:

1. `Forms`
2. `Lists`
3. `Excel`
4. `Power Automate`
5. `Outlook`

Ignore `Agent Store` for now.
Ignore Copilot chat settings for now.
Those screenshots are useful context, but they are not the first build step.

## The Real Workflow From Kevy

This is the workflow that came through in chat, with Kevy’s correction built in:

1. Teacher says they are off.
2. Head/admin opens a quick form on their phone.
3. The absence is logged straight away.
4. If it is a short or manageable absence, school tries internal cover first.
5. If it is a longer absence, school looks for a specialist external cover teacher.
6. Head/admin picks the best option.
7. System sends the booking details out.
8. Head/admin gets confirmation that it is sorted.

Kevy’s correction matters:

- do not hard-code `3 days` as the rule yet
- many absences are planned in advance
- many schools will cover internally for `2 to 3 weeks` before sourcing a specialist

So for version 1, do not automate the decision using number of days.
Make the head/admin choose the route manually in the form:

- `Internal cover`
- `External specialist`

That is much easier to teach and much safer to build.

## Build Order

Build it in this order on the call:

1. Create the tracking list.
2. Create the quick absence form.
3. Create the staff/source tables in Excel.
4. Build the Power Automate flow.
5. Add the approval email.
6. Add the final confirmation email.
7. Test one internal case and one external case.

## Step 1: Create The Main Tracking List

Open `Microsoft Lists` and create a new list called:

`Teacher Cover Requests`

Add these columns:

- `Request ID`
- `Date Submitted`
- `Teacher Off`
- `Subject`
- `Type of Absence`
- `Start Date`
- `Expected End Date`
- `Planned or Unplanned`
- `Periods / Classes`
- `Rooms`
- `Lesson Plan Link`
- `Cover Route`
- `Status`
- `Chosen Cover Person`
- `Chosen Cover Email`
- `Notes`

Recommended choices:

- `Cover Route`: `Internal cover`, `External specialist`
- `Status`: `New`, `Waiting for decision`, `Waiting for reply`, `Confirmed`, `Closed`

Keep the list ugly and practical.
This is the control centre.

## Step 2: Create The Quick Absence Form

Open `Microsoft Forms`.

Create a form called:

`Teacher Cover Request Form`

Add these fields:

1. `Teacher off`
2. `Subject`
3. `Type of absence`
4. `Is this planned or unplanned?`
5. `Start date`
6. `Expected end date`
7. `Classes / periods needing cover`
8. `Room numbers`
9. `Lesson plan link`
10. `Cover route`
11. `Extra notes`

Keep it short enough to complete on a phone in under 60 seconds.

Best practice:

- make `Cover route` mandatory
- use multiple choice where possible
- do not ask for anything the head/admin will not know instantly

## Step 3: Create The Two Reference Tables

Open `Excel`.

Create one workbook with two tabs:

### Tab 1: `Internal Cover`

Columns:

- `Name`
- `Email`
- `Department`
- `Can Cover Subjects`
- `Day Availability`
- `Period Availability`
- `Notes`

### Tab 2: `External Cover`

Columns:

- `Name`
- `Email`
- `Phone`
- `Subject Specialism`
- `Area`
- `Available Days`
- `Notes`

This is the simple substitute for live SIMS integration.

Do not overcomplicate this part.
If later they want direct SIMS data, that becomes phase 2.

## Step 4: Build The Power Automate Flow

Open `Power Automate`.

Create an automated cloud flow:

`When a new Form response is submitted`

Use this exact logic:

1. `Trigger`: new form response submitted.
2. `Get response details`.
3. `Create item` in `Teacher Cover Requests`.
4. `Condition`: check `Cover route`.
5. If `Internal cover`, send internal shortlist/approval.
6. If `External specialist`, send external shortlist/approval.
7. After approval, send final booking emails.
8. Update the list item to `Confirmed`.

## Step 5: Internal Cover Route

Keep the internal route simple.

The flow should:

1. Read the form response.
2. Find possible internal staff from the Excel `Internal Cover` tab.
3. Email the head/admin with the top options.
4. Use an approval step so the head/admin can choose one.
5. Once approved, send the chosen staff member:
   - date
   - class/periods
   - room numbers
   - lesson-plan link
   - where to report
6. Send confirmation back to the head/admin.

Do not try to auto-pick the perfect teacher in version 1.
Give the head/admin the final say.

## Step 6: External Specialist Route

Again, keep it simple.

The flow should:

1. Read the form response.
2. Find matching people from the Excel `External Cover` tab.
3. Send the head/admin a shortlist.
4. Head/admin picks one through approval.
5. System sends booking email to that external teacher.
6. External teacher replies `YES` by email.
7. Head/admin gets confirmation.
8. List item updates to `Confirmed`.

Version 1 does not need:

- automatic SMS sending
- automatic reading of replies
- booking all candidates at once

Email is enough for the first build.

## Step 7: Final Emails

You need three email templates.

### Email 1: To The Chosen Cover Teacher

Include:

- school name
- date
- start time
- classes
- room numbers
- lesson-plan link
- who to report to
- where to go on arrival

### Email 2: To The Head/Admin

Include:

- request ID
- who was chosen
- whether it is internal or external
- confirmation that the request is covered

### Email 3: Optional Confirmation To Original Teacher Or Department

Include:

- cover now arranged
- name of cover teacher
- any next action needed

## Step 8: Add A Simple Dashboard

Use the Microsoft List itself as the first dashboard.

Create views:

1. `New Requests`
2. `Waiting for Reply`
3. `Confirmed`
4. `This Week`

That is enough for version 1.

Do not build a fancy Power BI dashboard on the first call unless Kevy asks for it.

## Step 9: Share It Properly

Some of the screenshots show link settings and shared-link controls.

When sharing the form, list, or supporting docs:

- prefer people already inside the organisation
- use `Only people with existing access` where possible
- avoid public links unless they explicitly need them

This matters if lesson plans or pupil-related material are involved.

## Step 10: Test Two Real Scenarios

Do these two tests on the call:

### Test 1: Internal Cover

- PE teacher off for one day
- internal cover route selected
- head/admin receives options
- one person is chosen
- confirmation email goes out

### Test 2: External Specialist

- longer RE absence
- external specialist route selected
- shortlist is produced
- one specialist is picked
- booking email goes out

If both tests work, the core system works.

## The Safest Version 1 Architecture

Use this sentence on the call:

`We are not building school AI magic first. We are building a reliable admin workflow first.`

That is the right frame.

## Very Simple Flow Chart

```text
Teacher absent
   ->
Head/admin submits form
   ->
Request saved in Microsoft List
   ->
Head/admin chooses route
   ->
Internal cover or external specialist
   ->
Approval email
   ->
Chosen person gets booking email
   ->
Head/admin gets confirmation
   ->
Request marked confirmed
```

## What Copilot Can Do Later

Once the boring workflow works, Copilot can help with:

- writing cleaner emails
- summarising open cover requests
- generating a daily cover briefing
- suggesting likely internal matches
- creating a headteacher dashboard page

But that is phase 2, not phase 1.

## 10-Minute Video Call Script

If you want to keep the explanation dead simple, say this:

1. `We are going to log teacher absences with one form.`
2. `That form will feed one tracking list.`
3. `Power Automate will read the form and send the right emails.`
4. `You will still choose internal or external cover.`
5. `You will still approve the final person.`
6. `Once approved, the system sends the cover details automatically.`
7. `Later, we can make it smarter with Copilot or direct SIMS links.`

## Recommendation

If you are teaching Kevy live, build only this on the first call:

1. The form
2. The list
3. One flow
4. One approval
5. One confirmation email

If that works, the rest becomes much easier.
