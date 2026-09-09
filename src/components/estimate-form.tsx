import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

const jobs = [
  "PEX repipe",
  "Copper repipe",
  "Slab leak",
  "Leak detection",
  "Sewer camera / drain",
  "General plumbing",
  "Not sure yet",
];

export function EstimateForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const prev = JSON.parse(localStorage.getItem("simpex-demo-leads") || "[]");
      prev.push({ ...payload, at: new Date().toISOString() });
      localStorage.setItem("simpex-demo-leads", JSON.stringify(prev));
    } catch {
      /* demo only */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-cream p-6 md:p-8">
        <p className="font-display text-2xl text-ink">This is a demo form</p>
        <p className="mt-3 max-w-prose text-muted leading-relaxed">
          Your details were saved only in this browser. They were{" "}
          <strong className="text-ink">not sent to Simpex</strong>. This page is
          a speculative website concept, not the company’s live site.
        </p>
        <p className="mt-4 text-ink">
          To reach Simpex, call{" "}
          <a className="font-semibold text-copper" href={site.phoneTel}>
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a className="font-semibold text-copper" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p className="rounded-md border border-line bg-paper-2/60 px-3 py-2 text-sm text-muted">
        Demo only — this form does not contact Simpex. Use the phone number to
        reach the real company.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" autoComplete="address-level2" />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="job">What do you need?</Label>
        <select
          id="job"
          name="job"
          className="h-12 border border-line bg-cream px-3 text-base text-ink focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-none"
          defaultValue="PEX repipe"
        >
          {jobs.map((j) => (
            <option key={j}>{j}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message">Tell us about the job</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Age of the home, leaks, low pressure, or a full repipe…"
        />
      </div>
      <Button type="submit" size="lg">
        Request an estimate
      </Button>
    </form>
  );
}
