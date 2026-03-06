# Cold Email Templates — Blue Canvas Outreach

**Sender:** Phil Patterson, Blue Canvas | bluecanvas.ai
**GDPR:** All emails must include opt-out. Legitimate interest basis for B2B outreach.

---

## Template 1: The Operations Angle

**Subject:** Quick question about {{company_name}}'s admin workload

Hi {{first_name}},

I've been working with {{industry}} businesses across the UK — most of them are burning 20+ hours a week on stuff AI can handle in minutes. Data entry, client follow-ups, report generation, scheduling. The usual death-by-admin.

We ran an audit for a similar-sized firm last month and found 22 hours/week of automatable work. They didn't believe it either.

Would it be worth a 15-minute call to see if there's something similar at {{company_name}}? No pitch, just a quick look.

Cheers,
Phil Patterson
Blue Canvas | bluecanvas.ai

---

## Template 2: Free AI Audit Offer

**Subject:** Free AI audit for {{company_name}}

Hi {{first_name}},

I run Blue Canvas — we help UK businesses figure out where AI actually saves them time and money (vs. where it's just hype).

I'd like to offer {{company_name}} a free AI audit. Takes 30 minutes. We map your workflows and show you exactly which tasks could be automated, with realistic time savings.

No strings. If we find nothing useful, I'll tell you straight.

Interested? Just reply and we'll find a time.

Phil Patterson
Blue Canvas | bluecanvas.ai

---

## Template 3: Social Proof Angle

**Subject:** How a {{industry}} firm cut admin by 40%

Hi {{first_name}},

A {{industry}} business with a similar setup to {{company_name}} came to us spending ~25 hours/week on manual admin — client onboarding, document processing, follow-up emails.

We automated the worst offenders with AI. Result: 40% less admin time, zero extra headcount.

They were sceptical too — most people are until they see their own workflows mapped out.

Happy to share what we did, or run a quick (free) audit for {{company_name}} to see if there's similar low-hanging fruit.

Phil Patterson
Blue Canvas | bluecanvas.ai

---

## Follow-Up Sequence

### Follow-Up 1 (Day 3)
**Subject:** Re: {{original_subject}}

Hi {{first_name}},

Just bumping this — I know inboxes are brutal.

If it helps, here's a 2-min read on the kind of work we do: [link to case study or blog post]

Happy to jump on a quick call if easier. No pressure either way.

Phil

### Follow-Up 2 (Day 7 — Breakup)
**Subject:** Re: {{original_subject}}

Hi {{first_name}},

Last one from me — if now's not the right time, totally get it.

If automating some of the admin grind becomes a priority, just reply to this anytime. I'll be here.

Phil

---

## Variable Reference

| Variable | Source |
|----------|--------|
| `{{first_name}}` | Apollo `person.first_name` |
| `{{company_name}}` | Apollo `person.organization.name` |
| `{{industry}}` | Apollo `person.organization.industry` |
| `{{original_subject}}` | Subject line from initial email |

## Sending Rules

- **Warm domain first** — don't send from a cold domain. Warm up for 2-3 weeks minimum.
- **Start small** — 20 emails/day week 1, ramp to 50/day by week 3
- **Personalise line 1** — reference something specific about their company (website, recent news, industry)
- **GDPR compliant** — include unsubscribe/opt-out in footer
- **Send times** — Tue-Thu, 8:00-10:00am UK time
