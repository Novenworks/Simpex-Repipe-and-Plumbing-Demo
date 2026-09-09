import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { site, testimonials } from "@/lib/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [{ title: `Reviews | ${site.name}` }] }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
          First-party reviews
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl md:text-6xl">
          Why Simpex is the people’s choice — in their own words.
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Quotes below are copied from{" "}
          <a
            className="underline"
            href="https://simpexrepipe.com/testimonials/"
            target="_blank"
            rel="noreferrer"
          >
            simpexrepipe.com/testimonials
          </a>
          . Star ratings and review counts from other sites are not added here.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="border border-line bg-cream p-6">
              <p className="leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 font-display text-sm tracking-[0.14em] uppercase text-muted">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
