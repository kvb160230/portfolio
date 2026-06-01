export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Sprinto",
    role: "Senior Support Engineer",
    location: "Remote, India",
    period: "Oct 2025 — Present",
    current: true,
    bullets: [
      "Program-manage support for Sprinto's enterprise customers (30+ accounts), distributing tickets across the team, coordinating prioritization with engineering, and keeping product looped in on patterns worth fixing.",
      "Previously ran enterprise support as the sole technical point of contact across the full portfolio, before evolving the role into a coordination layer that scales better for a lean team.",
      "Launched and led the Integrations Support Pod, a focused effort to shorten the path from integration failure to resolution across 40+ third-party services. Joined onboarding calls with TAMs and worked with engineering to close gaps that documentation alone couldn't fix.",
      "Closed small product gaps by shipping pull requests for engineering review, the kind of fixes that would otherwise have sat in the backlog as low-priority feature asks. The customer-side context came from me; the codebase access came from internal AI tooling, which I used to draft the changes and then took through review.",
      "Onboarding buddy and technical mentor for new hires joining the team.",
    ],
    tech: ["React.js", "DataDog", "Sentry", "Metabase"],
  },
  {
    company: "Sprinto",
    role: "Support Engineer",
    location: "Remote, India",
    period: "Jan 2025 — Oct 2025",
    bullets: [
      "Debugged compliance-platform issues spanning AWS, Azure, GCP, and dozens of third-party integrations — tracing logs in DataDog and Sentry, and calling APIs through Postman.",
      "Executed back-end scripts for safe, large-scale data corrections, or updates in customer environments.",
      "Drove the Support SME initiative — turning recurring escalations into product fixes by partnering closely with Product and Engineering.",
    ],
    tech: ["DataDog", "Sentry", "Postman"],
  },
  {
    company: "American First Finance",
    role: "Technical Support Developer",
    location: "Dallas, TX",
    period: "Nov 2020 — May 2024",
    bullets: [
      "Level 2 support for e-commerce API integrations, including on-call rotations.",
      "Primary contact for major retail clients, kepeping their checkout flows alive.",
      "Wrote production code alongside support work: RPG stored procedures, PHP classes, and Vue components shipped based on customer, and internal requirements.",
      "Ran root cause analyses, owned post-deployment verification using Dynatrace, FullStory, and MySQL.",
    ],
    tech: ["IBM RPG", "AS/400", "PHP", "Vue.js", "MySQL", "Dynatrace", "Postman"],
  },
  {
    company: "Text-Em-All",
    role: "Software Engineer Intern",
    location: "Dallas, TX",
    period: "May 2020 — Aug 2020",
    bullets: [
      "Shipped UI improvements and Material-UI upgrades on a production web app.",
      "Worked directly with CX and backend teams to translate user feedback into features.",
    ],
    tech: ["React.js", "Material-UI"],
  },
];