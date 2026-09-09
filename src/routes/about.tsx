import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: `About | ${site.name}` }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <img
          src="/images/about/header-about.jpg"
          alt="Technician working at a residential water heater"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
            Who we are
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl md:text-6xl">
            Licensed Southern California plumbers who specialize in the system
            behind the wall.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <h2 className="text-3xl md:text-4xl">Our company</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Simpex Repipe & Plumbing is a fully licensed, bonded, and insured
            plumbing company with over 20 years of experience. We specialize in
            whole-home repipes — PEX and copper — plus slab leaks, sewer camera
            work, and everyday plumbing across Orange County, Los Angeles, and
            the Inland Empire.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The California Contractors State License Board lists{" "}
            <strong className="text-ink">{site.legalName}</strong> as license{" "}
            <a
              className="font-semibold text-copper"
              href={site.cslb}
              target="_blank"
              rel="noreferrer"
            >
              {site.licenseLabel}
            </a>
            , classification {site.classification}. The license is current and
            active (verified September 2026; expires 10/31/2027). The qualifying
            individual on the license is Brian Takahiro Udo — matching customer
            reviews on the current site that name “Brian, the owner.”
          </p>
          <Button asChild className="mt-8" variant="dark">
            <Link to="/contact">Request an estimate</Link>
          </Button>
        </div>
        <img
          src="/images/about/crew-job.jpg"
          alt="In-home plumbing work under a kitchen sink"
          className="h-full max-h-[32rem] w-full object-cover"
        />
      </section>

      <section className="relative overflow-hidden bg-cream">
        <img
          src="/images/about/service-map.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="text-3xl">Areas we cover</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Simpex services Orange County, Los Angeles County, and the Inland
            Empire.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {site.locations.map((loc) => (
              <article key={loc.label} className="border border-line bg-cream/90 p-6">
                <p className="font-display text-sm tracking-[0.16em] uppercase text-copper">
                  {loc.label}
                </p>
                {loc.lines.map((line) => (
                  <p key={line} className="mt-1 text-ink">
                    {line}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
