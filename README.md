# Portfolio — Your Personal Portfolio in Minutes

A beautiful, customizable developer portfolio. No coding required after you fork it.

---

## 3-step setup

### Step 1 — Fork this repo

Click **Fork** in the top-right corner of this page. GitHub creates your own copy instantly.

### Step 2 — Edit your details

Open the file **`portfolio.config.json`** in your forked repo (click it in the file list, then click the pencil ✏️ icon to edit).

Fill in your own details — name, title, skills, experience, projects, etc. Save the file by clicking **Commit changes**.

> No coding knowledge needed — it's just a text file in a simple format.

**Color presets** — Change `"colorPreset"` to one of these values to pick your accent color:

| Value | Look |
|---|---|
| `"indigo"` | Electric violet (default) |
| `"emerald"` | Forest green |
| `"rose"` | Rose / crimson |
| `"amber"` | Warm gold |
| `"ocean"` | Deep teal |
| `"slate"` | Minimal grey |

**Profile photo** — upload a photo anywhere (GitHub, Imgur, etc.) and paste the URL into `"avatarUrl"`. Leave it empty to show your initials instead.

**Resume PDF** — Upload your resume PDF to the `public/` folder in the repo, name it `resume.pdf`, and set `"resumeUrl": "/resume.pdf"`.

### Step 3 — Enable GitHub Pages

1. Go to your forked repo → **Settings** → **Pages**
2. Under *Source*, select **GitHub Actions**
3. Click **Save**

That's it. GitHub will automatically build and publish your portfolio. A link to your live site appears on the Settings → Pages screen, usually at:

```
https://YOUR-USERNAME.github.io/portfolio/
```

Every time you edit `portfolio.config.json` and save, your site rebuilds automatically within about 60 seconds.

---

## Optional: Custom domain

1. Go to **Settings → Pages → Custom domain** and enter your domain (e.g. `alexrivera.dev`)
2. Add a `CNAME` DNS record at your domain registrar pointing to `YOUR-USERNAME.github.io`
3. In `vite.config.ts`, change `BASE_PATH` in the workflow or set base to `"/"` if you are using a root domain

---

## What's included

- Single JSON config file — no code to touch
- 6 built-in color themes + custom HSL option
- Dark / light mode (respects your OS preference)
- Smooth scrolling + parallax hero
- Animated section reveals
- Active nav indicator — highlights the current section as you scroll
- Custom cursor
- Resume download + Web Share
- Print / PDF mode — Ctrl+P produces a clean document
- Fully responsive (mobile, tablet, desktop)
- Zero backend — static files only

---

## For developers

If you want to run this locally or make deeper customizations:

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
pnpm install
cd artifacts/portfolio
pnpm dev
```

The React source is in `artifacts/portfolio/src/`. All styling uses Tailwind CSS v4. Animations use Framer Motion.

---

## License

MIT — free to use, modify, and distribute.
