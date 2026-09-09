# AGENTS.md — Simpex Repipe & Plumbing demo

Router for future agents. **Do not dump research here.**

This repository is a **speculative Novenworks website redesign**. The prospect is not a Novenworks client. Business marks and photography remain property of their owners.

## Canonical docs

| Doc | What it owns |
|---|---|
| [README.md](./README.md) | Disclosure, local setup, stack |
| [CHANGELOG.md](./CHANGELOG.md) | Decisions, fact changes, process |
| [docs/RESEARCH.md](./docs/RESEARCH.md) | Verified facts, conflicts, agency check |
| [docs/ASSET-INVENTORY.md](./docs/ASSET-INVENTORY.md) | First-party assets |
| [docs/ASSET-PLAN.md](./docs/ASSET-PLAN.md) | Asset → section map |
| [docs/QA.md](./docs/QA.md) | Responsive / console QA |
| [docs/OUTREACH.md](./docs/OUTREACH.md) | Pitch, email, what not to say |
| [docs/CAPTURE.md](./docs/CAPTURE.md) | Before/after + scroll captures |

## Hard rules

- Fact integrity: current first-party > official CSLB > reputable third-party > omit. Never invent ratings, ROI, warranty terms, or staff size.
- Real assets only for work-proof. No Depositphotos. No unlabeled interior “portfolio” as completed jobs.
- `/outreach` is operator-only: unlinked, `noindex`, not in nav/footer/sitemap.
- Estimate form is a **demo** and must say so.
- Keep the existing Simpex wordmark. This is a redesign, not a rebrand.

## Runtime (this sandbox)

- App must listen on `0.0.0.0:8080` via `npm run dev` / `/workspace/startup.sh`.
- Stack is TanStack Start (not Next.js) because of the preview + Vite/nitro contract. See CHANGELOG.
- Do not remove `PreviewHostBridge`, `grokPwaPlugin`, or `public/__grok/`.
- Auth/db remain off.

Sandbox platform contract (preview, build gates): `.grok/references/sandbox-agents.md`.
