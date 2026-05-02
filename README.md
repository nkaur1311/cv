# Portfolio — Fork & Customize

A highly customizable, single-page developer portfolio built with **React + Vite**. Designed to be forked, personalized in minutes, and deployed to **GitHub Pages** for free.

---

## Quick Start

### 1. Fork this repo on GitHub

Click **Fork** in the top-right corner of the repository page. This creates your own copy.

### 2. Clone it locally

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio/artifacts/portfolio
```

### 3. Install dependencies

```bash
pnpm install
# or: npm install
```

### 4. Personalize your content

Open **`src/portfolio.config.ts`** — this is the **only file you need to edit** for full customization:

```ts
export const config = {
  name: "Your Name",
  title: "Your Job Title",
  tagline: "Your personal tagline here.",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",         // drop your PDF in /public
  resumeFileName: "Your_Name_Resume.pdf",

  social: {
    github: "https://github.com/you",
    linkedin: "https://linkedin.com/in/you",
    twitter: "",                    // leave empty to hide
  },

  colorPreset: "indigo",            // see color options below
  defaultTheme: "system",           // "system" | "light" | "dark"

  // ... skills, experience, projects, education
};
```

### 5. Add your resume PDF

Place your resume at `artifacts/portfolio/public/resume.pdf`. It will be available at `/resume.pdf` in the deployed site.

### 6. Run locally

```bash
pnpm dev
# open http://localhost:5173
```

---

## Color Presets

Change `colorPreset` in `portfolio.config.ts` to switch the entire accent system:

| Preset | Accent | Vibe |
|---|---|---|
| `"indigo"` | Electric violet | Techy, bold |
| `"emerald"` | Forest green | Grounded, natural |
| `"rose"` | Crimson rose | Creative, editorial |
| `"amber"` | Warm gold | Warm, approachable |
| `"ocean"` | Deep teal | Calm, precise |
| `"slate"` | Monochrome | Minimal, understated |
| `"custom"` | Your own HSL values | Fully yours |

For `"custom"`, fill in the `customColors` block in the config with your own HSL values.

---

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended)

1. In your repo, go to **Settings → Pages → Source** and select **GitHub Actions**.

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm --filter @workspace/portfolio run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: artifacts/portfolio/dist/public
      - uses: actions/deploy-pages@v4
        id: deployment
```

3. Push to `main` — GitHub Actions will build and deploy automatically.

### Option B — Manual deploy

```bash
# Build
pnpm --filter @workspace/portfolio run build

# The output is in: artifacts/portfolio/dist/public/
# Deploy that folder to GitHub Pages, Netlify, Vercel, or any static host.
```

### Setting the base path (if not at root)

If your GitHub Pages URL is `https://yourusername.github.io/portfolio/`, open `artifacts/portfolio/vite.config.ts` and set:

```ts
base: "/portfolio/",
```

---

## Project Structure

```
artifacts/portfolio/
├── public/                  # Static files (put resume.pdf here)
├── src/
│   ├── portfolio.config.ts  ← EDIT THIS to personalize everything
│   ├── lib/
│   │   └── themes.ts        ← Color preset definitions
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── CustomCursor.tsx
│   │       └── SmoothScroll.tsx
│   └── pages/
│       └── portfolio.tsx
└── vite.config.ts
```

---

## Features

- Single config file — edit once, everything updates
- 6 built-in color presets + custom HSL support
- Dark / light mode with system preference detection
- Apple-style smooth scrolling (Lenis)
- Parallax hero with scroll-driven fade
- Scroll-triggered section animations (Framer Motion)
- Custom cursor with hover expand effect
- Resume download + Web Share API
- Print / PDF mode — Ctrl+P renders clean document output
- Fully responsive (mobile, tablet, desktop)
- Zero backend — pure static site

---

## License

MIT — free to use, fork, and modify.
