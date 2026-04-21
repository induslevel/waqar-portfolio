# Portfolio Site — Skills & Tech Stack Guide

A comprehensive guide for anyone who wants to recreate or understand the architecture behind this modern, dark-mode portfolio site.

---

## 🧩 Project Overview

This is a **single-page portfolio website** built for a Systems Architect. It features:

- Full dark/light mode theming
- Smooth scroll navigation with a floating burger-menu navbar
- Animated hero section with a spotlight effect and profile image
- Bento-grid skills section
- Card-based projects, experience timeline, credentials, organizations, and contact sections
- Integrated contact form via Web3Forms
- Floating WhatsApp button
- Static export (deployable to any CDN / Cloudflare Pages)

---

## ⚙️ Core Framework & Runtime

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | `^14.2.15` | React framework, routing, image optimization, static export |
| **React** | `^18` | UI component library |
| **React DOM** | `^18` | DOM rendering for React |
| **TypeScript** | `^5` | Type safety across the entire codebase |
| **Node.js** | LTS | Runtime environment |

> **Key Config:** `next.config.mjs` uses `output: 'export'` and `images: { unoptimized: true }` to generate a fully static build (no Node.js server needed at runtime).

---

## 🎨 Styling

| Technology | Version | Purpose |
|---|---|---|
| **Tailwind CSS** | `^3.4.0` | Utility-first CSS framework |
| **PostCSS** | `^8` | Required Tailwind processing pipeline |
| **Autoprefixer** | `^10.0.1` | Cross-browser CSS compatibility |
| **tailwind-merge** | `^2.2.1` | Merging Tailwind classes without conflicts (`cn()` utility) |
| **clsx** | `^2.1.0` | Conditional className construction |

### Tailwind Configuration Highlights

- **Dark mode:** `class`-based (toggled via `next-themes`)
- **Custom animations:** `spotlight` (fade-in scale) and `shimmer` (background-position slide)
- **Custom keyframes** defined in `tailwind.config.js` under `theme.extend`
- **Primary color:** Blue (`#3b82f6`) — used consistently for accents throughout the site

### Typography

- **Font:** `Inter` — loaded from Google Fonts via `next/font/google` in the root layout
- Applied globally via `inter.className` on the `<body>` tag

---

## 🗂️ Project Structure

```
resume/
├── src/
│   ├── app/
│   │   ├── globals.css         # Minimal global styles (resets, CSS vars)
│   │   ├── layout.tsx          # Root layout: font, ThemeProvider, Navbar, ThemeToggle
│   │   └── page.tsx            # Main page: assembles all section components
│   ├── components/
│   │   ├── Hero.tsx            # Fullscreen hero with spotlight + profile image
│   │   ├── Navbar.tsx          # Fixed burger-menu navbar with scroll-aware behavior
│   │   ├── Projects.tsx        # Grid of project cards with tech-stack tags
│   │   ├── Skills.tsx          # Bento-grid technical arsenal section
│   │   ├── Experience.tsx      # Timeline of work history
│   │   ├── Credentials.tsx     # Certifications + Education (with logo images)
│   │   ├── Organizations.tsx   # Fellowship/org membership cards
│   │   ├── Interests.tsx       # Creative portfolio links (photography, blog)
│   │   ├── Contact.tsx         # Contact form + social links + WhatsApp button
│   │   ├── ThemeProvider.tsx   # Wraps next-themes ThemeProvider
│   │   ├── ThemeToggle.tsx     # Sun/moon dark mode toggle button
│   │   └── ui/
│   │       ├── BentoGrid.tsx   # Custom Bento Grid layout component
│   │       └── Spotlight.tsx   # Animated spotlight/glow effect component
│   └── lib/
│       └── utils.ts            # `cn()` helper (clsx + tailwind-merge)
├── public/
│   ├── profile.jpg             # Profile photo used in Hero section
│   └── logos/                  # SVG/PNG logos for certification cards
│       ├── gcp.svg, aws.svg, redhat.svg, vmware.png
│       ├── microsoft.svg, oracle.svg, cisco.svg, dell.svg
├── next.config.mjs             # Next.js config (static export mode)
├── tailwind.config.js          # Tailwind theme + animation config
├── tsconfig.json               # TypeScript config
└── package.json
```

---

## 📦 NPM Dependencies

### Runtime (dependencies)

| Package | Purpose |
|---|---|
| `next` | Framework |
| `react` + `react-dom` | UI library |
| `tailwindcss` | CSS utility framework |
| `postcss` | CSS processing |
| `autoprefixer` | CSS vendor prefixes |
| `framer-motion` | Animation library (available, can be used for page transitions) |
| `lucide-react` | Icon library — used extensively for section icons and skill tags |
| `next-themes` | Dark/light mode management |
| `clsx` | Conditional class names |
| `tailwind-merge` | Smart Tailwind class merging |

### Dev Dependencies

| Package | Purpose |
|---|---|
| `typescript` | TypeScript compiler |
| `@types/node` | Node.js type definitions |
| `@types/react` + `@types/react-dom` | React type definitions |
| `eslint` + `eslint-config-next` | Linting |

---

## 🖼️ UI Components (Custom-Built)

### `Spotlight.tsx`
An animated radial gradient glow effect that animates on page load (CSS keyframe: `spotlight`). Positioned in the hero section.

### `BentoGrid.tsx`
A responsive grid layout component (`BentoGrid` + `BentoGridItem`) inspired by Aceternity UI.
- Auto-rows of `18rem` on desktop
- 3-column grid on `md+`, 1-column on mobile
- Items can span 2 columns with `md:col-span-2`
- Each item has a `header` (gradient card), `title`, `description`, and optional `icon` slot

