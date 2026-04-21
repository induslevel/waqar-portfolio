# 🚀 Waqar Azeem — Systems Architect Portfolio

A modern, responsive, dark-mode portfolio site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Deployable for free on **Cloudflare Pages** in minutes.

> **Want to build your own version?** Follow this guide — no backend, no database, just static files.

---

## ✨ Live Demo

**[waqar.induslevel.com](https://waqar.induslevel.com)** *(replace with your own URL)*

---

## 📸 Features

- ⚡ Blazing fast — fully static export (HTML/CSS/JS only)
- 🌗 Dark / Light mode with system preference detection
- 🎯 Smooth single-page scrolling with floating burger navbar
- 💡 Animated spotlight hero section with profile photo
- 🧩 Bento-grid skills showcase
- 📬 Contact form (no backend — powered by Web3Forms)
- 💬 Floating WhatsApp chat button
- 📱 Fully responsive — mobile, tablet, desktop
- 🆓 Free hosting on Cloudflare Pages

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Animations | Framer Motion + custom CSS keyframes |
| Dark Mode | next-themes |
| Contact Form | Web3Forms (free tier) |
| Deployment | Cloudflare Pages |

> For a full breakdown of every dependency and design pattern, see **[docs/skills.md](docs/skills.md)**.

---

## 🚦 Quick Start — Build Your Own

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A free [Cloudflare account](https://dash.cloudflare.com/sign-up)
- A free [Web3Forms account](https://web3forms.com/) for the contact form

---

### Step 1 — Clone this repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

### Step 2 — Install dependencies

```bash
npm install
```

---

### Step 3 — Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the portfolio site running live.

---

### Step 4 — Personalize the content

Open each file below and swap out the placeholder data with your own:

| File | What to change |
|---|---|
| `src/app/layout.tsx` | Page title and SEO description |
| `src/components/Hero.tsx` | Your name, job title, and tagline |
| `src/components/Projects.tsx` | Your project names, descriptions, and tech tags |
| `src/components/Skills.tsx` | Your technical skills and tools |
| `src/components/Experience.tsx` | Your work history (companies, roles, dates, bullet points) |
| `src/components/Credentials.tsx` | Your certifications and education |
| `src/components/Organizations.tsx` | Fellowships or memberships |
| `src/components/Interests.tsx` | Links to your blog, photography, or other portfolios |
| `src/components/Contact.tsx` | Email, LinkedIn, GitHub, WhatsApp number, Web3Forms key |
| `public/profile.jpg` | Your profile photo |
| `public/logos/` | Certification provider logos (SVG/PNG) |

> **Tip:** Every section is a self-contained React component. You only need to edit the data arrays at the bottom of each file — no need to touch the JSX/HTML structure unless you want to redesign a section.

---

### Step 5 — Set up the contact form (free)

1. Go to [web3forms.com](https://web3forms.com/) and sign up for free.
2. Click **"Create your Access Key"** and enter your email.
3. Copy the access key you receive.
4. Open `src/components/Contact.tsx` and replace the value in this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```

All contact form submissions will arrive directly in your inbox. No backend required.

---

### Step 6 — Build the static site

```bash
npm run build
```

This generates a static `/out` folder with pure HTML, CSS, and JS — ready to deploy anywhere.

---

## ☁️ Deploy to Cloudflare Pages (Free)

Cloudflare Pages gives you free hosting with a global CDN, automatic HTTPS, and a free subdomain like `yoursite.pages.dev`.

### Option A — Connect GitHub (Recommended — auto-deploys on every push)

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "My portfolio"
   git push origin main
   ```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages** → **Create a project** → **Connect to Git**.

3. Select your GitHub repository and use these **Build Settings**:

   | Setting | Value |
   |---|---|
   | Framework preset | `Next.js (Static HTML Export)` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Node.js version | `18` (set under Environment Variables: `NODE_VERSION = 18`) |

4. Click **Save and Deploy**. Cloudflare builds your site and gives you a URL like `yoursite.pages.dev` in ~2 minutes.

5. Every time you push to `main`, Cloudflare automatically rebuilds and deploys. ✅

---

### Option B — Manual Upload (No GitHub needed)

1. Build the site locally:
   ```bash
   npm run build
   ```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages** → **Create a project** → **Upload assets**.

3. Drag and drop the contents of the `/out` folder.

4. Click **Deploy site**. Done.

---

### Option C — Wrangler CLI (Advanced)

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy out --project-name=my-portfolio
```

---

### Connecting a Custom Domain

1. In Cloudflare Pages, go to your project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g., `portfolio.yourdomain.com`).
3. If your domain is registered through Cloudflare, DNS is configured automatically.
4. If not, add the CNAME record shown to your domain registrar's DNS settings.
5. Cloudflare provisions a free SSL certificate automatically. ✅

---

## 📁 Project Structure

```
resume/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & CSS resets
│   │   ├── layout.tsx        # Root layout: font, theme, navbar
│   │   └── page.tsx          # Main page — assembles all sections
│   ├── components/
│   │   ├── Hero.tsx          # Hero section (name, title, photo, spotlight)
│   │   ├── Navbar.tsx        # Floating burger nav with scroll behavior
│   │   ├── Projects.tsx      # Project cards with tech tags
│   │   ├── Skills.tsx        # Bento-grid technical skills
│   │   ├── Experience.tsx    # Work history timeline
│   │   ├── Credentials.tsx   # Certifications + Education
│   │   ├── Organizations.tsx # Fellowships / memberships
│   │   ├── Interests.tsx     # Creative portfolio links
│   │   ├── Contact.tsx       # Contact form + social links
│   │   ├── ThemeProvider.tsx # next-themes wrapper
│   │   ├── ThemeToggle.tsx   # Dark/light mode toggle button
│   │   └── ui/
│   │       ├── BentoGrid.tsx # Bento grid layout component
│   │       └── Spotlight.tsx # Animated glow/spotlight effect
│   └── lib/
│       └── utils.ts          # cn() class merging utility
├── public/
│   ├── profile.jpg           # Your profile photo
│   └── logos/                # Certification logo images
├── docs/
│   └── skills.md             # Full tech stack & design pattern reference
├── next.config.mjs           # Next.js config (static export mode)
├── tailwind.config.js        # Tailwind theme + custom animations
└── package.json
```

---

## 🙋 Common Questions

**Q: Do I need to know React to edit this?**
> For content changes (text, links, names), no — just edit the data arrays in each `.tsx` file. For layout changes, basic React/JSX knowledge helps.

**Q: Is this free to host?**
> Yes. Cloudflare Pages free tier includes unlimited bandwidth, a global CDN, HTTPS, and up to 500 builds/month.

**Q: How do I update the site after deploying?**
> With Option A (GitHub), just push your changes — Cloudflare redeploys automatically. With Option B, re-run `npm run build` and upload the new `/out` folder.

**Q: Can I use my own domain?**
> Yes — any domain. If it's on Cloudflare DNS it's instant. If not, just add a CNAME record.

**Q: The contact form isn't working. Why?**
> Make sure you replaced the `access_key` in `Contact.tsx` with your own key from [web3forms.com](https://web3forms.com). The default key in the repo belongs to the original author.

---

## 📄 Documentation

- **[docs/skills.md](docs/skills.md)** — Full tech stack breakdown, design patterns, and step-by-step recreation guide

---

## 📝 License

Feel free to fork, clone, and adapt this for your own portfolio. If you build something with it, a star ⭐ on the repo is always appreciated!

---

*Built by [Waqar Azeem](https://induslevel.com) · Systems Architect · [LinkedIn](https://www.linkedin.com/in/wazeem-sysadmin)*
