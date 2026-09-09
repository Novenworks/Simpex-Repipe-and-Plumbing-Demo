export const site = {
  name: "Simpex Repipe & Plumbing",
  legalName: "SIMPEX REPIPE INC",
  tagline: "Trusted plumbing experts for over 20 years",
  phoneDisplay: "1-866-4-SIMPEX",
  phoneTel: "tel:+18664746739",
  phoneNumeric: "1-866-474-6739",
  email: "info@simpexrepipe.com",
  license: "1031884",
  licenseLabel: "CA CSLB #1031884",
  classification: "C36 — Plumbing",
  originalUrl: "https://simpexrepipe.com/",
  instagram: "https://www.instagram.com/simpexrepipe/",
  yelp: "https://www.yelp.com/biz/simpex-repipe-and-plumbing-irvine",
  cslb: "https://www.cslb.ca.gov/1031884",
  areas: ["Orange County", "Los Angeles County", "Inland Empire"],
  locations: [
    {
      label: "Headquarters",
      lines: ["18021 Sky Park Circle, Suite K", "Irvine, CA 92614"],
    },
    {
      label: "Los Angeles",
      lines: ["222 N. Pacific Coast Highway, Suite 2000", "El Segundo, CA 90245"],
    },
    {
      label: "Inland Empire",
      lines: ["9431 Haven Avenue, Suite 100", "Rancho Cucamonga, CA 91730"],
    },
  ],
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "pex-repipe",
    href: "/services/pex-repipe",
    name: "PEX repipe",
    short: "Flexible, durable whole-home water lines.",
    summary:
      "PEX (cross-linked polyethylene) is a flexible tubing used for hot and cold water. Simpex installs PEX when a home needs a full or partial repipe — including homes where galvanized or aging copper is failing.",
    image: "/images/services/pex-detail.jpg",
    imageAlt: "PEX piping and fittings in an opened interior wall",
    featured: true,
    points: [
      "Budget-friendly relative to some metal systems",
      "Holds temperature, which can lower heating cost",
      "Resistant to buildup inside the pipe",
      "Resistant to freezing and bursts",
      "Flexible and long-lasting",
    ],
  },
  {
    slug: "copper-repipe",
    href: "/services/copper-repipe",
    name: "Copper repipe",
    short: "Replace corroded galvanized with copper.",
    summary:
      "Many homes in Orange County, Los Angeles County, and the Inland Empire were originally plumbed with galvanized iron. As it rusts, the inside diameter shrinks. Simpex replaces those lines with copper — in most cases in one day, per the company.",
    image: "/images/services/copper-header.jpg",
    imageAlt: "New copper water lines installed in an opened wall",
    featured: true,
    points: [
      "Increased water pressure vs. corroded galvanized",
      "Corrosion resistant",
      "Reliable supply piping",
      "A copper system should last as long as the home",
      "A selling point for a future buyer",
    ],
  },
  {
    slug: "slab-leak",
    href: "/services/slab-leak",
    name: "Slab leak detection & repair",
    short: "Find the leak, then choose the least destructive repair.",
    summary:
      "Once a slab leak is found, Simpex walks through repair options — from a concentrated spot repair to rerouting or a full re-pipe when aging lines are failing in more than one place.",
    image: "/images/services/slab-header.jpg",
    imageAlt: "Foundation and slab at a residential plumbing repair",
    featured: false,
    points: [
      "Hot or warm spots on the floor",
      "Rising water bill",
      "Water seeping up through the floor",
      "Sound of water running when nothing is on",
    ],
  },
  {
    slug: "leak-detection",
    href: "/services/leak-detection",
    name: "Leak detection",
    short: "Locate hidden leaks without guesswork.",
    summary:
      "Southern California homes often have water lines in or under the slab. Simpex uses non-invasive equipment to pinpoint leaks in slabs, walls, yards, and crawl spaces so the repair can stay targeted.",
    image: "/images/services/leak-header.jpg",
    imageAlt: "Under-house piping where a hidden leak can develop",
    featured: false,
    points: [
      "Service line from meter to home",
      "Hot or cold lines under the slab",
      "Leaks inside walls and floors",
      "Basements and crawl spaces",
    ],
  },
  {
    slug: "sewer-camera",
    href: "/services/sewer-camera",
    name: "Sewer camera & drain repair",
    short: "See the line before you open the ground.",
    summary:
      "A sewer camera inspection is a non-invasive way to find blockages, plan repairs, or inspect a home before buying. Simpex also handles drain repair.",
    image: "/images/services/sewer-header.jpg",
    imageAlt: "Technician performing a sewer camera inspection",
    featured: false,
    points: [
      "Pinpoint the nature and location of problem spots",
      "Locate drainage or stoppage issues",
      "Inspect a home before you buy",
      "Monitor the health of the plumbing system",
    ],
  },
  {
    slug: "general-plumbing",
    href: "/services/general-plumbing",
    name: "General plumbing",
    short: "Leaks, fixtures, heaters, and everyday repairs.",
    summary:
      "Simpex is a full-service plumbing company and offers free in-home estimates. Beyond repipes, the live site lists drain, fixture, garbage disposal, faucet, water heater, and water softener work.",
    image: "/images/services/general-header.jpg",
    imageAlt: "Plumber working on a residential water heater",
    featured: false,
    points: [
      "Leak repair",
      "Faucet and fixture work",
      "Garbage disposals",
      "Water heaters",
      "Water softeners",
      "Drains",
    ],
  },
] as const;

