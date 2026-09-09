import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { services, site } from "@/lib/site";

const service = services[0];

export const Route = createFileRoute("/services/pex-repipe")({
  head: () => ({ meta: [{ title: `PEX repipe | ${site.name}` }] }),
  component: () => (
    <ServicePage
      service={service}
      extra={
        <>
          <h2 className="text-3xl text-ink">Why PEX</h2>
          <p className="mt-4">
            PEX stands for polyethylene cross-linked — flexible plastic tubing
            used for more than 40 years, made from high-density polyethylene.
            When upgrading a home’s hot or cold water system, Simpex presents
            two material paths: PEX or copper.
          </p>
          <p className="mt-4">
            First-party copy states their Southern California re-pipe
            technicians are fully certified to install PEX and have replaced
            and installed PEX in residential and commercial structures. They
            describe the work as done “in the shortest possible time, with
            maximum efficiency.”
          </p>
          <img
            src="/images/hero/burst-pipe.png"
            alt="Burst galvanized pipe that a PEX repipe is meant to replace"
            className="mt-6 w-full object-cover"
          />
        </>
      }
    />
  ),
});
