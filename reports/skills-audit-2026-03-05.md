# Skills Audit — 5 March 2026

## Executive Summary

**29 skills total** — 7 built-in, 22 custom. Several have stale references (Semrush cancelled), overlapping coverage, and varying quality. 5 skills need immediate updates, 3 should be archived, 2 should be merged.

---

## Custom Skills (22)

### 1. seo-engine
- **Purpose:** Unified daily SEO orchestrator across audit/fix/attack/monitor/report phases
- **Last use:** Daily — core skill, referenced in memory every day
- **Quality: 9/10** — Best-written skill. Clear phases, delegates to sibling skills, up to date with v2.1 changes (Semrush cancelled, Ahrefs added)
- **Relevance: 10/10** — SEO is the primary growth engine for Blue Canvas
- **Issues:** None major. Already updated to reflect Semrush cancellation.
- **Recommendation:** ✅ Keep as-is

### 2. client-showcase
- **Purpose:** Build mobile-first HTML showcases for Blue Canvas prospects
- **Last use:** Mar 4-5 (HIP Psychology showcase for Cormac V, Tim Clarke, Joe Abrahams)
- **Quality: 8/10** — Well-structured with slide template, GBP check, deployment flow
- **Relevance: 10/10** — Direct revenue generator. Every showcase = potential £750+ client
- **Issues:** CTA contact details section appears empty/truncated. No reference to design-patterns.md or scoring.md files (may not exist).
- **Recommendation:** 🔄 Update — add contact details, verify reference files exist

### 3. showcase-pipeline
- **Purpose:** One-command end-to-end pipeline wrapping client-showcase
- **Last use:** Mar 4 (HIP Psychology)
- **Quality: 8/10** — Good automation wrapper with clear steps
- **Relevance: 9/10** — Streamlines the showcase process
- **Issues:** Overlaps significantly with client-showcase — is essentially a wrapper
- **Recommendation:** 🔄 Update — consider merging into client-showcase as a "quick start" section

### 4. clubdraw
- **Purpose:** White-label weekly draw platform for sports clubs
- **Last use:** Mar 3-4 (Ardmore production launch, committee testing)
- **Quality: 8/10** — Comprehensive: legal, tech stack, revenue model, action plan
- **Relevance: 9/10** — Active revenue stream, Ardmore is live, multi-club expansion planned
- **Issues:** Still references "domain needed: clubdraw.co.uk" — needs status check. Demo link to GitHub Pages may be stale now that ardmorecricket.com is live. Phase 1 legal checklist items still showing as ☐ unchecked.
- **Recommendation:** 🔄 Update — mark completed items, update project status, add Ardmore-specific learnings

### 5. webflow-seo
- **Purpose:** Manage Webflow sites and SEO via API
- **Last use:** Mar 2 (blog drafts pushed via CMS API)
- **Quality: 8/10** — Solid API reference with all site IDs, CMS collections, endpoint examples
- **Relevance: 9/10** — Used for all Blue Canvas + satellite site management
- **Issues:** None significant.
- **Recommendation:** ✅ Keep as-is

### 6. uk-trade-jobs
- **Purpose:** Manage UK Trade Jobs website (Next.js/Vercel)
- **Last use:** Mar 2-3 (Supabase integration completed, deployment pending)
- **Quality: 7/10** — Good structure but content roadmap is ambitious vs current state
- **Relevance: 8/10** — Target £3-5k/mo revenue stream
- **Issues:** Career guide expansion plan (5→50) needs prioritisation. Reed/Indeed API integration not started. CV builder still "coming soon". Needs Vercel env vars + deployment.
- **Recommendation:** 🔄 Update — add Supabase details, current deployment status, prioritised next steps

