# QA notes

Date: 2026-09-09

## Desktop (~1440)

- Header, logo, phone, primary CTA visible
- Hero headline + three actions wrap cleanly
- Trust strip four columns
- Service cards and work gallery images load
- Footer logo inverted on ink; speculative-disclaimer present
- No horizontal overflow at 1440
- Console: clean on `/`, `/work`, `/contact`

## Mobile (~390)

- Logo + call + menu; tap targets ≥ 44px
- Hero CTAs stack; no overflow
- Service cards single column
- Estimate form usable
- Console: clean

## Other

- `/outreach` unlinked, `noindex`, not in nav/footer
- 404s on `/outreach` only until capture files landed (now present)
- `npm run typecheck` pass
- `npm run build` pass (nitro vercel)
- Dev smoke: desktop + mobile, no console/page errors
- Demo form does not POST to Simpex

## Known chrome

- Grok “Created with Grok / Remix” pill is platform-injected and must stay