### `ThemeProvider.tsx`
A thin wrapper around `next-themes` `ThemeProvider`. Configured with:
- `attribute="class"` — applies dark mode via `dark` class on `<html>`
- `defaultTheme="dark"`
- `enableSystem` — respects OS preference
- `disableTransitionOnChange`

### `ThemeToggle.tsx`
A fixed floating button (bottom-left or top area) that toggles between dark/light themes using `useTheme()` from `next-themes`.

---

## 🌐 Third-Party Integrations

| Service | Usage |
|---|---|
| **Web3Forms** | Contact form submission (no backend needed). Script loaded via `next/script` with `strategy="afterInteractive"`. Uses an `access_key` in a hidden `<input>` |
| **WhatsApp** | Floating chat button linking to `wa.me/<phone>` |
| **Cloudflare Pages** | Deployment target (`wrangler.toml` present in project root) |
| **Google Fonts (Inter)** | Loaded via `next/font/google` — no external CSS import needed |
| **Credly / certmetrics / RedHat** | External links for certificate verification in the Credentials section |

---

## 🏗️ Key Design Patterns

### Dark Mode
- Implemented with `next-themes` using `class` strategy
- Tailwind's `dark:` variant used on every component
- Color pairs: `bg-white dark:bg-black`, `text-black dark:text-white`, `border-neutral-200 dark:border-neutral-800`

### Responsive Design
- Mobile-first layout with Tailwind breakpoints (`md:`, `lg:`)
- Hero: stacked on mobile (`flex-col`), side-by-side on desktop (`md:flex-row`)
- Grids: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3`
- Navbar: scroll-aware positioning via `window.scrollY` listener

### Profile Image Treatment
- `next/image` with `fill` layout and `object-cover`
- Layered gradient overlays (left-to-right fade + bottom fade) to blend into background
- Grayscale by default, color on hover (`grayscale hover:grayscale-0 transition-all duration-1000`)
- Reduced opacity on mobile for text legibility

### Navigation
- Fixed position, top-right burger button
- Dropdown menu with `scale` + `opacity` + `translate-y` CSS transitions
- Clicks outside the menu close it via full-screen overlay div
- Scroll listener changes the `top` position of the nav button

### Section Anchors
Each section has a unique `id` for anchor-link navigation:
`#home`, `#projects`, `#arsenal`, `#experience`, `#certifications`, `#education`, `#organizations`, `#interests`, `#contact`

---

## 🚀 Getting Started (Recreate the Site)

### 1. Bootstrap the project

```bash
npx create-next-app@latest my-portfolio --typescript --tailwind --eslint --src-dir --app --import-alias "@/*"
cd my-portfolio
```

### 2. Install additional packages

```bash
npm install framer-motion lucide-react next-themes clsx tailwind-merge
```

### 3. Configure Tailwind

In `tailwind.config.js`, add:
- `darkMode: "class"`
- Custom `animation` and `keyframes` for `spotlight` and `shimmer`

### 4. Configure Next.js for static export (optional)

In `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

### 5. Build the `cn()` utility

```ts
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 6. Create UI primitives

Build `src/components/ui/Spotlight.tsx` and `src/components/ui/BentoGrid.tsx` as custom components (see source files).

### 7. Set up ThemeProvider

Wrap the root layout's `<body>` with `ThemeProvider` from `next-themes`.

### 8. Add Web3Forms contact form

- Sign up at [web3forms.com](https://web3forms.com) and get a free `access_key`
- Add `<Script src="https://web3forms.com/client/script.js" strategy="afterInteractive" />` to your layout
- Place a hidden `<input type="hidden" name="access_key" value="YOUR_KEY" />` inside your form

### 9. Run locally

```bash
npm run dev
```

### 10. Build & deploy

```bash
npm run build
# Static output goes to /out — deploy this folder to Cloudflare Pages, Vercel, or Netlify
```

---

## 📋 Sections Checklist (to adapt for your own profile)

- [ ] **Hero** — Replace name, title, tagline, and `public/profile.jpg`
- [ ] **Projects** — Update project titles, descriptions, and tech stacks in `Projects.tsx`
- [ ] **Skills** — Update skill categories and tool names in `Skills.tsx`
- [ ] **Experience** — Update company names, roles, periods, and bullet points in `Experience.tsx`
- [ ] **Certifications** — Update cert names, links, and logos in `Credentials.tsx` + `public/logos/`
- [ ] **Education** — Update degree, institution, and period in `Credentials.tsx`
- [ ] **Organizations** — Update org names and links in `Organizations.tsx`
- [ ] **Creative Portfolios** — Update portfolio links and descriptions in `Interests.tsx`
- [ ] **Contact** — Update email, LinkedIn, GitHub, social links, WhatsApp number, and Web3Forms key in `Contact.tsx`
- [ ] **SEO** — Update `metadata` (title + description) in `src/app/layout.tsx`

---

## 🎨 Color & Theme Reference

| Role | Light Mode | Dark Mode |
|---|---|---|
| Background | `white` | `black` |
| Card background | `neutral-50` / `white` | `neutral-900/50` / `black/50` |
| Primary text | `black` | `white` |
| Secondary text | `neutral-600` | `neutral-400` |
| Accent / links | `blue-600` | `blue-400` |
| Borders | `neutral-200` | `neutral-800` |
| Spotlight fill | `rgba(59,130,246,0.2)` | same |
| Glowing dots (timeline) | `blue-500` with shadow | same |

---

*Built with Next.js 14, TypeScript, Tailwind CSS, Lucide React, next-themes, and Web3Forms.*
