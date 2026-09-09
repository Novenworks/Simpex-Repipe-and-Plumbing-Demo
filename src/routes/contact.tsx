import { createFileRoute } from "@tanstack/react-router";
import { EstimateForm } from "@/components/estimate-form";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: `Request an estimate | ${site.name}` }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <img
          src="/images/services/contact-header.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
            Contact
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl md:text-5xl">
            Get a free in-home estimate
          </h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <p className="max-w-md leading-relaxed text-muted">
            Simpex offers free in-home estimates. Call{" "}
            <a className="font-semibold text-ink" href={site.phoneTel}>
              {site.phoneDisplay}
            </a>{" "}
            ({site.phoneNumeric}) or email{" "}
            <a className="font-semibold text-ink" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <ul className="mt-8 space-y-5">
            {site.locations.map((loc) => (
              <li key={loc.label}>
                <p className="font-display text-sm tracking-[0.16em] uppercase text-copper">
                  {loc.label}
                </p>
                {loc.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            {site.licenseLabel} · {site.classification} ·{" "}
            <a
              className="underline"
              href={site.cslb}
              target="_blank"
              rel="noreferrer"
            >
              Verify on CSLB
            </a>
          </p>
        </div>
        <EstimateForm />
      </section>
    </SiteShell>
  );
}
