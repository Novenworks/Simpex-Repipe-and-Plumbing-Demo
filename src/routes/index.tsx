import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import {
  processSteps,
  services,
  site,
  testimonials,
  workPhotos,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Simpex Repipe & Plumbing | PEX & Copper Repipe in Southern California",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = services.filter((s) => s.featured);
  const secondary = services.filter((s) => !s.featured);
  const quotes = [
    testimonials[0],
    testimonials[4],
    testimonials[7],
    testimonials[9],
  ];

  return (
    <SiteShell>
      <section className="relative isolate min-h-[34rem] overflow-hidden bg-ink text-cream md:min-h-[40rem]">
        <img
          src="/images/hero/pex-header.jpg"
          alt="PEX manifold and water lines in an opened residential wall"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] brightness-[1.08] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink from-0% via-ink/80 via-[38%] to-ink/10" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end px-4 py-12 md:min-h-[40rem] md:px-6 md:py-16">
          <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
            Orange County · Los Angeles · Inland Empire
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
            Repipe Your Home With a Team Built for the Job
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
            From PEX and copper repipes to slab leaks, drains, and general
            plumbing, Simpex brings specialized experience to the plumbing
            systems behind your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Request an estimate</Link>
            </Button>
            <Button asChild variant="light" size="lg">
              <Link to="/work">View our work</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={site.phoneTel}>Call {site.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-2 md:grid-cols-4 md:px-6">
          {[
            { k: "License", v: site.licenseLabel, href: site.cslb },
            { k: "Classification", v: "C36 Plumbing · active" },
            { k: "Standing", v: "Licensed, bonded & insured" },
            { k: "Experience", v: "Over 20 years in the trade" },
          ].map((item) => (
            <div key={item.k}>
              <p className="font-display text-xs tracking-[0.18em] uppercase text-muted">
                {item.k}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 block text-sm font-semibold text-ink hover:text-copper"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.v}
                </a>
              ) : (
                <p className="mt-1 text-sm font-semibold text-ink">{item.v}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
          What we do
        </p>
        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-3xl md:text-5xl">
            Whole-home repipes first. The rest of the plumbing, too.
          </h2>
          <p className="max-w-md text-muted leading-relaxed">
            Grouped the way homeowners actually decide: replace the system, find
            a hidden leak, or fix what’s in front of you.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((s) => (
            <Link
              key={s.slug}
              to={s.href}
              className="group relative min-h-80 overflow-hidden bg-ink text-cream"
            >
              <img
                src={s.image}
                alt={s.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent" />
              <div className="relative flex h-full min-h-80 flex-col justify-end p-6 md:p-8">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-copper">
                  Repipe
                </p>
                <h3 className="mt-1 text-3xl md:text-4xl">{s.name}</h3>
                <p className="mt-2 max-w-sm text-cream/80">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((s) => (
            <Link
              key={s.slug}
              to={s.href}
              className="group border border-line bg-cream p-5 hover:border-ink"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-display mt-4 text-xl">{s.name}</h3>
              <p className="mt-1 text-sm text-muted">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-cream md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
                Real work
              </p>
              <h2 className="mt-2 max-w-xl text-3xl md:text-5xl">
                The job lives in the walls, not in a stock photo.
              </h2>
            </div>
            <Button asChild variant="light">
              <Link to="/work">See the work gallery</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {workPhotos.slice(0, 8).map((photo, i) => (
              <figure
                key={photo.src}
                className={
                  i === 0 || i === 3
                    ? "col-span-2 row-span-1 overflow-hidden"
                    : "overflow-hidden"
                }
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-44 w-full object-cover md:h-56"
                />
                <figcaption className="bg-ink-2 px-3 py-2 text-xs text-cream/70">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-sm text-cream/50">
            Photographs published on simpexrepipe.com. Captions describe what is
            in the frame — not invented project names or cities.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="overflow-hidden">
          <img
            src="/images/about/crew-job.jpg"
            alt="Plumber working under a kitchen sink"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
            Why this crew
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl">
            A disruptive whole-home job, run like a plan.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Simpex is a fully licensed, bonded, and insured plumbing company
            with over 20 years of experience. The current site’s own reviews
            keep returning to the same points: the owner is involved, the crew
            walks the house, drywall gets patched, and the job site is left
            clean.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Owner named in customer reviews — Brian walks the scope.",
              "Drywall patching called out as part of the repipe, not an afterthought.",
              "City inspectors praised the work on more than one published review.",
              "Free in-home estimates. Permits handled on jobs where customers mentioned them.",
            ].map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-copper" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8" variant="dark">
            <Link to="/about">About Simpex</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
            How a repipe typically moves
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl md:text-5xl">
            Four steps. No invented timelines.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.n} className="border-t border-copper pt-5">
                <p className="font-display text-sm tracking-[0.18em] text-copper">
                  {step.n}
                </p>
                <h3 className="mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
              From the current site
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl">
              What homeowners already said
            </h2>
          </div>
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copper"
          >
            More reviews <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {quotes.map((t) => (
            <blockquote key={t.name} className="border border-line bg-cream p-6">
              <p className="text-[1.05rem] leading-relaxed text-ink">
                “{t.quote}”
              </p>
              <footer className="mt-4 font-display text-sm tracking-[0.14em] uppercase text-muted">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:px-6 md:py-24">
          <div>
            <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
              Service area
            </p>
            <h2 className="mt-2 text-3xl md:text-5xl">
              Southern California homes — Orange County, Los Angeles, Inland
              Empire.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Headquarters in Irvine, with listed branches in El Segundo and
              Rancho Cucamonga. One number for the whole territory.
            </p>
          </div>
          <ul className="space-y-5">
            {site.locations.map((loc) => (
              <li key={loc.label} className="border-t border-line pt-4">
                <p className="font-display text-sm tracking-[0.16em] uppercase text-copper">
                  {loc.label}
                </p>
                {loc.lines.map((line) => (
                  <p key={line} className="text-ink">
                    {line}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
