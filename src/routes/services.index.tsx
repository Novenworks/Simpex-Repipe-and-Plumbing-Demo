import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [{ title: `Services | ${site.name}` }] }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
          Services
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl md:text-6xl">
          Repipe the house. Find the leak. Keep the rest of the plumbing honest.
        </h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={s.href}
              className="group overflow-hidden border border-line bg-cream hover:border-ink"
            >
              <img
                src={s.image}
                alt={s.imageAlt}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="font-display text-2xl">{s.name}</h2>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
