# Demo Platform Deployment Strategy

## Overview

Create custom branded demo sites for each target club to showcase exactly how their weekly draw would look. This personalizes the pitch and removes imagination barriers.

## Demo Site Template Structure

### Base Template Repository
- **Source:** `/Users/philsagent/.openclaw/workspace/projects/clubdraw-demo/`
- **Live Example:** https://albiemorgan88-hash.github.io/clubdraw-demo/ (Ardmore CC)
- **Tech Stack:** HTML/CSS/JavaScript (static site)
- **Deployment:** Vercel (custom subdomain per club)

### Customizable Elements

#### Visual Branding:
- **Primary color scheme** (from club colors)
- **Club logo** (sourced from website/Facebook)
- **Ground/venue name** (e.g., "The Bleach Green", "Deramore Park")
- **Club name formatting** (full name + abbreviation)
- **Hero background image** (ground photo if available)

#### Content Personalization:
- **Club-specific member names** (use realistic local names)
- **Local fixture references** (actual upcoming matches)
- **Recent results integration** (real data where available)
- **Committee member credits** (research real names)
- **Club history snippets** (founding year, major achievements)

#### Revenue Projections:
- **Realistic membership estimates** (based on research)
- **Weekly pot calculations** (conservative projections)
- **Annual revenue forecasts** (show impact)
- **Growth scenarios** (current vs 6-month targets)

## Demo Creation Workflow

### 1. Club Research Phase (15 minutes per club)

#### Essential Data Collection:
```
CLUB: [Full Name]
ABBREVIATION: [Common short name]
SPORT: [Cricket/GAA/Rugby/Football]
COLORS: 
  - Primary: #[hex]
  - Secondary: #[hex]
  - Accent: #[hex]
LOGO: [Download high-res from website/Facebook]
GROUND: [Official venue name]
LOCATION: [Town/Area, County]
FOUNDED: [Year if available]
CURRENT_MEMBERS: [Estimated from research]
RECENT_NEWS: [Latest achievement/result for personalization]
```

#### Sources for Branding Data:
- **Club website:** Official colors, logos, ground names
- **Facebook page:** Cover photos, recent posts, event photos
- **Instagram:** Visual content, kit colors, venue shots
- **Local newspaper coverage:** Ground photos, team shots
- **Google Images:** Venue photos, team photos
- **Sports association websites:** Official club profiles

### 2. Demo Site Generation (30 minutes per club)

#### Automated Elements:
```bash
# Clone base template
git clone clubdraw-demo [club-slug]-demo

# Update config.json with club data
{
  "clubName": "Ballymena Cricket Club",
  "clubAbbr": "Ballymena CC",
  "sport": "cricket",
  "colors": {
    "primary": "#1e40af", 
    "secondary": "#ffffff",
    "accent": "#f59e0b"
  },
  "ground": "Eaton Park",
  "location": "Ballymena, Antrim",
  "founded": 1955,
  "estimatedMembers": 80,
  "weeklyPot": 320,
  "clubRevenue": 288
}

# Run customization script
npm run customize

# Deploy to Vercel
vercel --prod --name ballymena-cc-draw
```

#### Manual Customizations:
- **Logo replacement:** Crop and optimize club logo
- **Color scheme application:** Update CSS custom properties
- **Sample member names:** Use realistic local names (not real people)
- **Fixture integration:** Add upcoming match details
- **Results data:** Include recent scores/results

### 3. Content Population (15 minutes per club)

#### Sample Member Data:
```javascript
// Generate realistic local names for each area
const members = [
  { name: "John M.", numbers: [7, 14, 23, 38, 45], joined: "2024-01" },
  { name: "Sarah K.", numbers: [2, 15, 29, 33, 47], joined: "2024-02" },
  { name: "Michael D.", numbers: [5, 11, 22, 35, 49], joined: "2024-01" },
  // Generate 20-30 sample members per club
];
```

#### Revenue Projections:
```javascript
const projections = {
  current: {
    members: config.estimatedMembers * 0.6, // Conservative start
    weeklyPot: config.estimatedMembers * 0.6 * 4, // £4 average per member
    clubRevenue: config.estimatedMembers * 0.6 * 4 * 0.9,
    annualRevenue: config.estimatedMembers * 0.6 * 4 * 0.9 * 52
  },
  sixMonth: {
    members: config.estimatedMembers * 0.8, // Growth target
    weeklyPot: config.estimatedMembers * 0.8 * 5,
    clubRevenue: config.estimatedMembers * 0.8 * 5 * 0.9,
    annualRevenue: config.estimatedMembers * 0.8 * 5 * 0.9 * 52
  }
};
```

## Deployment Infrastructure

### Domain Strategy
- **Primary:** `clubdraw.co.uk` (to be purchased)
- **Demo subdomain pattern:** `[club-slug].demo.clubdraw.co.uk`
- **Examples:**
  - `ballymena-cc.demo.clubdraw.co.uk`
  - `st-galls.demo.clubdraw.co.uk`
  - `dungannon-rfc.demo.clubdraw.co.uk`

