# Jayson Emeterio — Developer Portfolio

Single-page portfolio for Jayson Soriano Emeterio, Full Stack Developer.

Built with the Next.js 16 App Router, strict TypeScript, Tailwind CSS v4 and Lucide React. The page is fully static (prerendered at build time).

## Requirements

- Node.js 20.9 or newer (`engines` in `package.json`). Node 22 or 24 LTS is recommended for deployment.
- npm

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | Generate route types, then `tsc --noEmit` |
| `npm run cv:pdf` | Render `cv/Jayson-Emeterio-CV.html` to a PDF with a local Chrome/Edge |

## Project structure

```
src/app/layout.tsx      Root layout, metadata, fonts, skip link
src/app/page.tsx        Composes the page sections
src/app/globals.css     Tailwind v4 theme tokens (charcoal/emerald), focus and reduced-motion styles
src/app/icon.svg        "JE" favicon
src/components/         Header, mobile nav, sections, footer, shared Section/ButtonLink
src/data/portfolio.ts   All typed content: profile, skills, projects, experience, education, training
cv/                     Private CV source (HTML) and generated PDF. Both are git-ignored and NOT served
scripts/build-cv.mjs    Local headless-browser PDF renderer for the CV
```

## Editing content

All content lives in `src/data/portfolio.ts`. The audited CV is the source of truth: keep dates, qualifications, skills and accomplishments consistent with it, and don't add metrics, certifications or profile URLs that it doesn't contain.

- A skill group's optional `note` renders as a badge next to its title (for example, "Project experience").
- A project's optional `disclosure` renders as a short privacy note on its card, and `href` makes the title an external link. Leave `href` out to show the card without a link.

### GitHub and LinkedIn

Both links are set to `href: null` in `profile.links`, so they're hidden. Once the real URLs are verified, set `href` and they appear in the Contact section automatically.

### Site URL

Set `profile.siteUrl` to the production URL after deployment. That enables `metadataBase` and the canonical link.

## Publishing the CV

The CV download is **disabled** (`profile.cv.published: false`). No CV is served from `/public`.

1. Edit `cv/Jayson-Emeterio-CV.html` if needed. It mirrors the audited CV with the mobile number removed.
2. Run `npm run cv:pdf`. This writes `cv/Jayson-Emeterio-CV.pdf` locally. Set `CHROME_PATH` if Chrome/Edge isn't found.
3. Review the PDF.
4. **Only after approval:** copy it to `public/Jayson-Emeterio-CV.pdf` and set `profile.cv.published` to `true`. "Download CV" buttons then appear in the Hero and Contact sections.

## Verification checklist

```bash
npm run typecheck
npm run lint
npm run build
npm run start      # then check the page in a browser
```

Manual checks: mobile (375px), tablet (768px) and desktop (1440px) layouts, keyboard navigation (skip link, header links, mobile menu with Escape), visible focus rings, `prefers-reduced-motion`, and that no unpublished links or files are exposed.

## Deployment (Vercel)

1. Push the repository to GitHub (keep `cv/*.html` and `cv/*.pdf` out of the repo; both are git-ignored).
2. Import the project in Vercel. The framework preset is detected automatically, and no environment variables are required.
3. After the first deployment, set `profile.siteUrl` and redeploy.
