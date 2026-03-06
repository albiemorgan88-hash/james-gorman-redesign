# Blue Canvas — Lead Gen & Outreach Strategy

**Date:** 6 March 2026
**Owner:** Phil Patterson

---

## 1. Target Audience

| Criteria | Detail |
|----------|--------|
| **Titles** | CEO, MD, Operations Director, CTO, COO, Founder |
| **Company size** | 10-200 employees |
| **Location** | UK (priority: NI, then nationwide), Ireland |
| **Industries** | Professional services, Tech, E-commerce, Healthcare, Finance, Legal |
| **Pain signal** | Manual admin-heavy operations, outdated tech stack, no AI adoption yet |

## 2. Channels & Cadence

### Cold Email (via Apollo)

| Metric | Target |
|--------|--------|
| **Week 1-2** | 20 emails/day (domain warmup) |
| **Week 3+** | 50 emails/day |
| **Weekly volume** | 100-250 emails |
| **Monthly volume** | 400-1,000 emails |
| **Sequence** | 3-touch over 7 days |
| **Send days** | Tue-Thu |
| **Send time** | 8:00-10:00am UK |
| **Reply target** | 5-10% reply rate |
| **Meeting target** | 2-5% book rate |

**Sequence:**
1. Day 0 — Initial email (pick template based on prospect profile)
2. Day 3 — Follow-up with value add (case study/blog link)
3. Day 7 — Breakup email (soft close)

### LinkedIn Outreach

| Metric | Target |
|--------|--------|
| **Connection requests** | 20-25/day (LinkedIn limits: ~100/week) |
| **Personalised note** | Always — reference their role/company/industry |
| **Follow-up message** | Day 2 after acceptance — value-first, no pitch |
| **Content posts** | 5/week (Mon-Fri) |
| **Engagement** | 15 min/day commenting on target prospects' posts |

**Connection request template:**
> Hi {{first_name}} — I work with {{industry}} businesses on AI automation. Not pitching, just thought it'd be good to connect. Phil

**Follow-up after acceptance:**
> Thanks for connecting, {{first_name}}. We recently helped a {{industry}} firm automate 20+ hours/week of admin. Happy to share what we found if useful. No pressure!

### Local Lead Scraping

| Metric | Detail |
|--------|--------|
| **Source** | Google Maps + Companies House + PageSpeed |
| **Frequency** | Weekly (alongside Apollo cron, Wednesdays) |
| **Focus** | NI businesses with poor web presence (PageSpeed < 50, no/few GBP reviews) |
| **Output** | Scored lead list → cherry-pick hot leads for showcase or direct outreach |

## 3. Weekly Rhythm

| Day | Activity |
|-----|----------|
| **Monday** | Post LinkedIn #5 (CTA), send 50 cold emails, 20 connection requests |
| **Tuesday** | Post LinkedIn #1 (case study), send 50 cold emails, 20 connection requests |
| **Wednesday** | Post LinkedIn #2 (tip), Apollo cron pulls fresh leads, local scraper runs, send 50 cold emails |
| **Thursday** | Post LinkedIn #3 (hot take), send 50 cold emails, 20 connection requests |
| **Friday** | Post LinkedIn #4 (BTS), review weekly metrics, plan next week's content |

## 4. Lead Sources & Pipeline

```
Apollo API (50 leads/week) ──┐
                              ├──→ CRM/Sheet ──→ Email Sequence ──→ Reply ──→ Call ──→ Audit (£750)
Local Scraper (50/week) ─────┘                                                          ↓
                                                                                   Done-For-You / Academy
LinkedIn Outreach ────────────────→ Connection ──→ DM ──→ Call ──→ Audit
LinkedIn Content ─────────────────→ Inbound DMs ──→ Call ──→ Audit
```

## 5. What to Track

### Weekly Metrics

| Metric | Target | Tool |
|--------|--------|------|
| Emails sent | 200-250 | Apollo / email tool |
| Email open rate | 40%+ | Email tool |
| Email reply rate | 5-10% | Email tool |
| Meetings booked from email | 2-5 | Calendar |
| LinkedIn connections sent | 80-100 | LinkedIn |
| LinkedIn acceptance rate | 30%+ | LinkedIn |
| LinkedIn DM conversations | 5-10 | LinkedIn |
| LinkedIn post impressions | 2,000+ avg | LinkedIn analytics |
| Inbound enquiries | 1-3 | Website/email |
| **Audits booked** | **3-5/month** | CRM |

### Monthly Revenue Targets

| Source | Volume | Revenue |
|--------|--------|---------|
| AI Audits (£750) | 3-5/month | £2,250-3,750 |
| Done-For-You (conversion from audit) | 1-2/month | £2,000-5,000 |
| AI Academy (£250) | 2-4/month | £500-1,000 |
| Mentoring (£50/mo) | 5-10 subscribers | £250-500 |
| **Monthly target** | | **£5,000-10,250** |

## 6. Email Templates

See: `reports/cold-email-templates-2026-03-06.md`

Three templates covering:
1. **Operations angle** — "20+ hours/week on automatable tasks"
2. **Direct offer** — "Free AI audit for [Company]"
3. **Social proof** — "How a similar firm saved 40% on admin"

Plus 2-step follow-up sequence (Day 3 + Day 7 breakup).

## 7. LinkedIn Content Plan

See: `reports/linkedin-posts-2026-03-06.md`

Five posts covering:
1. Case study (20hrs discovery)
2. Quick tip (AI for meeting notes)
3. Contrarian take (fix processes before AI)
4. Behind the scenes (consultancy life)
5. Direct CTA (free audit)

## 8. Tools & Infrastructure Needed

| Tool | Status | Action |
|------|--------|--------|
| Apollo API | ⚠️ KEY EXPIRED | Renew at app.apollo.io |
| LinkedIn (Phil's profile) | ✅ Active | Optimise headline + banner for Blue Canvas |
| Email domain (warmed) | ❓ Check | Need warmed sending domain — NOT bluecanvas.ai main |
| CRM/Tracker | ❓ Needed | Google Sheet or Notion board minimum |
| Google Maps API | ✅ Set up | For local scraper |
| Calendly/Cal.com | ❓ Check | Frictionless booking for audit calls |

## 9. Quick Wins This Week

1. **Fix Apollo API key** — can't pull leads without it
2. **Post all 5 LinkedIn posts** this week (Mon-Fri)
3. **Set up a simple CRM** — even a Google Sheet with columns: Name, Company, Source, Status, Next Action, Date
4. **Warm up sending domain** — set up a secondary domain (e.g., bluecanvasai.com) for cold email
5. **Optimise LinkedIn profile** — headline should be: "Helping UK businesses save 20+ hours/week with AI | Blue Canvas"
6. **Start 20 LinkedIn connection requests/day** — use the template above

## 10. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Cold email going to spam | Warm domain 2-3 weeks, start slow, monitor deliverability |
| LinkedIn account restrictions | Stay under 100 connections/week, vary messaging |
| Low reply rates | A/B test subject lines, personalise first line |
| Apollo credits running out | Monitor usage, focus on highest-value searches |
| GDPR complaints | Include opt-out in every email, document legitimate interest |
| Time management (solo founder) | Batch outreach to 1hr/day max, automate where possible |
