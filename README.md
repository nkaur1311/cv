# GitVitae

A free, open-source portfolio template for developers and job seekers. Edit one YAML file, push to GitHub, get a live portfolio — no account needed, no hosting fees, no framework knowledge required.

**Live demo:** [gitvitae.github.io](https://gitvitae.github.io)

---

## How it works

```
github.com/gitvitae/gitvitae.github.io
         ↓  Use this template
github.com/YOU/my-portfolio
         ↓  Edit portfolio.config.yaml
         ↓  git push
YOU.github.io/my-portfolio   ← live in ~2 minutes
```

---

## Quick start (3 steps)

### 1. Create your repo from this template

Click the green **"Use this template"** button at the top of this page → **"Create a new repository"**.

> **Naming tip:** Name it `yourusername.github.io` and your portfolio lives at the root (`yourusername.github.io`). Name it anything else (e.g. `portfolio`) and it lives at `yourusername.github.io/portfolio`.

### 2. Enable GitHub Pages

In your new repo: **Settings → Pages → Source → GitHub Actions**. Save.

### 3. Edit `portfolio.config.yaml` and push

This is the **only file you need to touch.** Every field has a comment. Edit it on GitHub directly (click the pencil icon), commit, and your site builds automatically.

```yaml
name: "Your Name"
title: "Software Engineer"
email: "you@example.com"
openToWork: true        # shows the "Open to Opportunities" banner

about: |
  Write 2-3 sentences about yourself here.
  The pipe symbol lets you write across multiple lines.

social:
  github: "https://github.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
```

Your live URL appears in **Settings → Pages** once the first deploy finishes (~2 min).

---

## What you get

- Single YAML config — no code to touch
- All sections: About, Skills, Experience, Projects, Education, Certifications, Testimonials, Contact
- Dark / light / system theme + 6 color presets (`indigo`, `emerald`, `rose`, `amber`, `sky`, `violet`)
- Resume download in PDF (print), plain text, and JSON Resume formats
- Schema.org structured data markup (good for SEO and AI tools)
- Share modal: QR code, social links, email signature snippet, embeddable card
- "Open to work" banner (flip `openToWork: true`)
- Smooth scroll, animated section reveals, custom cursor
- Fully responsive — mobile, tablet, desktop
- Zero backend — static files, free forever on GitHub Pages

---

## Config reference

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Your full name |
| `title` | Yes | Job title or headline |
| `email` | Yes | Contact email |
| `tagline` | No | One-line summary shown on the hero |
| `location` | No | City, Country |
| `avatarUrl` | No | URL to your photo — empty shows initials |
| `openToWork` | No | `true` shows the "Open to Opportunities" banner |
| `theme.defaultTheme` | No | `light`, `dark`, or `system` |
| `theme.colorPreset` | No | `indigo` `emerald` `rose` `amber` `sky` `violet` |
| `social.*` | No | Any key renders as a link icon (github, linkedin, twitter, …) |
| `about` | Yes | 2–5 sentence bio (use `\|` for multi-line) |
| `skills` | No | List of categories, each with a list of skill names |
| `experience` | No | Work history entries |
| `projects` | No | Portfolio projects (`featured: true` pins to top) |
| `education` | No | Degrees or courses |
| `certifications` | No | Certs with optional credential URL |
| `testimonials` | No | Quotes from colleagues or managers |

See `portfolio.config.yaml` for a fully-commented example of every field and every option.

---

## Adding a profile photo

Set `avatarUrl` to any public image URL:

```yaml
avatarUrl: "https://github.com/yourusername.png"
```

GitHub profile pictures work perfectly — just swap in your username.

---

## Custom domain

1. Add a `CNAME` file to the repo root containing your domain (e.g. `jane.dev`)
2. Add a CNAME DNS record pointing to `yourusername.github.io`
3. In **Settings → Pages**, enter your custom domain

---

## Validate before you push (optional)

If you have Node.js installed locally:

```bash
git clone https://github.com/you/your-portfolio
cd your-portfolio
pnpm install
pnpm check-config   # catches typos and missing fields
pnpm dev            # preview at http://localhost:3000
```

---

## Getting updates

**Stay notified:** click **Watch → Custom → Releases only** on the [GitVitae repo](https://github.com/gitvitae/gitvitae.github.io) and GitHub will email you whenever a new version ships.

When you're ready to pull an update into your portfolio, run:

```bash
pnpm upgrade-template
```

That's it. The script adds GitVitae as an upstream remote (once), fetches the latest code, and merges it — without touching your `portfolio.config.yaml`. Follow it with `pnpm install && git push` to deploy the update.

Conflicts are extremely rare. They only occur if GitVitae renames a field in `portfolio.config.yaml` that you've already filled in. The script will tell you exactly what to do if that happens.

---

## FAQ

**Do I need to know React or JavaScript?** No. You only edit `portfolio.config.yaml`.

**Is this free?** Yes. GitHub Pages is free for public repos. GitVitae is MIT licensed.

**Can I make my repo private?** GitHub Pages requires a paid plan for private repos.

---

## Built with

React · Vite · TypeScript · Tailwind CSS · Framer Motion

---

*Built with [GitVitae](https://github.com/gitvitae/gitvitae.github.io) — MIT License*