### 7. analytics-seo
- **Purpose:** Monitor website analytics via GA4, GSC, Clarity
- **Last use:** Feb 26-27 (SEO audits, GSC queries)
- **Quality: 7/10** — Good workflow definitions but references Semrush API
- **Relevance: 8/10** — Analytics are essential for measuring SEO progress
- **Issues:** **Still references Semrush API** — Semrush is CANCELLED as of Mar 2026. Needs updating to use Ahrefs + GSC instead. References `references/google-apis.md` which may not exist.
- **Recommendation:** 🔄 Update — remove Semrush references, add Ahrefs, verify reference files

### 8. google-ads
- **Purpose:** Plan and manage Google Ads campaigns for Blue Canvas
- **Last use:** Mar 4 (campaign went LIVE, £20/day)
- **Quality: 7/10** — Good campaign structure and budget scenarios
- **Relevance: 8/10** — Google Ads now live and generating impressions
- **Issues:** **References Semrush API for keyword research** — Semrush cancelled. Budget scenarios are pre-launch estimates; now that campaign is live, needs actual performance data section. Campaign plan reference (`projects/google-ads/campaign-plan-v2.md`) — is this v2 or v3?
- **Recommendation:** 🔄 Update — replace Semrush with Ahrefs/GSC, add performance tracking section, update plan reference to v3

### 9. apollo-lead-gen
- **Purpose:** Build lead lists via Apollo.io API
- **Last use:** No recent memory mentions (last used ~Feb for solicitor lists)
- **Quality: 8/10** — Clean API reference with good parameter docs
- **Relevance: 8/10** — Lead gen is critical for Blue Canvas pipeline
- **Issues:** Not recently used despite being highly relevant. Should be integrated into a regular outreach cadence.
- **Recommendation:** ✅ Keep as-is — activate more frequently

### 10. ai-trend-scout
- **Purpose:** Daily scan for emerging AI tools/domain opportunities
- **Last use:** Mar 4-5 (EU AI Act compliance scan, Shannon AI pentester)
- **Quality: 7/10** — Good sources and scoring framework
- **Relevance: 7/10** — Useful for domain hunting and staying ahead of trends
- **Issues:** Memory notes algorithm needs tightening (Feb 28: flagged 7-week-old Claude Cowork as "breakout"). No freshness filter for tools >2 weeks old despite MEMORY.md noting this fix is needed.
- **Recommendation:** 🔄 Update — add freshness filter (exclude tools >2 weeks), tighten scoring algorithm

