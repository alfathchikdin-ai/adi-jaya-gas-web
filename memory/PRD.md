# CV. Adi Jaya Gas — Landing Page PRD

## Original Problem Statement
Premium B2B landing page for Indonesian industrial gas supplier "CV. Adi Jaya Gas". Industry: Industrial / Medical / Specialty Gas. Goal: generate qualified B2B leads, drive WhatsApp inquiries, build trust.

## Architecture
- **Stack**: React 19 + Tailwind CSS 3 + framer-motion + lucide-react
- **Pattern**: Single-page landing, component-per-section under `/app/frontend/src/components/`
- **Constants**: `/app/frontend/src/lib/constants.js` (WA, phone, email, address, maps)
- **Backend**: Default template untouched (not used by landing page)
- **Routing**: Anchor scroll (`#beranda`, `#produk`, `#industri`, `#tentang`, `#kontak`) via `scroll-behavior: smooth`

## User Personas
- Factory / Manufacturing Manager (procurement of industrial gas)
- Hospital / Clinic Procurement (medical oxygen, N₂O)
- Lab / Research (UHP, calibration, specialty gas)
- Workshop / Welding Owner (Argon, CO₂)
- F&B / Pharma operations (food-grade CO₂, N₂)

## Core Requirements (static)
- Brand colors: #0A2540 (deep blue) · #FF6B00 (industrial orange) · #FFFFFF · #F8FAFC
- Fonts: Manrope (display) + IBM Plex Sans (body)
- Full Bahasa Indonesia copy
- Mobile-first responsive
- Strong WhatsApp conversion: floating button, sticky mobile bar, every CTA → wa.me
- Phone/WA: 0881-0805-90092 (intl: 62881080590092)
- Email: adijayagas.id@gmail.com
- Address: Jl. Bougenville D9, Kunciran Indah, Kec. Pinang, Banten

## What's Implemented (2025-12)
- [x] Sticky Navbar with mobile hamburger, phone display, primary CTA
- [x] Hero: gradient navy + facility background, dual CTA, 4 trust features, floating "Quick Quote" card
- [x] Trust Indicators: 500+ customers · 12+ years · 8 wilayah · 20+ produk
- [x] Products grid (6 cards): O₂, N₂, Ar, CO₂, He, Specialty/UHP — each with WA CTA
- [x] Why Choose Us: 6 reason cards (one accent dark card)
- [x] Industries: 6 sectors with hover-to-orange interaction
- [x] About: team image + 12+ years badge + 3 pillars (Keandalan, Komitmen, Keselamatan)
- [x] Testimonials: 3 realistic B2B quotes (Factory Manager, Hospital Procurement, Workshop Owner)
- [x] Final CTA section with pulse-orange background
- [x] Contact: 4 info tiles + jam operasional + Google Maps embed + form (redirect-to-WhatsApp)
- [x] Footer: brand, social, quick nav, product list, contact details
- [x] Floating WhatsApp button + popup (auto-show after 400px scroll)
- [x] Mobile sticky bottom bar (Telepon + WhatsApp)
- [x] SEO meta + OG tags in `public/index.html`
- [x] Testing agent verification (95% frontend pass)
- [x] Deployment readiness audit (PASS)

## Backlog (Prioritized)

### P1
- Replace placeholder logo (Flame icon) when client uploads real logo asset
- Add Open Graph image (og:image) for richer social sharing previews

### P2
- Lead-capture backend (MongoDB) to log WhatsApp redirects for analytics
- Add real factory / product photography (replace AI/Unsplash stock)
- Bilingual ID/EN toggle
- Product detail pages (per gas) with technical specs / SDS download
- Customer logo wall ("Dipercaya oleh") — adds B2B credibility

### P3
- WhatsApp Business API integration (auto-reply / ticketing)
- Live stock / availability indicator per product

## Next Tasks
1. Wait for client to provide real logo + product photography
2. Optionally: implement lead-tracking endpoint to count WA-redirect events
3. Optionally: add customer logo wall + case study section
