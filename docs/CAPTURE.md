# Capture / deliverables

Stored at `public/outreach/` and previewed on `/outreach`.

| File | Viewport | Notes |
|---|---|---|
| `before-original-desktop.png` | ~1440 full page (1456×4349) | Live `https://simpexrepipe.com/` 2026-09-09. Not a recreation. |
| `after-desktop.png` | 1440 × 6310 | Demo homepage full page. Regenerated 2026-09-27 (last in `745bb65`). |
| `after-mobile.png` | 390 CSS px (780 physical @2x) × 23298 | Demo homepage full page. Regenerated 2026-09-27 (last in `745bb65`). |
| `after-scroll.mp4` | 1440×900, H.264, 12 fps, 75 frames, ~6.25s | Scrolls hero → services → work → CTA. Regenerated 2026-09-27 in `c23db53`; blank lead-in before page load trimmed. |
| `after-scroll.gif` | 720×450, 50 frames | Same recording, palettized. Regenerated 2026-09-27 in `c23db53`. |

Validation: PNGs open and are non-blank; GIF has 50 frames; MP4 plays (~6.25s); `/outreach` serves all five.

Regenerate with `scripts/capture-outreach.mjs` against a local production build (adjust `OUT`, the port, and the Chromium executable to the local environment; the BEFORE capture only needs rerunning if the original site is re-captured).
