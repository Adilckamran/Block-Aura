# Block Aura (BA) — Official Web Portal

> **Decentralized, High-Performance Cryptocurrency Web Portal on Solana & Polygon**

Block Aura is an authentic, community-first cryptocurrency project in active pre-deployment development, operating across the **Solana** and **Polygon** blockchain ecosystems.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Source of Truth](#source-of-truth)
3. [Key Features & Additions](#key-features--additions)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Local Installation & Development](#local-installation--development)
7. [Production Build](#production-build)
8. [Content & Data Architecture](#content--data-architecture)
9. [Decentralized Exchange (DEX) & Launch Pool](#decentralized-exchange-dex--launch-pool)
10. [Free Static Hosting & Deployment](#free-static-hosting--deployment)

---

## 1. Project Overview
The Block Aura web portal is engineered with strict standards of transparency, visual balance, and modern cryptocurrency aesthetics. The design features obsidian black, deep navy, champagne gold accents, neon cyan highlights, and a clean, uncluttered user experience with generous negative space.

### Core Highlights:
- **Dual-Chain Operations**: Native support for **Solana** (high speed, ultra-low fees) and **Polygon** (EVM compatibility, Ethereum L2 security). Pure multi-chain architecture.
- **Simplified Navigation**: Streamlined 6-item navbar (`HOME`, `ABOUT`, `TOKEN`, `ECOSYSTEM`, `ROADMAP`, `FAQ`) plus a prominent highlighted `BUY BLOCK AURA` action button.
- **Decentralized Exchange Integration**: Clear explanation of non-custodial DEX trading across Solana and Polygon ecosystems with generic placeholders.
- **Token Burning Mechanism**: Deflationary design permanently removing selected tokens on-chain to support a structured and sustainable ecosystem.
- **Launch Pool Liquidity**: Dedicated launch infrastructure designed to support healthy multi-chain trading depth upon launch.
- **AI-Driven Digital Era**: Alignment with next-generation autonomous computation, machine-to-machine transactions, and high-frequency digital architectures.
- **Bilingual Localization**: Full English (EN) and German (DE) translations with automatic `localStorage` persistence and dynamic HTML document sync.

---

## 2. Source of Truth
- **Brand Name**: Block Aura
- **Ticker Symbol**: `BA`
- **Supported Networks**: Solana & Polygon
- **Project Stage**: In Development (Pre-Deployment)
- **Planned Token Supply**:
  - Polygon Deployment: `200,000,000 BA` (Planned)
  - Solana Deployment: `200,000,000 BA` (Planned)
  - *Subject to confirmation of the final token architecture; not claimed as one shared supply unless confirmed by cross-chain bridge design.*
- **Official Launch Date**: `COMING SOON — OFFICIAL LAUNCH DATE TO BE ANNOUNCED`
- **Contract Addresses**: *Pending Confirmation / Under Active Modeling*
- **Token Minting Model**: *Pending Confirmation (permissions and caps under audit review)*
- **Token Burning Mechanism**: *Pending Confirmation (structured supply management)*
- **Trading Availability**: *Supported Decentralized Exchanges upon Launch*
- **Whitepaper**: Official Architectural Draft v1.0 (Interactive Reader & Downloadable PDF)
- **Official X Profile**: [https://x.com/BlockAuraCoin](https://x.com/BlockAuraCoin)
- **Official Facebook Profile**: [https://www.facebook.com/BlockAura/](https://www.facebook.com/BlockAura/)

---

## 3. Key Features & Additions
- **Comprehensive 14-Section Whitepaper**: Full interactive online reader (`/whitepaper`) and downloadable standalone 9-page PDF (`/block-aura-whitepaper.pdf`) covering:
  1. Cover Page & Identification
  2. Abstract & Executive Summary
  3. Introduction to Block Aura
  4. Project Vision and Mission
  5. AI-Related Project Vision
  6. Solana and Polygon Network Overview
  7. Token Supply and Tokenomics (Planned 200M on Polygon, 200M on Solana)
  8. Minting and Burning Mechanisms (Pending Confirmation)
  9. Decentralized Exchange Availability
  10. Planned Launch/Liquidity Pool
  11. Roadmap (Phased Progression)
  12. Security Considerations and Risk Disclosure
  13. Disclaimer and Legal Notice
  14. Official Links and Community
- **Token Burning Section**: Explains that selected tokens may be permanently removed from circulation through the Block Aura burning mechanism to support a structured and sustainable token ecosystem.
- **Launch Pool Section**: Transparent explanation of upcoming launch/liquidity pool infrastructure without unrealistic financial promises.
- **AI Future Era**: Short, high-tech section connecting Block Aura's high-speed multi-chain consensus with the autonomous AI-driven digital future.
- **Less Crowded, Balanced Layout**: Redesigned sections with increased whitespace, cleaner typography hierarchy, and restrained futuristic glow accents.

---

## 4. Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 (Obsidian, Champagne Gold, Neon Cyan, Deep Navy)
- **Routing**: React Router DOM 6 with anchor smooth-scrolling support
- **Icons**: Lucide React
- **Visuals**: Native HTML5 Canvas 3D Fibonacci Sphere with multi-chain nodes

---

## 5. Project Structure
```text
Block Aura/
├── public/
│   ├── block-aura-logo.jpg   # Brand logo
│   ├── robots.txt            # Search engine indexing rules
│   ├── sitemap.xml           # Multi-language XML sitemap
│   ├── 404.html              # Universal SPA fallback script for static hosts
│   └── _redirects            # Cloudflare Pages SPA rewrite rule
├── src/
│   ├── assets/
│   │   └── block-aura-logo.jpg # Bundled logo reference
│   ├── components/
│   │   ├── Footer.tsx        # Responsive footer with social links & disclaimers
│   │   ├── HeroSphere.tsx    # 3D interactive multi-chain node sphere
│   │   ├── MarketDataSection.tsx # Honest telemetry empty state
│   │   ├── Navbar.tsx        # Simplified navigation with highlighted CTA
│   │   ├── SEOHead.tsx       # Dynamic bilingual meta tags & titles
│   │   └── StatusBadge.tsx   # Reusable status pill component
│   ├── data/
│   │   └── projectData.ts    # Single source of truth (Solana, Polygon, Roadmap, FAQ)
│   ├── i18n/
│   │   ├── LanguageContext.tsx # Language state, persistence & document sync
│   │   └── translations.ts   # Complete EN and DE translation dictionaries
│   ├── layouts/
│   │   └── RootLayout.tsx    # App shell with scroll-to-top behavior
│   ├── pages/
│   │   ├── AboutPage.tsx     # Vision & Core Values
│   │   ├── ContactPage.tsx   # Official Community Channels & Security Notice
│   │   ├── EcosystemPage.tsx # Solana & Polygon Feature Matrix
│   │   ├── FaqPage.tsx       # Categorized searchable FAQ accordion
│   │   ├── HomePage.tsx      # Clean, balanced, flagship multi-section homepage
│   │   ├── NotFoundPage.tsx  # Branded luxury 404 page
│   │   ├── RoadmapPage.tsx   # 4-phase proposed development timeline
│   │   ├── TokenomicsPage.tsx# Asset parameters, burning, & launch pool
│   │   └── WhitepaperPage.tsx# Preliminary draft documentation
│   ├── styles/
│   │   └── index.css         # Global tokens, custom scrollbar, luxury glassmorphism
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── App.tsx               # Root route provider
│   └── main.tsx              # Application mount point
├── dist/                     # Optimized static production build output
├── package.json              # Dependency manifests & scripts
├── tailwind.config.js        # Design tokens & color system
├── tsconfig.json             # TypeScript compiler configuration
└── vite.config.ts            # Vite bundler configuration
```

---

## 6. Local Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```
Navigate to `http://localhost:5173`.

---

## 7. Production Build

To build an optimized, tree-shaken static bundle for production:
```bash
npm run build
```
This runs TypeScript validation (`tsc`) and outputs production-ready assets into `dist/`.

To preview the production build locally:
```bash
npm run preview
```

To run the automated data & multi-chain integrity verification:
```bash
node scripts/verify-data.mjs
```

---

## 8. Content & Data Architecture
- **Translations (EN / DE)**: Edit strings in `src/i18n/translations.ts`.
- **Project Data**: Update parameters, network specifications, roadmap milestones, and FAQs in `src/data/projectData.ts`.
- **Logo Replacement**: Replace `public/block-aura-logo.jpg` with any image of the same name to automatically update everywhere on the site.

---

## 9. Decentralized Exchange (DEX) & Launch Pool
- Block Aura is architected for decentralized exchange trading without custodial intermediaries.
- When smart contracts are deployed to Solana and Polygon mainnets, insert the verified contract addresses in `src/data/projectData.ts`.
- DEX pairs and liquidity pools will link directly from the `BUY BLOCK AURA` and `EXPLORE DEX` buttons.

---

## 10. Free Static Hosting & Deployment

The application compiles into static files in `dist/` ready for free static hosting.

### Cloudflare Pages (Recommended)
1. Push repository to GitHub or GitLab.
2. In [Cloudflare Pages](https://dash.cloudflare.com/), choose **Connect to Git**.
3. Set build command to `npm run build` and output directory to `dist`.
4. Deploy. The included `public/_redirects` file ensures all client-side routes work seamlessly.

### GitHub Pages
1. Push repository to GitHub.
2. Under **Settings** > **Pages**, enable deployment via GitHub Actions or static branch.
3. The included `public/404.html` script provides automatic SPA fallback redirection.