export const workPhotos = [
  {
    src: "/images/hero/pex-header.jpg",
    alt: "PEX manifold and distribution lines in an opened interior wall",
    caption: "PEX manifold during a wall repipe",
  },
  {
    src: "/images/services/pex-detail.jpg",
    alt: "Red and blue PEX tubing routed through wall framing",
    caption: "PEX distribution in an opened wall",
  },
  {
    src: "/images/services/copper-header.jpg",
    alt: "Copper water lines installed in a residential wall cavity",
    caption: "Copper supply in an opened wall",
  },
  {
    src: "/images/about/truck.jpg",
    alt: "Close-up of copper piping and fittings",
    caption: "Copper close-up",
  },
  {
    src: "/images/about/crew-job.jpg",
    alt: "Plumber working under a kitchen sink in a finished home",
    caption: "In-home plumbing work",
  },
  {
    src: "/images/hero/burst-pipe.png",
    alt: "Burst and corroded galvanized pipe",
    caption: "Failed galvanized — the problem a repipe solves",
  },
  {
    src: "/images/services/slab-header.jpg",
    alt: "Residential slab and foundation during plumbing work",
    caption: "Slab and foundation conditions",
  },
  {
    src: "/images/services/leak-header.jpg",
    alt: "Piping in a crawl space where leaks are found",
    caption: "Under-house leak environment",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Simpex was SO easy to work with during the stressful period of repiping your entire home. And they keep to their word! Brian, the owner, was very thorough in his explanation of what needed to be done, what was actually going to be done. He kept to his timeline and his crew was very efficient. I would highly recommend Simpex for repiping your home!",
    name: "Amy C.",
  },
  {
    quote:
      "I re-piped my home with PEX and chose Simpex because of the great warranty they offer. I checked out about eight other companies before making my decision to use Simpex, and I couldn't be happier with my decision. No need to look any further when considering a company for your re-pipe. As a real estate professional, Simpex will be recommended to all my clients.",
    name: "Mary Ann W.",
  },
  {
    quote:
      "I've got many quotes and all were on high side with no patching included and no availability for next few days. Nobody except Simpex. They gave me best quote for repiping and patching and were able to start next day, exactly when I needed. Job was done as promised, crew showed up right on time.",
    name: "Vitaliy K.",
  },
  {
    quote:
      "They are very professional, on time and very careful with their repipe procedure. Their drywall patchers work miracles. I can't even tell that much walls were cut after the patch. no leaks and all works perfectly up to date.",
    name: "Dave T.",
  },
  {
    quote:
      "Simpex completed a full house repipe for us. They arrived on time and completed the repipe in one day. The supervisor walked through our home explaining what would be done and answered all of our questions. They minimized dust and cleaned up after the repipe. Also, the drywall patching and texturing was done in one day.",
    name: "Jeffrey M.",
  },
  {
    quote:
      "I had three projects I needed them to tackle: 1) Main sewer line repipe from my house, 2) Water softener discharge PVC repipe and 3) toilet replacement. Communication was outstanding, scheduling was simple, and both team members had five star service. Super clean, very respectful of my family.",
    name: "Jacob G.",
  },
  {
    quote:
      "Very appreciative of the professional conscientious, quality of work. They are personable and professional. They were awesome.",
    name: "Ann K.",
  },
  {
    quote:
      "I did a LOT of research before choosing Simpex to do our repipe. When the city inspector came out he said that they had done an excellent job. They also walk you through the process, so you know what to expect each day. Their crews showed up on time each day, worked hard and to a high level too.",
    name: "Elizabeth B.",
  },
  {
    quote:
      "I recently had my water heater give out and reached out on yelp for a few quotes. Simpex reached out and offered for their plumber to come out and give me a quote for the replacement at no cost for the visit. They were able to install a new one the next day within a couple of hours!",
    name: "Gage L.",
  },
  {
    quote:
      "Brian came in and was very honest. He didn't try to upsell me a water heater, or water filtration system like the other companies. Simpex came in with 8-10 people on the first day to meet their time requirements. On the 2nd day the city inspector stopped by and was very impressed with their work. Drywall was done so well we had a hard time identifying where they had opened up the wall.",
    name: "Mark K.",
  },
  {
    quote:
      "Jaime was beyond helpful. I wanted to replace my bathroom sink. He found the exact same sink Gerber for me which other people said they cannot and asked me to find one myself. Jaime ordered the sink and came back a week later to install within an hour or so. He was professional and honest.",
    name: "Nhi D.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Free in-home estimate",
    body: "Call or request an estimate. Simpex offers free in-home estimates for plumbing issues and projects.",
  },
  {
    n: "02",
    title: "Walk the plan",
    body: "Customers describe a supervisor or owner walking the home, explaining what will be opened, and answering questions before work starts.",
  },
  {
    n: "03",
    title: "Repipe the system",
    body: "PEX or copper, sized to the house. First-party copper copy notes that in most cases the repipe is done in one day.",
  },
  {
    n: "04",
    title: "Patch, inspect, clean",
    body: "Reviews on the current site repeatedly call out drywall patching, city inspection, dust control, and a clean job site.",
  },
] as const;
