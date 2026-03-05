# Nightly Build — 2026-02-10

## Blue Canvas Command Center

A single-page local dashboard that puts PJ's three key numbers in one view:

1. **Revenue target tracker** — visual progress bar toward £6k/month
2. **Sales pipeline** — all prospects with stages (lead → proposal → active), click to edit
3. **Debt breakdown** — visual bars showing each debt, running total
4. **Daily priorities** — checkable task list that resets each day

### Features
- All data persists in localStorage (survives refreshes)
- Click any pipeline item or debt to edit/delete via modal
- Quick-add inputs on every section
- Fully responsive
- Dark theme, no dependencies, works offline

### How to use
```
open projects/nightly-builds/2026-02-10/index.html
```

### Why
PJ tracks pipeline in Google Sheets, debt in his head, and priorities scattered across messages. This gives him a single glanceable view of the three things that matter most right now: revenue, pipeline, and debt. Update the numbers as deals close and payments land.
