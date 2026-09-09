# Simpex Repipe & Plumbing — speculative redesign

This is a **speculative website concept** created by [Novenworks](https://www.novenworks.com). **Simpex Repipe & Plumbing is not a Novenworks client.** The live business site remains [simpexrepipe.com](https://simpexrepipe.com/).

Simpex names, wordmark, and photography remain property of their owners. They are used here only to demonstrate a clearer presentation of the existing business.

## Stack

TanStack Start · React 19 · TypeScript · Tailwind CSS v4 · Vite · shadcn/Radix primitives.

(The originating brief asked for Next.js App Router. This build uses TanStack Start so it can run in the App Builder preview and deploy on the same Vite/nitro Vercel path.)

## Scripts

```bash
npm install
npm run dev          # http://0.0.0.0:8080
npm run build
npm run typecheck
```

## Routes

- `/` homepage
- `/services`, `/services/pex-repipe`, `/services/copper-repipe`, `/services/slab-leak`, `/services/leak-detection`, `/services/sewer-camera`, `/services/general-plumbing`
- `/work`, `/about`, `/testimonials`, `/contact`
- `/outreach` — operator-only, not linked from the public UI

## Contact used on this demo

Copied from the live first-party site:

- Phone: [1-866-4-SIMPEX](tel:+18664746739)
- Email: [info@simpexrepipe.com](mailto:info@simpexrepipe.com)
- CSLB #1031884

The estimate form **does not send leads to Simpex**. It is labeled as a demo.
