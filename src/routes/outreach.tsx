import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach brief — Simpex (operator only)" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: OutreachPage,
});

const captures = [
  {
    file: "before-original-desktop.png",
    label: "BEFORE — live original, desktop",
  },
  { file: "after-desktop.png", label: "AFTER — demo desktop ~1440px" },
  { file: "after-mobile.png", label: "AFTER — demo mobile ~390px" },
  { file: "after-scroll.gif", label: "AFTER — scrolling GIF" },
  { file: "after-scroll.mp4", label: "AFTER — scrolling MP4" },
] as const;

function OutreachPage() {
  return (
    <div className="min-h-dvh bg-zinc-950 px-4 py-10 text-zinc-100 md:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.2em] uppercase text-amber-500">
          Operator only · unlinked · noindex
        </p>
        <h1 className="mt-2 font-sans text-3xl font-semibold">
          Simpex Repipe & Plumbing — outreach brief
        </h1>
        <p className="mt-3 text-zinc-400">
          Speculative Novenworks concept. The prospect is not a client. Do not
          imply otherwise.
        </p>

        <section className="mt-10 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">Snapshot</h2>
          <ul className="list-disc space-y-1 pl-5 text-zinc-300">
            <li>
              Business: Simpex Repipe & Plumbing (legal: SIMPEX REPIPE INC)
            </li>
            <li>
              Original:{" "}
              <a className="underline" href="https://simpexrepipe.com/">
                https://simpexrepipe.com/
              </a>
            </li>
            <li>
              Demo:{" "}
              <a className="underline" href="https://simpex-repipe-and-plumbing-demo.vercel.app">
                https://simpex-repipe-and-plumbing-demo.vercel.app
              </a>
            </li>
            <li>
              Phone:{" "}
              <a className="underline" href="tel:+18664746739">
                1-866-4-SIMPEX
              </a>{" "}
              · Email: info@simpexrepipe.com
            </li>
            <li>CSLB #1031884 · C36 Plumbing · current and active through 10/31/2027</li>
            <li>HQ: 18021 Sky Park Circle, Suite K, Irvine, CA 92614</li>
            <li>
              GitHub:{" "}
              <a className="underline" href="https://github.com/Novenworks/Simpex-Repipe-and-Plumbing-Demo">
                Novenworks/Simpex-Repipe-and-Plumbing-Demo
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Agency sanity check</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            No named agency, designer, or “site by” credit in the footer or
            page source as of 2026-09-09. Stack is WordPress + Ohio theme +
            WPBakery + Elementor + Slider Revolution + WooCommerce (empty cart
            in UZS) + NitroPack. Footer still reads Copyright © 2020. Record:
            <strong> no visible agency of record</strong>. Do not say “they
            have no agency” as a fact — only that none is credited.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">
            Original-site observations (real)
          </h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
            <li>
              Footer copyright is still 2020. The business kept working; the
              site’s chrome did not.
            </li>
            <li>
              Testimonials are specific and useful (owner Brian, drywall
              patching, inspector comments) but live in a weak slider.
            </li>
            <li>
              Real PEX/copper/job photography exists in the media library and
              on service headers, then barely drives the homepage.
            </li>
            <li>
              WooCommerce cart + Uzbekistani som (UZS) on a lead-gen plumbing
              site.
            </li>
            <li>
              Portfolio items are unlabeled “Portfolio 1–7” luxury interiors —
              not convincing plumbing proof.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Redesign improvements</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
            <li>
              Hero states the specialty (whole-home PEX/copper repipe) in one
              screen, with a first-party manifold photograph.
            </li>
            <li>
              Trust is a verified strip (CSLB number + status, bonded/insured,
              20 years, service area) instead of a logo salad.
            </li>
            <li>
              Services grouped around buyer decisions, not a five-icon dump.
            </li>
            <li>
              Work gallery uses actual piping/jobsite frames with honest
              captions.
            </li>
            <li>
              Mobile: sticky call + estimate, 44px targets, no cart widget.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Talking points</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
            <li>
              “Your reviews already explain why people hire you. The homepage
              doesn’t.”
            </li>
            <li>
              “You have real wall-open photography. We put it where a buyer
              decides.”
            </li>
            <li>
              “The 2020 footer is the honest hook — not that the company is
              outdated.”
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Personalization hooks</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Brian (owner / CSLB qualifying individual) is named unprompted in reviews.</li>
            <li>Drywall patching is a competitive differentiator customers already volunteer.</li>
            <li>Irvine HQ + El Segundo + Rancho Cucamonga — three-county coverage is first-party.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">What not to say</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Do not insult the existing site, theme shop, or an unnamed designer.</li>
            <li>Do not claim Novenworks was hired, or that this is the live site.</li>
            <li>Do not claim ownership of Simpex photography or the wordmark.</li>
            <li>
              Do not quote Yelp 4.8 / 394 reviews, BuildZoom scores, or “25
              years” — first-party says “over 20 years.”
            </li>
            <li>Do not invent warranty terms, ROI, lead lift, or SEO rankings.</li>
            <li>Do not claim the interior “portfolio” kitchens are Simpex remodels.</li>
            <li>Do not say an agency is defunct or that they have no agency.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Subject lines</h2>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-300">
            <li>Brian, I made something for Simpex Repipe & Plumbing</li>
            <li>had an idea for Simpex Repipe & Plumbing</li>
            <li>quick thing I built for Simpex Repipe & Plumbing</li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Cold email</h2>
          <pre className="mt-2 whitespace-pre-wrap rounded-md bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-200">
            {`Hi Brian,

Came across Simpex Repipe & Plumbing and ended up building something.

You already have the part that matters, real work and a business people can trust.

I thought the site could make that clearer faster, so I put together a homepage concept.

https://simpex-repipe-and-plumbing-demo.vercel.app

No big pitch here. Thought you might be curious to see what someone else did with it.

Vincent
Novenworks`}
          </pre>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Follow-up</h2>
          <pre className="mt-2 whitespace-pre-wrap rounded-md bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-200">
            {`Hi Brian,

One quick bump on this. I spent some time putting together that Simpex Repipe & Plumbing concept and wanted to make sure it actually reached you.

https://simpex-repipe-and-plumbing-demo.vercel.app

If it's not something you're looking at right now, totally fine.

Vincent`}
          </pre>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">Capture package</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Direct files under <code>/outreach/filename</code>
          </p>
          <div className="mt-4 grid gap-6">
            {captures.map((c) => (
              <figure key={c.file} className="border border-zinc-800 p-3">
                <figcaption className="mb-2 text-sm text-zinc-400">
                  {c.label} —{" "}
                  <a className="underline" href={`/outreach/${c.file}`}>
                    {c.file}
                  </a>
                </figcaption>
                {c.file.endsWith(".mp4") ? (
                  <video
                    src={`/outreach/${c.file}`}
                    controls
                    className="w-full bg-zinc-900"
                  />
                ) : (
                  <img
                    src={`/outreach/${c.file}`}
                    alt={c.label}
                    className="w-full bg-zinc-900"
                  />
                )}
              </figure>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
