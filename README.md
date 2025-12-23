# 9TO5 Consultancy — Next.js + Tailwind Skeleton

This repository contains a minimal Next.js (App Router) skeleton configured with Tailwind CSS, and a `HeroSection.jsx` component (placed at the project root). The Hero component implements a luxury bento/masonry hero for the marketing landing page.

Quick start (bash / WSL / Git Bash on Windows):

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in the browser
# http://localhost:3000
```

Notes
- The project uses Tailwind CSS and the `app/` router. `HeroSection.jsx` is imported by `app/page.jsx`.
- Replace the placeholder images in `public/images/` with your final assets. Paths used by the component:
  - `/images/hero-image.jpg`
  - `/images/interior.jpg`
  - `/images/event.jpg`
- If you use remote image hosts, update `next.config.js` accordingly.

If you want, I can run `npm install` and `npm run dev` here to verify—but that will download packages. Tell me if you want me to run them now.
