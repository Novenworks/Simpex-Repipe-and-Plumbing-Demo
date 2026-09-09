import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, site } from "@/lib/site";

const service = services[2];

export const Route = createFileRoute("/services/slab-leak")({
  head: () => ({ meta: [{ title: `Slab leak detection & repair | ${site.name}` }] }),
  component: () => (
    <ServicePage
      service={service}
      extra={
        <>
          <h2 className="text-3xl text-ink">Repair options</h2>
          <p className="mt-4">
            Simpex strives for the least destructive method. The repair is
            usually determined by the location and nature of the leak.
            Homeowners are encouraged to make informed decisions.
          </p>
          <p className="mt-4">
            <strong className="text-ink">Spot repair</strong> opens the slab at
            the leak to replace a concentrated section — often preferred on
            newer homes. <strong className="text-ink">Re-pipe or reroute</strong>{" "}
            is the more aggressive path when aging pipes leak in more than one
            place under the slab.
          </p>
        </>
      }
    />
  ),
});
