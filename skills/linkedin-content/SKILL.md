---
name: linkedin-content
description: Plan and draft weekly LinkedIn content for Blue Canvas. Use when creating LinkedIn posts, planning weekly content calendars, researching AI topics for social media, or generating image briefs for LinkedIn. Triggers on requests about LinkedIn posts, social media content, content calendars, or Blue Canvas thought leadership.
---

# LinkedIn Content Skill

Generate weekly LinkedIn content plans with 3-5 posts, image briefs, and scheduling tracker.

## Output Structure

Save all output to `projects/linkedin/week-YYYY-MM-DD/` (Monday date):
- `plan.md` — weekly overview, topics, schedule
- `post-1.md` through `post-5.md` — individual posts
- `tracker.md` — scheduling tracker

## Voice & Tone Rules

- **Brand-first**: Never use "I/me". Use "Blue Canvas" or "we" sparingly.
- **Direct**: No waffle, no filler, no corporate fluff.
- **NOT salesy**: No CTAs like "book a call", no pricing, no hard sells.
- **Confident**: State opinions. Take positions. Be specific.
- **Example**: "Most agencies still build automations by hand. That's 2022 thinking." ✓
- **Anti-example**: "I'm excited to share that we offer great automation services!" ✗

## Content Pillars

| Pillar | Focus | Frequency |
|--------|-------|-----------|
| Thought Leadership | AI trends, hot takes, industry direction | 1-2/week |
| Case Studies | Client wins, before/after, results (anonymised if needed) | 1/week |
| AI Education | Demystify AI/automation concepts, practical tips | 1/week |
| Behind the Scenes | Team, process, tools, builds in progress | 0-1/week |
| Industry Commentary | News reactions, competitor moves, market shifts | 0-1/week |

## Post Templates

### Each post-N.md format:

```markdown
---
pillar: thought-leadership | case-study | ai-education | behind-the-scenes | industry-commentary
topic: "Brief topic description"
publish_day: Monday | Tuesday | Wednesday | Thursday | Friday
hashtags: ["#AI", "#Automation"]
image_brief: "Description for image"
status: draft | ready | posted
---

[HOOK LINE — must stop the scroll, max 10 words]

[Body — 3-8 short paragraphs, heavy line breaks]

[Engagement closer — question or provocative statement]

---
Image Brief:
- Concept: [what the image shows]
- Style: [clean, minimal, bold typography, abstract, screenshot, diagram]
- Colours: #2B4DAF (blue), #FF4520 (red/orange), white
- Text overlay: [if any — keep to 5 words max]
- NOT: no pricing, no CTAs, no stock-photo feel, no salesy vibes
```

## LinkedIn Algorithm Best Practices

1. **Hook in first line** — curiosity gap or bold claim. This is the only visible line before "see more".
2. **Line breaks** — one thought per line. White space = readability = dwell time.
3. **No external links in post body** — kills reach. Put links in first comment.
4. **Engagement question** — end with a question or hot take that invites comments.
5. **Hashtags** — 3-5 per post, mix of broad (#AI, #Automation) and niche (#AIAgency, #ProcessAutomation).
6. **Post length** — 800-1300 characters sweet spot. Long enough for value, short enough to finish.
7. **Carousel/image posts** outperform text-only. Always include an image brief.
8. **Best posting times** (UK): Tue-Thu 7:30-9:00am or 12:00-1:00pm.

## Hashtag Strategy

**Always include (pick 2-3):** #AI #Automation #AIAgency #BlueCanvas
**Rotate based on pillar:**
- Thought Leadership: #FutureOfWork #AIStrategy #DigitalTransformation
- Case Studies: #ProcessAutomation #BusinessAutomation #Results
- AI Education: #AIExplained #MachineLearning #TechTips
- Behind the Scenes: #AgencyLife #BuildInPublic #AITools
- Industry Commentary: #TechNews #AINews #Innovation

## Scheduling Tracker Format (tracker.md)

```markdown
# Week of YYYY-MM-DD

| # | Day | Pillar | Topic | Status | Posted |
|---|-----|--------|-------|--------|--------|
| 1 | Tue | Thought Leadership | [topic] | draft | ☐ |
| 2 | Wed | AI Education | [topic] | draft | ☐ |
| 3 | Thu | Case Study | [topic] | draft | ☐ |
| 4 | Fri | Industry Commentary | [topic] | draft | ☐ |
| 5 | Sat | Behind the Scenes | [topic] | draft | ☐ |
```

PJ posts manually — tick ☐ → ☑ when posted.

## Image Brief Rules

- Aesthetic and on-brand, NOT salesy
- Brand colours: **#2B4DAF** (blue), **#FF4520** (red/orange), **white**
- Clean, modern, minimal — think Apple aesthetic with Blue Canvas colours
- No pricing, no CTAs, no "contact us" in images
- Bold typography if text is used (5 words max)
- Formats: abstract patterns, bold quotes, clean diagrams, subtle tech imagery

## Weekly Planning Workflow

1. **Research** — scan AI news (TechCrunch, The Verge, AI Twitter/X), check Blue Canvas recent wins, note industry trends
2. **Map to pillars** — assign 3-5 topics across pillars, ensure variety
3. **Draft posts** — write each post following template, voice rules, and algorithm best practices
4. **Create image briefs** — one per post, following image rules
5. **Review** — check: no I/me, no salesy language, hooks are strong, questions land
6. **Save** — output to `projects/linkedin/week-YYYY-MM-DD/` with plan.md, post-1.md to post-5.md, tracker.md

## Topic Research Prompts

When researching, search for:
- "AI automation news this week"
- "AI agents enterprise trends"
- "business process automation 2025/2026"
- Blue Canvas recent project completions or milestones
- Competitor activity on LinkedIn
- Trending AI hashtags on LinkedIn