### 11. domain-hunter
- **Purpose:** Spot and acquire AI-related domains
- **Last use:** Mar 4-5 (EU AI Act domain sweep, 56 domains checked)
- **Quality: 7/10** — Good scoring framework and spending rules
- **Relevance: 7/10** — Supports satellite site strategy
- **Issues:** Portfolio list is outdated (doesn't include recent acquisitions). Wallet balance reference may be stale. High-priority targets section needs refresh.
- **Recommendation:** 🔄 Update — refresh portfolio, update wallet status, add recent acquisitions

### 12. linkedin-content
- **Purpose:** Plan weekly LinkedIn content for Blue Canvas
- **Last use:** Mar 2 (PJ mentioned doing a LinkedIn post)
- **Quality: 8/10** — Well-structured with templates, pillars, algorithm tips
- **Relevance: 7/10** — Important for brand building but not directly revenue-generating
- **Issues:** None significant. Could benefit from tracking actual post performance.
- **Recommendation:** ✅ Keep as-is

### 13. opportunity-radar
- **Purpose:** Scan and score business opportunities across multiple channels
- **Last use:** Not directly referenced in recent memory, but its functions overlap with ai-trend-scout and tender-tracker
- **Quality: 7/10** — Comprehensive scan workflow
- **Relevance: 7/10** — Useful meta-skill but overlaps heavily with 3 other skills
- **Issues:** References Semrush. Competitor list overlaps with seo-engine. Moltbook section duplicates moltbook-scout. Tender section duplicates tender-tracker. Wallet info duplicates domain-hunter.
- **Recommendation:** 🔄 Rewrite — make it a pure orchestrator that delegates to specific skills rather than duplicating their content

### 14. moltbook-scout
- **Purpose:** Monitor Moltbook agent social network for opportunities
- **Last use:** Mar 5 (engagement restarted after 3 weeks dormant)
- **Quality: 7/10** — Good security rules and engagement guidelines
- **Relevance: 6/10** — Moltbook activity has been sporadic. Unclear ROI.
- **Issues:** Credentials file path may need verification. Was dormant for 3 weeks until Mar 5.
- **Recommendation:** ✅ Keep as-is — monitor ROI

### 15. moltlaunch-inbox
- **Purpose:** Poll MoltLaunch inbox for task requests
- **Last use:** Mar 3 (Agent #24586 registered, gigs created)
- **Quality: 4/10** — Bare minimum. Only 25 lines. No frontmatter. No API details. Agent ID is wrong (says 21761, should be 24586 per memory).
- **Relevance: 5/10** — MoltLaunch gigs are small revenue (<0.01 ETH)
- **Issues:** **Wrong agent ID** (21761 vs 24586). Wrong wallet address. Missing YAML frontmatter. Minimal instructions. No error handling. Gig pricing is tiny.
- **Recommendation:** 🔄 Update — fix agent ID to 24586, add proper frontmatter, expand with actual API endpoints

### 16. tender-tracker
- **Purpose:** Find UK/Ireland government tenders for AI consulting
- **Last use:** Feb 28 (tenders submitted, mentioned in MEMORY.md)
- **Quality: 7/10** — Good source coverage and relevance scoring
- **Relevance: 7/10** — Active tenders submitted (Donegal CC, InterTradeIreland, CCS frameworks)
- **Issues:** Results may be stale. Dashboard at `projects/tender-tracker/dashboard.html` — needs verification. CCS framework tracking section could be more specific.
- **Recommendation:** ✅ Keep as-is — ensure crawler runs regularly

### 17. rank-and-rent
- **Purpose:** Build and rent local service websites
- **Last use:** No recent memory mentions. MEMORY.md says "On hold."
- **Quality: 8/10** — Excellent framework with revenue model, competition analysis, ad-ban advantage
- **Relevance: 4/10** — Explicitly on hold per MEMORY.md
- **Issues:** References Semrush API (cancelled). On hold with no timeline to resume.
- **Recommendation:** 📦 Archive — on hold, update Semrush refs if/when reactivated

### 18. frontend-design
- **Purpose:** Create distinctive, production-grade frontend interfaces
- **Last use:** Implicitly used in showcase builds, ClubDraw, UK Trade Jobs
- **Quality: 9/10** — Excellent design philosophy and anti-pattern guidance
- **Relevance: 7/10** — Useful for all frontend work
- **Issues:** None. Well-written creative guidance.
- **Recommendation:** ✅ Keep as-is

### 19. ship-ready
- **Purpose:** Quality gate / polish checklist before shipping products
- **Last use:** Not explicitly referenced in memory but implicitly relevant to all deploys
- **Quality: 8/10** — Thorough multi-phase testing framework (5-second test, visual audit, copy audit)
- **Relevance: 7/10** — Should be used before every client-facing deploy
- **Issues:** No YAML frontmatter (missing `name` and `description`). Won't appear in skill matching without proper frontmatter.
- **Recommendation:** 🔄 Update — add YAML frontmatter so it gets matched correctly

### 20. ux-tester
- **Purpose:** End-to-end UI, content, and flow testing
- **Last use:** Not explicitly referenced in recent memory
- **Quality: 7/10** — Good testing framework with ClubDraw-specific flows
- **Relevance: 6/10** — Useful but overlaps with ship-ready
- **Issues:** No YAML frontmatter. Overlaps with ship-ready. ClubDraw-specific flows could be in the clubdraw skill instead.
- **Recommendation:** 🔗 Merge with ship-ready — combine into one quality/testing skill

### 21. agent-browser
- **Purpose:** Headless browser automation for web interactions
- **Last use:** Not explicitly mentioned in memory but used implicitly by other skills
- **Quality: 8/10** — Comprehensive command reference
- **Relevance: 6/10** — Infrastructure skill, enables other skills
- **Issues:** None significant.
- **Recommendation:** ✅ Keep as-is

### 22. site-health
- **Purpose:** Monitor SSL, HTTP status, speed across Blue Canvas sites
- **Last use:** Mar 2 (openclawconsultant.co.uk SSL issues)
- **Quality: 6/10** — Basic but functional. References a shell script that may or may not exist.
- **Relevance: 6/10** — Important for uptime but basic
- **Issues:** Script at `projects/site-health-monitor/health-check.sh` — needs verification. Doesn't include ardmorecricket.com in monitored sites. Missing from cron.
- **Recommendation:** 🔄 Update — add ardmorecricket.com, verify script exists, set up cron

---

## Built-in Skills (7 relevant)

### 23. coding-agent
- **Purpose:** Delegate coding tasks to Codex/Claude Code/Pi via background process
- **Last use:** Mar 2-3 (Ardmore features, UK Trade Jobs Supabase)
- **Quality: 8/10** — Well-documented with PTY guidance
- **Relevance: 9/10** — Used for all coding work
- **Issues:** None.
- **Recommendation:** ✅ Keep as-is

### 24. gh-issues
- **Purpose:** Auto-fix GitHub issues with parallel sub-agents
- **Last use:** Not referenced in recent memory
- **Quality: 8/10** — Comprehensive 6-phase workflow
- **Relevance: 5/10** — PJ doesn't currently use GitHub Issues as a workflow
- **Issues:** None.
- **Recommendation:** ✅ Keep as-is (built-in)

### 25. github
- **Purpose:** GitHub operations via gh CLI
- **Last use:** Mar 2-4 (showcase deployments to GitHub Pages)
- **Quality: 7/10** — Basic but functional
- **Relevance: 7/10** — Used for GitHub Pages deployments
- **Issues:** None.
- **Recommendation:** ✅ Keep as-is (built-in)

### 26. healthcheck
- **Purpose:** Host security hardening for OpenClaw deployments
- **Last use:** Not referenced in recent memory
- **Quality: 8/10** — Thorough security framework
- **Relevance: 4/10** — Not a current priority but needed for Cyber Essentials
- **Issues:** None.
- **Recommendation:** ✅ Keep as-is (built-in)

### 27. mcporter
- **Purpose:** MCP server management CLI
- **Last use:** Not referenced in recent memory
- **Quality: 7/10** — Good CLI reference
- **Relevance: 4/10** — Rarely used directly
- **Issues:** None.
- **Recommendation:** ✅ Keep as-is (built-in)

### 28. skill-creator
- **Purpose:** Create or update skills
- **Last use:** Implicitly used when skills are created/updated
- **Quality: 7/10** — Good principles and anatomy guidance
- **Relevance: 6/10** — Meta-skill, useful for skill maintenance
- **Issues:** None.
- **Recommendation:** ✅ Keep as-is (built-in)

### 29. weather
- **Purpose:** Weather forecasts via wttr.in
- **Last use:** Not referenced in recent memory
- **Quality: 7/10** — Simple, effective
- **Relevance: 2/10** — Rarely needed for business
- **Issues:** None.
- **Recommendation:** ✅ Keep as-is (built-in)

---

## Overlapping Skills

| Overlap | Skills | Resolution |
|---------|--------|------------|
| Showcase building | client-showcase + showcase-pipeline | Merge pipeline into showcase as "Quick Start" |
| Quality/testing | ship-ready + ux-tester | Merge into single "quality-gate" skill |
| Opportunity scanning | opportunity-radar + ai-trend-scout + tender-tracker + moltbook-scout + domain-hunter | Make opportunity-radar a pure orchestrator that calls the others |
| Semrush references | analytics-seo + google-ads + rank-and-rent | Remove Semrush, replace with Ahrefs/GSC |
| Moltbook | moltbook-scout + moltlaunch-inbox + opportunity-radar | Merge moltlaunch-inbox into moltbook-scout |

---

## Missing Skills

| Gap | Why Needed | Priority |
|-----|-----------|----------|
| **CRM / Pipeline Tracker** | No skill tracks leads (Tim Clarke, Joe Abrahams, Charlie O'Hara) through stages. Currently tracked ad-hoc in MEMORY.md | 🔴 HIGH |
| **Invoice / Billing** | No skill handles invoicing, payment tracking, Stripe revenue monitoring | 🔴 HIGH |
| **Email Outreach** | Apollo builds lists but no skill manages cold email sequences, follow-ups, templates | 🟡 MEDIUM |
| **Google Ads Performance** | Live campaign but no skill for monitoring CTR, conversions, ROAS, daily spend | 🟡 MEDIUM |
| **Ardmore/ClubDraw Operations** | Day-to-day draw operations (run weekly draw, handle support, manage subscriptions) distinct from the build skill | 🟡 MEDIUM |
| **Content Publishing** | Blog publishing cadence (1/day) needs automation — push drafts, track published, schedule | 🟢 LOW |
| **Competitor Monitor** | seo-engine touches this but a dedicated skill for tracking competitor moves would help | 🟢 LOW |

---

## Priority Ranking by Revenue Impact

| Rank | Skill | Revenue Impact | Status |
|------|-------|---------------|--------|
| 1 | **seo-engine** | Primary growth driver for Blue Canvas | ✅ Good |
| 2 | **client-showcase / showcase-pipeline** | Direct client acquisition (£750+ per showcase) | 🔄 Update |
| 3 | **google-ads** | Live campaign, immediate lead gen | 🔄 Update (Semrush) |
| 4 | **webflow-seo** | Manages primary website | ✅ Good |
| 5 | **clubdraw** | Recurring revenue stream | 🔄 Update |
| 6 | **apollo-lead-gen** | Pipeline building | ✅ Under-utilised |
| 7 | **uk-trade-jobs** | £3-5k/mo target | 🔄 Update |
| 8 | **analytics-seo** | Measures everything | 🔄 Update (Semrush) |
| 9 | **coding-agent** | Enables all builds | ✅ Good |
| 10 | **tender-tracker** | Government contract pipeline | ✅ Good |
| 11 | **linkedin-content** | Brand building | ✅ Good |
| 12 | **ai-trend-scout** | Domain/opportunity scouting | 🔄 Update |
| 13 | **domain-hunter** | Satellite site strategy | 🔄 Update |
| 14 | **frontend-design** | Quality of all builds | ✅ Good |
| 15 | **ship-ready + ux-tester** | Quality gate | 🔗 Merge |
| 16 | **site-health** | Uptime monitoring | 🔄 Update |
| 17 | **moltbook-scout + moltlaunch-inbox** | Agent economy | 🔗 Merge |
| 18 | **opportunity-radar** | Meta-scanner | 🔄 Rewrite |
| 19 | **agent-browser** | Infrastructure | ✅ Good |
| 20 | **rank-and-rent** | On hold | 📦 Archive |

---

## Immediate Action Items

### Critical (do this week)
1. **Fix Semrush references** in analytics-seo, google-ads, rank-and-rent → replace with Ahrefs/GSC
2. **Fix moltlaunch-inbox agent ID** — 21761 → 24586
3. **Add YAML frontmatter** to ship-ready and ux-tester
4. **Create CRM/Pipeline skill** — track leads through stages

### Important (next 2 weeks)
5. Merge showcase-pipeline into client-showcase
6. Merge ux-tester into ship-ready
7. Merge moltlaunch-inbox into moltbook-scout
8. Update clubdraw with completed items and Ardmore learnings
9. Update ai-trend-scout with freshness filter
10. Add ardmorecricket.com to site-health monitoring

### Nice to have
11. Rewrite opportunity-radar as pure orchestrator
12. Create invoice/billing skill
13. Create email outreach skill
14. Archive rank-and-rent

---

*Audit completed 5 March 2026 by Albie (subagent: audit-skills)*
