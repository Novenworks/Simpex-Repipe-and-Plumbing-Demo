import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand({
  eyebrow = "Have a project?",
  title = "Request a free in-home estimate",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <img
        src="/images/about/truck.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/55" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:flex-row md:items-end md:justify-between md:px-6 md:py-20">
        <div>
          <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
            {eyebrow}
          </p>
          <h2 className="mt-2 max-w-xl text-3xl leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-lg text-cream/70">
            Licensed, bonded, and insured. Call{" "}
            <a className="text-cream underline decoration-copper" href={site.phoneTel}>
              {site.phoneDisplay}
            </a>{" "}
            or send a few details — Simpex offers free in-home estimates.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Request an estimate</Link>
          </Button>
          <Button asChild variant="light" size="lg">
            <a href={site.phoneTel}>Call now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
