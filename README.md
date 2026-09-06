# 🌺 অন্তস্প্রিহা আবাসিক দুর্গোৎসব ২০২৬ (Antaspriha Abashik Durga Puja Committee)

> A modern, responsive landing page for a Kolkata Durga Puja committee built with **Next.js 16**, **Tailwind CSS v4**, and **Sanity.io** free headless CMS.

![Durga Puja Banner](https://images.unsplash.com/photo-1601616631868-6d2c6c3df222?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Features

- **Festive Kolkata Aesthetic**: Authentic Bengali Sharodotsav color palette (sindoor crimson `#8F0D1E`, marigold gold `#F59E0B`, alpona decorative accents, subtle glows, and traditional typography).
- **Hero Section with Countdown**:
  - Auspicious Bengali blessing: *"॥ শ্রী শ্রী দুর্গোৎসব ২০২৬ ॥"*
  - Live countdown ticker to Maha Saptami / Pushpanjali.
  - Theme reveal card: *মাটির টানে — Celebrating Bengal's Terracotta & Folk Art*.
  - 4 Key Metrics: 75 Glorious Years, 100% Eco-Friendly Pratima, 50,000+ Daily Devotees, 24x7 Medical Booth.
- **Interactive Schedule Timeline (Maha Panchami to Vijaya Dashami)**:
  - Day selector tabs from Panchami to Dashami.
  - Bengali dates and tithi markers (e.g. *শুক্লা মহাষ্টমী তিথি*).
  - Glowing gold badges for sacred highlights: **Sandhi Puja (108 diyas & lotuses)**, **Kumari Puja**, **Nabapatrika Snan**, and **Sindoor Khela**.
  - Category filters: Rituals, Pushpanjali, Bhog / Prasad, Cultural & Aarti.
- **Responsive Photo Gallery with Fullscreen Lightbox**:
  - Albums: *Idol (প্রতিমা)*, *Pandal Architecture (মণ্ডপ)*, *Rituals & Dhunuchi*, *Cultural Evenings*, *Sindoor Khela*.
  - Full interactive lightbox with keyboard controls (`Left`, `Right`, `Escape`), captions, and photographer credits.
- **Committee Grid & Leadership Team**:
  - Profile cards for President, General Secretary, Cultural Convenor, Treasurer, Logistics, and Medical Camp.
  - 1-click WhatsApp chat, phone dialer (`tel:`), and email links.
  - President's welcome message to devotees.
- **Pandal & Craftsmanship Highlights**:
  - Master sculptor from Kumartuli atelier (traditional Daker Saaj).
  - 100% eco-friendly clay, bamboo, and non-toxic natural vegetable pigments.
  - Universal accessibility: wheelchair ramps, lost & found, 24x7 emergency medical booth.
- **Visitor Guide & Metro Navigation**:
  - Nearest Kolkata Metro stations (Kalighat Gate 2 & Rabindra Sarobar).
  - Parking zones, Aarti & Pushpanjali guidelines, and emergency police/ambulance contacts.
- **Free Headless CMS Integration (Sanity.io)**:
  - Zero-maintenance visual dashboard for non-technical committee members.
  - Committee members can upload photos from mobile phones with smart focal point cropping.
  - Real-time updates: edit timings or announcements without touching code.
  - **Zero-Config Fallback Layer**: If Sanity credentials are not set, the landing page serves rich, realistic Kolkata Durga Puja data out-of-the-box.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Connecting Sanity.io Headless CMS (Optional, Free)

Committee members can manage timings and pictures for free using [Sanity.io](https://sanity.io).

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Create a free project at [https://sanity.io](https://sanity.io) (no credit card needed).
3. Set your project ID:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
4. Read [`CMS_SETUP.md`](./CMS_SETUP.md) for the complete 3-minute committee member handbook.

---

## 📁 Project Architecture

```
durga-puja-site/
├── app/
│   ├── globals.css                # Festive colors, alpona borders, glow effects
│   ├── layout.tsx                 # Root layout with Bengali SEO & OG metadata
│   └── page.tsx                   # Main Landing Page (Server Component)
├── components/
│   ├── Navbar.tsx                 # Sticky responsive header & mobile drawer
│   ├── Hero.tsx                   # Hero section with countdown timer & theme card
│   ├── ScheduleTimeline.tsx       # Timeline (Panchami to Dashami) with filters
│   ├── PhotoGallery.tsx           # Responsive image grid with fullscreen lightbox
│   ├── CommitteeGrid.tsx          # Committee members grid with WhatsApp/call links
│   ├── PandalHighlights.tsx       # Artisan craftsmanship & eco-friendly features
│   ├── VisitorGuide.tsx           # Nearest metro, parking & Aarti guidelines
│   ├── Footer.tsx                 # Shubho Bijoya blessing & committee contacts
│   ├── CmsStatusModal.tsx         # Committee CMS login modal & setup helper
│   └── LandingPageShell.tsx       # Interactive client orchestrator
├── data/
│   └── mockData.ts                # Rich authentic fallback data for Kolkata Durga Puja
├── sanity/
│   ├── schemas/
│   │   ├── schedule.ts            # Sanity schema for Schedule & Timings
│   │   ├── gallery.ts             # Sanity schema for Photo Gallery with hotspot
│   │   ├── committee.ts           # Sanity schema for Committee Members
│   │   ├── siteSettings.ts        # Sanity schema for Pandal & Theme info
│   │   └── index.ts               # Schema aggregation
│   ├── lib/
│   │   ├── client.ts              # Sanity client configuration
│   │   ├── queries.ts             # GROQ queries for fetching data
│   │   └── image.ts               # Sanity image URL builder
│   └── fetchData.ts               # Dual-mode resilient data fetch layer
├── sanity.config.ts               # Sanity Studio dashboard configuration
├── .env.example                   # Environment variable template
└── CMS_SETUP.md                   # Step-by-step committee onboarding handbook
```

---

## 🛠️ Verification & Build

```bash
# Run linting check
npm run lint

# Build production bundle
npm run build
```

---

## 🌸 Shubho Sharodiya!
Crafted with cultural devotion and modern web engineering for Kolkata's Durga Puja.
