import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, site } from "@/lib/site";

const service = services[5];

export const Route = createFileRoute("/services/general-plumbing")({
  head: () => ({ meta: [{ title: `General plumbing | ${site.name}` }] }),
  component: () => (
    <ServicePage
      service={service}
      extra={
        <>
          <h2 className="text-3xl text-ink">When it is not a full repipe</h2>
          <p className="mt-4">
            Simpex is a full-service plumbing company. The live site emphasizes
            stopping a water leak before it becomes a larger event, and offers
            a free in-home estimate.
          </p>
          <p className="mt-4">
            Capabilities shown on the current general-plumbing page include
            drains, fixtures, garbage disposals, faucet installation, water
            heaters, and water softeners — plus the leak and repipe work
            covered on the other service pages.
          </p>
        </>
      }
    />
  ),
});
