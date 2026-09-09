import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, site } from "@/lib/site";

const service = services[3];

export const Route = createFileRoute("/services/leak-detection")({
  head: () => ({ meta: [{ title: `Leak detection | ${site.name}` }] }),
  component: () => (
    <ServicePage
      service={service}
      extra={
        <>
          <h2 className="text-3xl text-ink">Hidden water, hard water</h2>
          <p className="mt-4">
            In Southern California, many homes have copper water lines running
            through the slab. Combined with hard water, that raises the chance
            of a slab leak. Unlike ceiling leaks, slab leaks are not obvious —
            homeowners often notice a warmer floor or a higher water bill.
          </p>
          <p className="mt-4">
            Simpex says its leak-detection technicians use non-invasive, state
            of the art equipment so the repair can stay targeted instead of
            turning into a fishing expedition.
          </p>
        </>
      }
    />
  ),
});
