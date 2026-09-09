import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Simpex home">
          <img
            src="/images/brand/logo-header.png"
            alt="Simpex Repipe & Plumbing"
            className="h-9 w-auto md:h-10"
            width={402}
            height={91}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-[0.95rem] font-medium text-ink-2 hover:text-copper"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneTel}
            className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-copper"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
          <Button asChild>
            <Link to="/contact">Request an estimate</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneTel}
            className="flex size-11 items-center justify-center text-ink"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <Phone className="size-5" />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex size-11 items-center justify-center text-ink"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Site menu</SheetTitle>
              <img
                src="/images/brand/logo-header.png"
                alt=""
                className="mb-8 h-8 w-auto brightness-0 invert"
              />
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {nav.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      to={item.href}
                      className="font-display py-3 text-2xl tracking-wide text-cream"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button asChild variant="primary">
                  <SheetClose asChild>
                    <Link to="/contact">Request an estimate</Link>
                  </SheetClose>
                </Button>
                <Button asChild variant="light">
                  <a href={site.phoneTel}>Call {site.phoneDisplay}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
