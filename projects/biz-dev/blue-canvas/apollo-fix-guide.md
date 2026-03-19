# Apollo Email Fix Guide

## The Problem
Apollo automatically adds AI snippets like `{{contact.AI Snippet Opener 467f2264}}` to email sequences, even when content is manually added via API.

## The Solution (Manual Fix Required)

### Step 1: Go to the Working Sequence
- Navigate to: https://app.apollo.io/#/sequences/69bbc9a4df5c5a001d77e40b
- This is "Derry Accountants - Custom Showcase" 
- It has 3 active contacts already loaded

### Step 2: Edit the Email Step
1. Click on the email step in the sequence
2. You'll see the AI snippet in red text
3. **Delete all AI snippet references**
4. **Replace with this exact content:**

```
Subject: AI showcase for {{company}} - 300+ missed leads/month

Body:
Hi {{first_name}},

To introduce myself, I founded Blue Canvas in Derry to support and accelerate local business onboarding AI.

We're all in a bit of a race right now with AI. Every day and hour counts in gaining an advantage over competitors.

I built you this showcase for a sample use case for what it could do for {{company}}: {{showcase_url}}

Right now, there were 300+ google searches for "Accountants Derry" or "Accountants near me" - and because you rank quite poorly, you're not catching those leads.

That's only, of course, a single use case - for you specifically, I can imagine preparing customised financial reports and account management would also be very useful.

Feel free to book some time here (calendly link) or reply to this email.

Cheers,

Phil
```

### Step 3: Add Custom Fields for Showcase URLs
For each contact, add custom field:
- **Paul Foley:** showcase_url = https://albiemorgan88-hash.github.io/efmccambridge-audit/
- **Christine Whiteman:** showcase_url = https://albiemorgan88-hash.github.io/efmccambridge-audit/
- **Nathan Kane:** showcase_url = https://albiemorgan88-hash.github.io/mjkane-opportunities/

### Step 4: Test
Send test email to yourself first to verify no AI snippets appear.

## Why This Happened
Apollo's UI automatically inserts AI snippets when email steps are created, and the API cannot override this behavior. The snippets must be manually removed via the web interface.

## Infrastructure Already Built
✅ 5 live showcases
✅ 3 contacts with verified emails  
✅ Email authentication (DMARC/DKIM)
✅ Apollo warmup running
✅ Sequence created and active

Only the email content needs manual cleanup to remove AI processing.