### Vercel Configuration
```javascript
// vercel.json template
{
  "builds": [
    { "src": "index.html", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ],
  "env": {
    "CLUB_NAME": "[Club Name]",
    "CLUB_SLUG": "[club-slug]",
    "DEMO_MODE": "true"
  }
}
```

### Analytics Tracking
```html
<!-- Add to each demo site -->
<script>
gtag('config', 'GA_MEASUREMENT_ID', {
  custom_map: {
    'club_name': '[Club Name]',
    'sport_type': '[Sport]',
    'county': '[County]'
  }
});

// Track demo interactions
function trackDemoInteraction(action, clubName) {
  gtag('event', action, {
    event_category: 'demo_engagement',
    event_label: clubName,
    club_name: clubName
  });
}
</script>
```

## Demo Site Features

### Essential Demo Functions:
1. **Number Selection Simulator:** Let visitors pick numbers and see interface
2. **Sample Draw Animation:** Show Friday 8pm draw with realistic results
3. **Revenue Calculator:** Interactive projections based on member count
4. **Admin Dashboard Preview:** Show committee what they'd see
5. **WhatsApp Message Samples:** Display notification examples
6. **Setup Guide:** "How [Club Name] Goes Live in 15 Minutes"

### Interactive Elements:
```javascript
// Number picker with club branding
class NumberPicker {
  constructor(clubConfig) {
    this.clubName = clubConfig.name;
    this.colors = clubConfig.colors;
    this.maxNumbers = 5;
    this.selectedNumbers = [];
  }
  
  // Show realistic weekly cost calculation
  updateCostDisplay() {
    const cost = this.selectedNumbers.length * 1; // £1 per number
    document.getElementById('weekly-cost').innerHTML = 
      `Your weekly contribution: £${cost} to the ${this.clubName} pot`;
  }
}

// Revenue projection calculator
function calculateProjections(memberCount) {
  const avgNumbersPerMember = 4.2; // Based on Ardmore data
  const weeklyPot = memberCount * avgNumbersPerMember;
  const clubShare = weeklyPot * 0.9;
  const annualRevenue = clubShare * 52;
  
  return {
    weeklyPot,
    clubShare,
    annualRevenue
  };
}
```

## Quality Assurance Checklist

### Before Sending Demo Link:
- [ ] Club name spelled correctly throughout
- [ ] Colors match official club branding  
- [ ] Logo displays properly (high resolution, transparent background)
- [ ] Ground/venue name is accurate
- [ ] Revenue projections are realistic for club size
- [ ] All links work correctly
- [ ] Mobile responsive design confirmed
- [ ] Loading speed under 2 seconds
- [ ] No placeholder text remaining
- [ ] Contact details point to correct email
- [ ] Analytics tracking implemented
- [ ] Demo disclaimer clearly visible

### Demo Site Testing:
- [ ] Number selection works smoothly
- [ ] Draw animation plays correctly
- [ ] Revenue calculator updates properly
- [ ] All interactive elements function
- [ ] Cross-browser compatibility (Chrome, Safari, Firefox)
- [ ] Mobile experience optimized
- [ ] Forms submit successfully (to test endpoint)

## Personalization Examples

### Cricket Club Demo (Ballymena CC):
```
Hero: "Welcome to Ballymena Cricket Club Weekly Draw"
Venue: "Support the club at Eaton Park"
Recent: "Celebrating our promotion to Premier League"
Projection: "With 80 members, targeting £320/week by summer"
Local touch: "Drawing every Friday after nets"
```

### GAA Club Demo (St Galls):
```
Hero: "St Galls GAC Weekly Draw - Mol an Óige"
Venue: "Raising funds for Milltown developments"  
Recent: "Supporting our championship run"
Projection: "120 members could generate £480/week"
Local touch: "Draw results announced after Sunday Mass"
```

### Rugby Club Demo (Dungannon RFC):
```
Hero: "Dungannon RFC Weekly Draw"
Venue: "Supporting rugby at Stevenson Park"
Recent: "Funding our new clubhouse project"
Projection: "90 members targeting £360/week revenue"
Local touch: "Draw every Friday before senior training"
```

## Success Metrics

### Demo Engagement Tracking:
- **Time on site:** Target >2 minutes
- **Number picker usage:** % who interact with selector
- **Calculator usage:** % who try revenue calculator
- **Contact form submissions:** Track demo-to-inquiry conversion
- **Return visits:** Multiple visits indicate strong interest

### Conversion Tracking:
- **Demo views per email sent:** Target 40%+ click-through
- **Demo to setup call conversion:** Target 20%+ book calls
- **Setup call to go-live conversion:** Target 60%+ close rate

## Automation Opportunities

### Future Enhancements:
1. **Automated demo generation:** Form input → generated demo site
2. **Dynamic content updates:** Sync with live fixture data
3. **A/B testing framework:** Test different messaging approaches
4. **Real-time analytics dashboard:** Track demo performance across all clubs
5. **Lead scoring integration:** Rank demos by engagement level

This systematic approach to demo creation should significantly increase conversion rates by showing each club exactly what their implementation would look like, removing uncertainty and building confidence in the platform.