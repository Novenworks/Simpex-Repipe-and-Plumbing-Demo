import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, site } from "@/lib/site";

const service = services[1];

export const Route = createFileRoute("/services/copper-repipe")({
  head: () => ({ meta: [{ title: `Copper repipe | ${site.name}` }] }),
  component: () => (
    <ServicePage
      service={service}
      extra={
        <>
          <h2 className="text-3xl text-ink">The galvanized problem</h2>
          <p className="mt-4">
            Many homes in Orange County, LA County, and the Inland Empire were
            originally plumbed with galvanized iron. Corrosion reduces the
            inside diameter of the pipe, so pressure drops over time.
          </p>
          <p className="mt-4">
            With a copper repipe, Simpex replaces those lines with new copper.
            The company states that in most cases the work is done in one day.
            Call for a free estimate.
          </p>
          <img
            src="/images/about/truck.jpg"
            alt="Close-up of copper piping"
            className="mt-6 w-full object-cover"
          />
        </>
      }
    />
  ),
});
