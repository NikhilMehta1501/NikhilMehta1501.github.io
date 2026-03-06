# SEO implementation plan for static portfolio

**Production URL:** https://nikhilmehta1501.github.io/

## Step 0: Deploy with GitHub Pages (user site)

Do this first so you have a clean production URL before adding SEO.

1. **Create the GitHub repo**
   - On GitHub: New repository.
   - Repository name must be **exactly** `NikhilMehta1501.github.io`.
   - Public repo; you can leave it empty (no README, .gitignore, or license for now).

2. **Put the static site in the repo**
   - Copy everything from your local `static-site/` folder into the **root** of the repo (so the repo root contains `index.html`, `styles.css`, `main.js`, `assets/`, etc.). Commit and push to `main`.
   - The site must be at the **root** of the repo (no `static-site` subfolder) so that the user site serves from the repo root.

3. **Enable GitHub Pages**
   - In the repo: **Settings → Pages**.
   - Under **Source**, choose **Deploy from a branch**.
   - Branch: **main** (or default), folder: **/ (root)**. Save.
   - Wait a minute or two. The site will be at https://nikhilmehta1501.github.io

4. **Root README**
   - This README (at the repo root next to `index.html`) is the full guide: Step 0, SEO sections 1–7, Setup checklist (8), and File summary. The base URL `https://nikhilmehta1501.github.io/` is used everywhere.

---

## Current state (after implementation)

- Single-page site: `index.html`, `styles.css`, `main.js`, `assets/`.
- Head includes: description, canonical, theme-color, Open Graph, Twitter Card, favicon link, JSON-LD Person schema. Root has `sitemap.xml` and `robots.txt`.
- **Content updates:** Hero intro first line is "Hi there," only. Projects section: Home Server (Raspberry Pi) and Arduino Nano Clock have repo links (pi-home-server, arduino-nano-clock).

## 1. Basic meta tags (in `index.html`)

- **Description** – `meta name="description" content="..."`
  - Short summary (e.g. 1–2 sentences: software engineer, portfolio, tech stack). Keep under ~155 characters for search snippets.
- **Canonical URL** – `link rel="canonical" href="https://nikhilmehta1501.github.io/"`
- **Theme color** – `meta name="theme-color" content="#000000"` for browser UI.
- **Robots** (optional) – Only if you need to restrict indexing: `meta name="robots" content="index, follow"`.

## 2. Open Graph (Facebook, LinkedIn, etc.)

- `og:title` – Same as or slight variant of `<title>` (e.g. "Nikhil Mehta – Software Engineer").
- `og:description` – Same as `meta name="description"` (or a shorter variant).
- `og:url` – https://nikhilmehta1501.github.io/
- `og:image` – https://nikhilmehta1501.github.io/og-image.png (image 1200x630px recommended).
- `og:type` – `website`.
- `og:site_name` – Your site name (e.g. "Nikhil Mehta").
- `og:locale` – `en`.

## 3. Twitter Card

- `twitter:card` – `summary_large_image`.
- `twitter:title`, `twitter:description`, `twitter:image` – Same as Open Graph.
- `twitter:site` (optional) – Your Twitter handle if you have one.

## 4. Favicon and app icons

- Use the same favicon as the rest of the project: copy `src/app/favicon.ico` from the main project to the repo root (or into `static-site/` during development). In `<head>`: `link rel="icon" href="favicon.ico" sizes="any"` (or `type="image/x-icon"`).
- Optional: add a 180x180 PNG for Apple touch icon: `link rel="apple-touch-icon" href="apple-touch-icon.png"`.

## 5. Structured data (JSON-LD)

- **Person** schema: `name`, `url` (canonical), `jobTitle`, `description`, `sameAs` (GitHub, LinkedIn).
- One `<script type="application/ld+json">` in `<head>` or before `</body>`.
- Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) or Schema.org validator.

## 6. Sitemap

- `sitemap.xml` at repo root with one `<url>`: `<loc>` https://nikhilmehta1501.github.io/ , `<lastmod>`, `<changefreq>monthly</changefreq>`, `<priority>1.0</priority>`.
- Live at https://nikhilmehta1501.github.io/sitemap.xml

## 7. robots.txt

- At repo root: `User-agent: *`, `Allow: /`, `Sitemap: https://nikhilmehta1501.github.io/sitemap.xml`
- Live at https://nikhilmehta1501.github.io/robots.txt

## 8. Setup checklist (your steps)

1. **Production URL** – Use https://nikhilmehta1501.github.io/ everywhere (canonical, OG, Twitter, sitemap, robots).
2. **Create or choose OG/Twitter image** – One image, 1200x630px, saved as `og-image.png` in the repo root (photo, logo, or branded graphic).
3. **Favicon** – Copy `src/app/favicon.ico` to the repo root. Add `link rel="icon" href="favicon.ico"` in `index.html` as in section 4.
4. **Deploy** – Ensure the repo `NikhilMehta1501.github.io` has at its root: `index.html`, `styles.css`, `main.js`, `assets/`, `sitemap.xml`, `robots.txt`, `og-image.png`, `favicon.ico`, `README.md`. Then:
   - https://nikhilmehta1501.github.io/ serves `index.html`
   - https://nikhilmehta1501.github.io/sitemap.xml serves `sitemap.xml`
   - https://nikhilmehta1501.github.io/robots.txt serves `robots.txt`
   - https://nikhilmehta1501.github.io/og-image.png is reachable (for OG/Twitter).
5. **Validate**
   - [Google Rich Results Test](https://search.google.com/test/rich-results) for JSON-LD.
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) for OG.
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator) for Twitter cards.
   - Open the live URL and check `<head>` in DevTools for meta and JSON-LD.

## 9. Optional later improvements

- **Preload critical resources** – Optionally `preload` the main stylesheet or above-the-fold assets.
- **Semantic HTML** – Keep one `h1`, then `h2` for sections.
- **More pages** – Add entries to `sitemap.xml` and give each page its own `<title>`, meta description, canonical, and OG tags.
- **Analytics** – Load async (e.g. Google Analytics) so it does not block render.

## File summary

| File | Action |
|------|--------|
| **README.md** (repo root) | This file. Full guide: Step 0, SEO sections 1–7, Setup checklist (8), File summary. |
| index.html | Meta description, canonical https://nikhilmehta1501.github.io/, theme-color; OG and Twitter meta tags; favicon link; JSON-LD Person script. |
| sitemap.xml | One URL: https://nikhilmehta1501.github.io/ |
| robots.txt | `Allow: /` and `Sitemap: https://nikhilmehta1501.github.io/sitemap.xml` |
| favicon.ico | Copy from `src/app/favicon.ico` to repo root. |
| og-image.png | Create (1200x630) at repo root. |
| apple-touch-icon.png | Optional, at repo root. |

All of the above files live at the root of the `NikhilMehta1501.github.io` repo (same level as `index.html`).
