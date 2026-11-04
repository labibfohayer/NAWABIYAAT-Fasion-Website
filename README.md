# NAWABIYAAT - Royal Panjabi Atelier E-Commerce Platform & Admin Portal

A full-featured luxury ethnic menswear e-commerce platform and administrative control portal engineered for bespoke artisanal garments, Varanasi katan weaves, pure mulberry silk panjabis, Sultanate kabli sets, and authentic Cambodian oud attars. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

---

## Project Overview

NAWABIYAAT is a high-performance fashion commerce application combining an editorial digital storefront with a real-time merchant operations portal. The platform delivers a high-end shopping experience featuring intelligent sizing recommendations, interactive garment lookbooks, multi-tier checkout with automated order invoice generation, and a centralized administrative dashboard supporting live product catalog management and order lifecycle tracking.

---

## Key Features

### 1. Customer Storefront Experience
- Interactive Lookbook Hero Stage: Dynamic lookbook showcase featuring curated collection presets (Royal Silk, Varanasi Katan, Sultanate Kabli) with instant fabric previews and pricing telemetry.
- Dual Product Presentation Modes:
  - Continuous Marquee Mode: Hardware-accelerated horizontal auto-scrolling rail with smooth pause-on-hover mechanics.
  - Classic Grid Layout: Responsive 3-to-4 column editorial grid with real-time sorting and category filtering.
- Portrait Fashion Cards: High-definition 3:4 aspect ratio cards equipped with quick size selector pills (38, 40, 42, 44), one-click wishlist toggling, and fast bag additions.
- Automated AI Size Advisor: Rule-based recommendation engine that calculates body proportions and determines optimal garment sizing based on user-inputted height, weight, and desired fit (Slim, Regular, or Relaxed).
- Sliding Bag Drawer with Threshold Indicator: Interactive cart drawer displaying progress towards complimentary nationwide shipping (threshold: BDT 3,000), dynamic line-item recalculations, and coupon verification (`EID2026`, `NAWABI10`, `NAWAB`).
- Express Multi-Channel Checkout: Streamlined order completion workflow supporting Cash on Delivery (COD) as well as direct mobile financial services (bKash and Nagad) with transaction ID validation and unique order receipt generation (`NW-XXXXXX`).
- Bespoke Concierge and Brand Story: Dedicated contact and atelier consultation portal (`/contact`) and brand heritage narrative page (`/about`).

### 2. Centralized Admin Management Portal (`/admin`)
- Secure Route Separation: Dedicated administrative dashboard located at `/admin` for store operators.
- Catalog CRUD Operations: Create, update, toggle visibility, and delete products across all garment collections (Silk, Katan, Kabli, Wedding, Cotton, and Oud).
- Client-Side Asset Processing: Native file selection and FileReader base64 encoding with immediate visual preview before submission.
- Real-Time Cross-Tab State Synchronization: Catalog updates broadcast across all active browser windows and tabs using custom reactive storage events.
- Live Order Management: Full order lifecycle tracker allowing staff to update order states (`Pending` -> `Confirmed` -> `Shipped` -> `Delivered`) and view item breakdowns with shipping addresses.
- Global Storefront Controls: Real-time configuration of the global announcement strip, customer service hotline, and free-shipping minimums.

---

## Tech Stack

- Framework: Next.js 16.4.5 (App Router, Turbopack)
- Core Library: React 19.3.0
- Language: TypeScript 5.x
- Styling: Tailwind CSS v4 (`@tailwindcss/turbopack`)
- Iconography: Lucide React
- Typography: Playfair Display (Editorial Serif) and Geist Sans (Interface Sans)
- State Synchronization: Custom Web Storage Events and Local Storage Persistence Layer
- Code Quality: ESLint 9

---

## Project Structure

```
NAWABIYAAT-Fasion-Website/
├── app/                       # Next.js App Router routes and page layouts
│   ├── layout.tsx             # Root layout with typography and metadata
│   ├── page.tsx               # Storefront main landing and catalog page
│   ├── admin/                 # Centralized administration portal
│   │   └── page.tsx           # Admin inventory and order control dashboard
│   ├── about/                 # Atelier heritage and craftsmanship page
│   └── contact/               # Customer concierge and boutique locations
├── components/                # Reusable presentation and interactive components
│   ├── Navbar.tsx             # Sticky luxury navigation with bag toggle
│   ├── HeroLookbook.tsx       # Live lookbook switcher
│   ├── ProductGrid.tsx        # Responsive grid and auto-scroll marquee
│   ├── ProductCard.tsx        # 3:4 portrait card with size picker
│   ├── SizeAdvisorModal.tsx   # AI size calculation modal
│   ├── BagDrawer.tsx          # Slide-out cart with coupon validator
│   ├── CheckoutModal.tsx      # Multi-method payment and receipt modal
│   └── Footer.tsx             # Multi-column boutique footer
├── public/                    # Static image assets, logos, and SVGs
├── styles/                    # Global stylesheet and Tailwind directives
├── next.config.ts             # Next.js compiler and bundle settings
├── package.json               # Package dependencies and build scripts
└── tsconfig.json              # TypeScript compilation configuration
```

---

## Installation and Setup Guide

### Prerequisites
- Node.js version 20.x or higher
- npm, pnpm, or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/labibfohayer/NAWABIYAAT-Fasion-Website.git
cd NAWABIYAAT-Fasion-Website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
- Storefront: `http://localhost:3000`
- Admin Dashboard: `http://localhost:3000/admin`

### 4. Production Build and Test
```bash
npm run build
npm run start
```

---

## Deployment Configuration

The repository is built for deployment on edge platforms such as Cloudflare Pages, Vercel, or AWS Amplify:
- Build Command: `npm run build`
- Output Directory: `.next` (or standalone output)
- Node Runtime: `20.x` or higher

Live Deployments:
- Storefront: [https://nawabiyaat.pages.dev](https://nawabiyaat.pages.dev)
- Admin Portal: [https://nawabiyaat.pages.dev/admin](https://nawabiyaat.pages.dev/admin)

---

## Author and Contact

Architected and developed by **Labib Fohayer**.

- GitHub: [https://github.com/labibfohayer](https://github.com/labibfohayer)
- Flagship Inquiries: NAWABIYAAT Atelier, Dhaka, Bangladesh

---

## License

Copyright (c) 2026 NAWABIYAAT Atelier. All rights reserved. Source code is made available for technical demonstration and portfolio evaluation.
