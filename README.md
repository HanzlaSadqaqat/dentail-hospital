# Delaware Dental Solutions — Website (Next.js + TypeScript)

A modern redesign of dedentalsolutions.com, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build for production
```bash
npm run build
npm run start
```

## Structure
- `app/` — all pages (App Router). Service detail pages are generated from data via `app/services/[slug]`.
- `components/` — Header, Footer, reusable UI, icons, forms, scroll-reveal.
- `lib/data.ts` — **single source of truth** for practice info, doctors, services, technology, hours. Edit content here.

## Pages
Home · About · Dr. Weidong Yang · Dr. Emma Yang · Meet Our Team · Services (overview + 17 detail pages) · Technology · Office Tour · Before/After · Reviews · New Patients · Dental Savings Plan · Blog · Contact · Appointment

## Notes
- Images currently load from the existing dedentalsolutions.com URLs so the design previews with real photos. For production, download them into `/public` and update paths in `lib/data.ts`.
- The appointment/contact form is a front-end demo (no backend). Connect it to your booking system, an email handler (e.g. Resend/Formspree), or an AI front-desk webhook to go live.
- Replace placeholder review text and blog posts with real, verified content before launch.
