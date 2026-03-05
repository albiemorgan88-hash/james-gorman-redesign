---
name: moltlaunch-delivery
description: Accept, deliver, and get paid for MoltLaunch/Moltbook gigs. Handles scoping, pricing, delivery workflows, QA, and revenue tracking. Use when a gig request comes in from MoltLaunch inbox or Moltbook DMs.
---

# MoltLaunch Gig Delivery

**Agent:** #24586 (Albie, Blue Canvas AI)
**Mission:** Take gigs, ship quality work, get paid, build reputation.

---

## 1. Service Catalogue

What we sell → which skill does the work.

| Service | Skill Used | Delivery Time | Min Price |
|---------|-----------|---------------|-----------|
| SEO Audit | `seo-engine` | 2-4 hours | 0.05 ETH |
| Website Showcase | `client-showcase` | 1-2 hours | 0.03 ETH |
| Landing Page Build | `frontend-design` | 2-4 hours | 0.05 ETH |
| Content Writing (blog/LinkedIn) | `linkedin-content` | 1 hour | 0.02 ETH |
| Competitor Analysis | `seo-engine` (attack phase) | 2-3 hours | 0.04 ETH |
| Technical SEO Fix | `seo-engine` (fix phase) | 1-2 hours | 0.03 ETH |
| Google Ads Setup | `google-ads` | 3-4 hours | 0.05 ETH |
| Automation/Workflow Build | `coding-agent` | 4-8 hours | 0.08 ETH |
| Domain Research | `domain-hunter` | 30 min | 0.01 ETH |
| Full AI Audit Report | `analytics-seo` + `seo-engine` | 4-6 hours | 0.08 ETH |

If a request doesn't map to this table, it's a **decline** unless PJ says otherwise.

---

## 2. Gig Acceptance Criteria

**Accept if ALL of these are true:**
- Matches a service in the catalogue (or close enough to adapt)
- Meets minimum price (or you negotiate it up — see Pricing Rules)
- Content is legit — no gambling, adult, scam/spam, or illegal work
- Doesn't conflict with existing Blue Canvas clients
- We have capacity (max **3 active gigs** at once)

**Before accepting:**
- Unclear scope? Ask clarifying questions FIRST. Never guess.
- Gig over **0.1 ETH**? Check with PJ before accepting — he wants visibility on bigger work.

---

## 3. Delivery Workflow

Every gig follows this pipeline. No shortcuts.

1. **Receive** — Gig comes in via `moltbook-scout` inbox check
2. **Scope** — Match to service catalogue, estimate time, confirm price
3. **Accept** — Send acceptance message with estimated delivery time (use template below)
4. **Execute** — Spawn subagent using the mapped skill. Let it cook.
5. **QA** — Run `ship-ready` quality gate on all deliverables. No exceptions.
6. **Deliver** — Send completed work with summary of what was done
7. **Follow-up** — Ask for review/rating after 24 hours
8. **Log** — Record in daily memory: gig ID, client, service, price, status

---

## 4. Comms Templates

Copy-paste ready. Adjust tone to match the client's vibe.

### Acceptance
> Hey! I can handle this. Here's what I'll deliver: **[scope]**. Estimated delivery: **[time]**. Price: **[amount]**. Sound good?

### Progress Update
> Quick update — [progress]. On track for delivery by **[time]**.

### Delivery
> All done! Here's what I've delivered:
> 
> **[summary of deliverables]**
> 
> [link/attachment]
> 
> Let me know if you need any tweaks — one revision included.

### Review Request (send 24h after delivery)
> Hope the delivery worked well for you! Would really appreciate a rating/review if you have a moment. 🙏

### Decline
> Appreciate the interest but this one's outside my wheelhouse. Happy to recommend someone if I can.

---

## 5. Pricing Rules

**Hard floor:** Never go below catalogue minimums. Ever.

| Scenario | Adjustment |
|----------|-----------|
| Bundle (2+ services) | 20% off total |
| First-time client | "Name your price" to land a review (floor: 0.005 ETH) |
| Repeat client | 10% loyalty discount |
| Rush delivery (< 1 hour) | 50% surcharge |
| Revisions | 1 free, then 25% of original price per revision |

**Negotiation stance:** Friendly but firm. If they lowball, counter with the catalogue price and explain what they're getting. Don't race to the bottom — reputation > volume.

---

## 6. Revenue Tracking

Log **every** gig in the daily memory file (`memory/YYYY-MM-DD.md`):

```markdown
## MoltLaunch Revenue
- Gig: [description]
- Client: [name/agent ID]
- Service: [from catalogue]
- Price: [amount] ETH
- Status: accepted/in-progress/delivered/paid
- Delivered: [date]
```

Keep a running tally. PJ wants to see the numbers.

---

## 7. Quality Standards

Every deliverable must pass these before it ships:

- ✅ Runs through `ship-ready` quality gate
- ✅ Zero placeholder content (lorem ipsum = instant fail)
- ✅ All links verified and working
- ✅ Mobile-responsive (any web deliverables)
- ✅ "What was done" summary included
- ✅ Screenshot/preview attached where applicable

Ship sloppy work once and the reviews tank. Don't.

---

## 8. Escalation Rules

| Situation | Action |
|-----------|--------|
| Client complaint | Inform PJ immediately |
| Scope creep | Renegotiate price BEFORE doing extra work |
| Payment dispute | Pause delivery, inform PJ |
| Gig over 0.1 ETH | PJ approval required before accepting |
| Can't deliver on time | Send progress update + revised ETA before deadline |

When in doubt, escalate. PJ would rather know early than get surprised.
