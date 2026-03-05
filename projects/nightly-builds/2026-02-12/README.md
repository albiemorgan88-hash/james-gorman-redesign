# Nightly Build — 2026-02-12

## 🎯 Lead Scorer — Blue Canvas Prospect Prioritiser

**What:** An interactive lead scoring tool built for Blue Canvas sales. Score any prospect across 6 weighted factors (company size, budget signals, AI readiness, urgency/pain, decision-maker access, and Blue Canvas fit) and get an instant HOT/WARM/COOL/COLD rating with a visual breakdown.

**Why:** PJ's pipeline is growing — this replaces gut feel with a quick, consistent scoring system so outreach time goes to the highest-value prospects first.

**Features:**
- 6 weighted scoring factors (budget & urgency weighted higher — they close deals)
- Animated ring chart with real-time score calculation
- Grade system: HOT 🔥 (25-30), WARM (18-24), COOL (11-17), COLD (1-10)
- Save leads to localStorage — build a scored prospect list over time
- Click any saved lead to reload its scores for comparison
- Blue Canvas branded dark UI

**How to use:**
1. Open `index.html` in any browser
2. Enter the prospect/company name
3. Slide each factor based on what you know
4. Score updates live — save when you're happy
5. Use the saved list to prioritise your outreach order

**Tech:** Single HTML file, no dependencies, localStorage for persistence.
