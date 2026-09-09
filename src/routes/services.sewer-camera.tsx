import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, site } from "@/lib/site";

const service = services[4];

export const Route = createFileRoute("/services/sewer-camera")({
  head: () => ({ meta: [{ title: `Sewer camera inspection | ${site.name}` }] }),
  component: () => (
    <ServicePage
      service={service}
      extra={
        <>
          <h2 className="text-3xl text-ink">See the line first</h2>
          <p className="mt-4">
            A camera inspection is one of the easiest ways to discover the
            location and cause of a current plumbing issue — or to prevent an
            emergency later. Simpex also uses it before a purchase or a remodel
            so the repair plan is based on what is actually in the pipe.
          </p>
          <p className="mt-4">
            Technicians conduct the inspection and advise on repairs,
            maintenance, or care. Call to schedule.
          </p>
        </>
      }
    />
  ),
});
