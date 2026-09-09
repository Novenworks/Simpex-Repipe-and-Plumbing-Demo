import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/site-shell";
import { site, workPhotos } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [{ title: `Our work | ${site.name}` }] }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="font-display text-sm tracking-[0.22em] uppercase text-copper">
          Photography from the live site
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl md:text-6xl">
          PEX, copper, and the conditions that force a repipe.
        </h1>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          These frames were published by Simpex on simpexrepipe.com. Captions
          describe what you are looking at. They are not named job addresses,
          and they are not stock libraries.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {workPhotos.map((photo) => (
            <figure key={photo.src} className="bg-cream">
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
