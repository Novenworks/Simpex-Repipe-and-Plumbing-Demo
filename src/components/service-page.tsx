import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { services, site } from "@/lib/site";

type Service = (typeof services)[number];

export function ServicePage({
  service,
  extra,
}: {
  service: Service;
  extra?: ReactNode;
}) {
  return (
    <SiteShell>
      <section className="relative isolate min-h-80 overflow-hidden bg-ink text-cream">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
            Service
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl md:text-6xl">{service.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-cream/80">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Get a free estimate</Link>
            </Button>
            <Button asChild variant="light">
              <a href={site.phoneTel}>Call {site.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl">What this covers</h2>
          <ul className="mt-6 space-y-3">
            {service.points.map((p) => (
              <li key={p} className="border-l-2 border-copper pl-4 text-ink-2">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-muted leading-relaxed">{extra}</div>
      </section>
      <CtaBand title={`Talk through a ${service.name.toLowerCase()}`} />
    </SiteShell>
  );
}
