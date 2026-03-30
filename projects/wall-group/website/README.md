# The Wall Group Website

A premium, multi-page website for The Wall Group - Belfast's fastest-growing independent convenience retail network.

## 🎯 Project Brief

This is a **statement piece** website designed to showcase The Wall Group as a multi-million pound FMCG business with raw Belfast community energy. Built for Gavan Wall (potential seed capital investor for Blue Canvas).

## 🚀 Features

- **5 Premium Pages**: Home, Stores, About, Careers, Contact
- **Bold Design**: Editorial magazine meets premium retail brand
- **Dark Theme**: Deep charcoal/slate with SPAR green (#00703c) and warm gold accents
- **Premium Typography**: Cabinet Grotesk display font via Google Fonts
- **Mobile-First**: Responsive design optimized for all devices
- **CSS-Only Animations**: Smooth, premium, purposeful animations
- **Static Export**: Optimized for Vercel deployment

## 🏪 Store Network (12+ Locations)

1. **Landscape Filling Station** - 135 Crumlin Road, Belfast (24/7)
2. **Flax EUROSPAR Ardoyne** - The Flax Centre, Ardoyne Avenue, Belfast
3. **SPAR Ardoyne** - 27-31 Ardoyne Road, Belfast
4. **Rathcoole Filling Station** - 42 Doagh Road, Newtownabbey
5. **SPAR Whitewell Road** - 95 Whitewell Road, Newtownabbey
6. **Subway Fortwilliam** - 551 Antrim Road, Belfast

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.0 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Typography**: Cabinet Grotesk + Inter (Google Fonts)
- **Animations**: CSS-only with Tailwind utilities
- **Export**: Static site generation for Vercel
- **TypeScript**: Full type safety

## 🎨 Design System

### Colors
- **Primary Dark**: #1a1a2e (wall-dark)
- **SPAR Green**: #00703c
- **Wall Gold**: #d4a853
- **Charcoal**: #16213e (wall-charcoal)
- **Slate**: #0f172a (wall-slate)

### Typography
- **Display**: Cabinet Grotesk (headings, logos)
- **Body**: Inter (content, UI)

### Components
- Premium cards with subtle gradients and shadows
- Animated underlines for navigation
- Hover effects with scale transforms
- Gradient buttons and CTAs
- Stats counters with animations

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment to Vercel

1. **Push to GitHub** (recommended):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Wall Group website"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import from GitHub
   - Deploy automatically

3. **Manual deployment**:
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## 📧 Contact Information

- **Business Enquiries**: marketing@wallgroup.co.uk
- **General Enquiries**: hello@wallgroup.co.uk
- **Phone**: 028 9074 1234

## 🏗 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx       # Our Story page
│   ├── careers/page.tsx     # Join Our Team page
│   ├── contact/page.tsx     # Get in Touch page
│   └── stores/page.tsx      # Store Network page
└── components/
    ├── Navigation.tsx       # Main navigation with mobile menu
    └── Footer.tsx           # Footer with brand partners
```

## ✨ Key Features by Page

### Homepage
- Full-screen hero with parallax background
- Animated stats counter (12+ locations, 300+ staff, 5M+ customers)
- Brand partner strip
- Store network preview
- Gavan Wall story section with quote
- Services grid (Foodvenience Solutions)
- Careers teaser
- Contact form

### Our Stores
- Store finder with postcode search
- Filter tags (24 Hours, Fuel, Post Office, etc.)
- Premium store cards with detailed information
- Expandable details with services and contact info
- Interactive map placeholder
- Services overview

### Our Story
- Founder journey (barrister to retail empire)
- Interactive timeline (2008-2024)
- Community impact section
- Partnership details (Henderson Group/SPAR)
- Cross-community employment focus
- Future vision

### Careers
- Current opportunities grid
- Role details with requirements and benefits
- Employee testimonials
- Application form with CV upload
- Benefits showcase
- Company culture

### Contact
- Multiple contact methods
- Contact form with subject categories
- All store locations with details
- Interactive map placeholder
- FAQ section
- Social media links

## 🎯 Business Focus

**The Wall Group Story**: From 468 sq ft filling station (2008) to 12+ location retail network serving 5M+ customers annually with 300+ staff across Belfast and Newtownabbey.

**Key Brands**: SPAR, EUROSPAR, Subway, Post Office, GO Fuel, Texaco, Wall's Foodhall & Butchery, FeedMe Delis, dailyDeli

**Community Impact**: Cross-community employment (Ardoyne, Rathcoole, Lower Old Park), local investment, essential services.

## 🚫 Exclusions (As Requested)

- ❌ No annual turnover figures
- ❌ No "McKee & Sons Butchers" (rebranded to Wall's Foodhall & Butchery)
- ❌ No YoggieBerrie standalone brand (Fortwilliam is now Subway)
- ❌ No external stock photos
- ❌ No generic AI aesthetics

## 🏆 Quality Standard

This website is built to look like it cost £15,000. Every pixel, animation timing, and interaction has been carefully crafted to meet the expectations of a former criminal barrister who built a £7M+ retail empire.

**#BackinNorthBelfast #BackinWestBelfast**