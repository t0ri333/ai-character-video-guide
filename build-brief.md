
# Developer Brief – Static Site for "AI Character Video Creation Guide"

## 1. Project Goal
Create a **blazing‑fast, responsive, no‑frills static website** that hosts the content in `ai_character_video_guide.md`.  
Audience: a non‑tech creative who needs clean, readable information.  
Language: **English only** (we’ll ship Ukrainian inside the Markdown for now; no i18n framework needed).

## 2. Core Requirements
| Category | Requirement |
|----------|-------------|
| **Performance** | 100/100 Lighthouse scores (mobile & desktop). Fully static output (pre‑rendered HTML) – no client‑side JS required except for optional smooth scrolling. |
| **Design** | Minimal, content‑first. Single readable column, max‑width ~720 px, large line‑height, system fonts (`-apple-system`, `Segoe UI`, `Roboto`). Accessible color contrast (WCAG AA). |
| **Responsiveness** | Mobile‑first CSS; content scales down to 320 px wide without horizontal scrolling. |
| **Navigation** | Fixed header with site title + anchor links to each main section (Parts 1–5). Auto‑generated TOC in sidebar or top nav. |
| **MD Rendering** | Use GitHub‑flavored Markdown. Highlight code blocks, tables, links. |
| **SEO** | Proper `meta` tags, Open Graph preview, sitemap.xml. |
| **Hosting** | Deployable to GitHub Pages, Netlify, or Vercel with a single command. |
| **Build Time** | Under 5 seconds on a typical laptop. |
| **Maintenance** | Content updates by editing `.md` only; no touching templates. |

## 3. Recommended Tech Stack
- **Astro** (`npm create astro@latest`) – ships zero JS by default, seamlessly converts Markdown → static HTML, great Lighthouse scores.  
- **Tailwind CSS** for tiny utility classes (optional: keep styles in `<style>` if you prefer plain CSS).  
- **@astrojs/mdx** plugin for Markdown rendering (or built‑in `.md` support).  
- Alternative: **Hugo** (if Go is preferred) – fast, good Markdown defaults.

## 4. High‑Level Build Steps
1. `npm create astro@latest` → template: _minimal_.  
2. Add `ai_character_video_guide.md` to `/src/content/`.  
3. Create a layout `/src/layouts/Base.astro` with semantic HTML, header, main, footer.  
4. In `/src/pages/index.astro` import the Markdown and render:  
   ```astro
   ---
   import Guide from '../content/ai_character_video_guide.md';
   ---
   <Layout title="AI Character Video Creation Guide">
     <Guide />
   </Layout>
   ```  
5. Add automatic Table‑of‑Contents with `rehype-autolink-headings` + `rehype-slug` OR Astro’s built‑in `Markdown.headings`.  
6. Configure Tailwind (if used) with purge on production.  
7. `npm run build` ⇒ static files in `/dist`.  
8. Set up GitHub Actions (or Netlify/Vercel) for continuous deployment on push.

## 5. Folder Structure (Astro example)
```
my‑site/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ content/
│  │  └─ ai_character_video_guide.md
│  ├─ layouts/
│  │  └─ Base.astro
│  ├─ pages/
│  │  └─ index.astro
│  └─ styles/
│     └─ global.css
├─ astro.config.mjs
├─ package.json
└─ tailwind.config.cjs
```

## 6. Performance & SEO Tips
- Inline critical CSS in `<head>`; load full stylesheet with `media="print"` trick or simply keep CSS under 15 kB.  
- Use semantic HTML (`<article>`, `<section>`, `<nav>`).  
- Add `rel="noopener"` on external links, target `_blank`.  
- Preload custom fonts only if non‑system fonts become necessary (ideally skip).  
- Generate `og:image` via Astro assets pipeline for social sharing.

## 7. Deployment
### GitHub Pages  
```bash
npm run build
npx astro deploy --site https://<user>.github.io/<repo>
```  
### Netlify  
- `netlify init`  
- Build command: `npm run build`  
- Publish directory: `dist`

### Vercel  
- `vercel` (auto‑detects Astro)  
- Or connect repo via dashboard.

## 8. Future Enhancements (Optional)
- Dark‑mode toggle (prefers‑color‑scheme).  
- Search (client‑side lunr.js, loaded on demand).  
- RSS feed for new guide revisions.

---

_Build with care; keep dependencies minimal, and ship static._  
