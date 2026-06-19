# Alvis WAVE Services

**Water • Air • Voltage • Experts**

A full-featured home services marketing website for Alvis WAVE Services (formerly Alvis Electrical), serving Western Montana. Built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **4 Service Hubs**: Water (Plumbing), Air (HVAC), Voltage (Electrical), Experts (Remodeling)
- **38 Sub-services** with individual detail pages
- **City × Service SEO Matrix**: 6 cities × 38 services = 228 local SEO pages
- **Offers & Promotions**: Category-filtered deals with expiration dates
- **Yard Sign Program**: Customer referral program with $250 monthly giveaway
- **Maintenance Plans**: 3-tier subscription plans ($19/$39/$69/mo)
- **Filter Saver Club**: HVAC filter subscription service
- **Financing Options**: 0% APR, low payments, same-as-cash
- **Contact Forms**: Integrated with Resend API for email notifications
- **Reviews & Testimonials**: Social proof page
- **Blog**: Article previews for content marketing
- **Full SEO**: Per-page titles, descriptions, sitemap.xml (292 URLs), robots.txt
- **Google Tag Manager**: Ready for analytics tracking

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Routing**: Wouter (lightweight)
- **Styling**: Tailwind CSS v4 + custom brand tokens
- **UI Components**: Custom shadcn/ui-inspired components
- **Email**: Resend API (serverless functions)
- **Hosting**: Vercel (recommended)

## Project Structure

```
src/
  components/
    Navbar.tsx          # Mega-menu nav with location selector
    Footer.tsx          # 4-column footer
    SEO.tsx             # Dynamic page metadata
    ui/                 # Button, Card, Input, Badge
  pages/
    Home.tsx            # Hero, hubs, offers, trust signals
    Services.tsx        # Service hub overview
    ServiceHub.tsx      # Individual hub page
    ServiceDetail.tsx   # Service detail page
    Offers.tsx          # Filtered promotions
    YardSign.tsx        # Program signup form
    Financing.tsx       # Payment options
    MaintenancePlans.tsx # 3-tier plans
    FilterSaverClub.tsx # Subscription page
    About.tsx           # Company story
    Reviews.tsx         # Testimonials
    ServiceArea.tsx     # Location pages
    CityHub.tsx         # City landing page
    CityService.tsx     # City + service combo page
    Blog.tsx            # Article listing
    Contact.tsx         # Form + contact info
    Privacy.tsx         # Privacy policy
    Terms.tsx           # Terms of service
    NotFound.tsx        # 404 page
  lib/
    content.ts          # All content (company, services, cities, offers)
    utils.ts            # cn() helper
  App.tsx               # Route configuration
  main.tsx              # Entry point
  index.css             # Tailwind + brand tokens

api/
  contact.ts            # POST /api/contact → Resend
  yard-sign.ts          # POST /api/yard-sign → Resend

public/
  sitemap.xml           # 292 URLs
  robots.txt            # Crawler instructions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login (opens browser)
vercel login

# Deploy
vercel --prod

# Add environment variables
vercel env add RESEND_API_KEY
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email | Yes |

## Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| wave-blue | #0F4C81 | Primary |
| wave-blue-dark | #0A2D4A | Dark backgrounds |
| wave-copper | #C9722F | Accent / CTAs |
| wave-copper-light | #E8A87C | Hover states |
| wave-glacier | #EAF3F8 | Section backgrounds |
| wave-stone | #D7DDE2 | Borders |
| wave-charcoal | #1F2933 | Body text |
| wave-slate | #5B6875 | Secondary text |

## Content Management

All copy is centralized in `src/lib/content.ts`. Update:
- `COMPANY` — business info, phone, hours
- `SERVICE_HUBS` — services and descriptions
- `LOCATIONS` — service area cities
- `CITY_CONTENT` — city-specific copy, neighborhoods, landmarks
- `OFFERS` — promotions and deals
- `TRUST_SIGNALS` — stats displayed on homepage

## SEO

- **Sitemap**: 292 URLs covering all pages, services, and city combinations
- **Meta Tags**: Dynamic per-page via `<SEO />` component
- **GTM**: Replace `GTM-XXXXXXX` in `index.html` with your container ID

## Contact

- **Phone**: 406-396-9936
- **Email**: info@alviswaveservices.com
- **Domain**: alviswaveservices.com

---

Built for Alvis WAVE Services, Inc. | Western Montana
