# QA notes

Date: 2026-09-09 (polish pass)

## Desktop (~1440)

- Header: copper hairline, wordmark, nav, phone, estimate
- Hero headline + three actions sit above the preview pill; no crop of CTAs
- Trust strip four columns
- Featured PEX/copper cards full-bleed; secondary services 4-up
- Work gallery: first row aligned (taller frames); no unlabeled interiors
- Footer logo inverted on ink; speculative-disclaimer present
- No horizontal overflow at 1440
- Console: clean on `/`, `/work`, `/contact`, `/about`, `/outreach`

## Mobile (~390)

- Logo + call + menu; tap targets ≥ 44px
- Hero CTAs wrap; Call is the second action
- Service cards single column; work gallery single column, readable captions
- Estimate form usable; demo-only copy visible
- No horizontal overflow
- Console: clean

## Other

- `/outreach` unlinked, `noindex`, not in nav/footer, Disallow in robots.txt
- `npx tsc --noEmit` pass
- Demo form does not POST to Simpex (localStorage + labeled success)
- Grok “Created with Grok / Remix” pill is platform-injected and must stay in the live preview
