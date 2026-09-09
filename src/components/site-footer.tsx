import { Link } from "@tanstack/react-router";
import { services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <img
            src="/images/brand/logo-header.png"
            alt="Simpex Repipe & Plumbing"
            className="h-9 w-auto brightness-0 invert"
            width={402}
            height={91}
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Licensed, bonded, and insured plumbing for Orange County, Los
            Angeles, and the Inland Empire. Whole-home PEX and copper repipes,
            slab leaks, drains, and everyday plumbing.
          </p>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.18em] uppercase text-copper">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.href} className="text-cream/80 hover:text-cream">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.18em] uppercase text-copper">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-cream/80 hover:text-cream">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-cream/80 hover:text-cream">
                Our work
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="text-cream/80 hover:text-cream">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-cream/80 hover:text-cream">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={site.yelp}
                className="text-cream/80 hover:text-cream"
                target="_blank"
                rel="noreferrer"
              >
                Yelp
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                className="text-cream/80 hover:text-cream"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.18em] uppercase text-copper">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a href={site.phoneTel} className="hover:text-cream">
                {site.phoneDisplay}
              </a>
              <div className="text-cream/50">{site.phoneNumeric}</div>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.cslb}
                className="hover:text-cream"
                target="_blank"
                rel="noreferrer"
              >
                {site.licenseLabel} · {site.classification}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            {site.locations[0].lines.join(", ")}
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. Licensed in California.
          </p>
          <p>
            Speculative redesign by Novenworks. Not an official Simpex website.
            Marks and photography remain property of their owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
