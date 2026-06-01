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
      "Program-manage support for Sprinto's enterprise customers (30+ accounts), coordinating prioritization with engineering, and keeping product looped in on patterns/gaps worth fixing.",
      //"Previously ran enterprise support as the sole technical point of contact across the full portfolio, before evolving the role into a coordination layer that scales better for a lean team.",
      "Launched and led the Integrations Support Pod, a focused effort to shorten the path from integration failure to resolution across 100+ third-party services.",
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
      "Debugged compliance-platform issues across AWS, Azure, GCP, and dozens of third-party integrations, tracing logs in DataDog and Sentry, working through APIs in Postman",
      "Applied engineering-provided back-end scripts to resolve customer issues quickly: targeted data fixes, workarounds for missing functionality, and bulk updates the UI couldn't handle.",
      "Co-led the Support SME initiative, a tier-2 layer that sat between frontline support and engineering. Resolved roughly half of escalated tickets ourselves before they reached engineering, and turned recurring patterns into process improvements that made the support-to-engineering loop tighter.",
    ],
    tech: ["DataDog", "Sentry", "Postman"],
  },
  {
    company: "American First Finance",
    role: "Technical Support Developer",
    location: "Dallas, TX",
    period: "Nov 2020 — May 2024",
    bullets: [
      "Shipped production code to fix bugs and deliver enhancements based on customer needs and internal requirements, working across RPG, PHP, and Vue.",
      "Collaborated with the development team to architect solutions in response to business and client requirements, contributing to design decisions across the same stack.",
      "Worked Level 2 support for e-commerce API integrations and served as the primary technical contact for the largest retail clients on the platform.",
      "Ran root cause analyses on production incidents and owned post-deployment verification using Dynatrace, FullStory, and MySQL."
    ],
    tech: ["IBM RPG", "AS/400", "PHP", "Vue.js", "MySQL", "Dynatrace", "Postman"],
  },
  {
    company: "Text-Em-All",
    role: "Software Engineer Intern",
    location: "Dallas, TX",
    period: "May 2020 — Aug 2020",
    bullets: [
      "Rebuilt a core component of the application on a newer version of Material-UI, adding stronger input validation and a smoother interaction pattern that made the app easier to use for less tech-savvy customers.",
      "Collaborated with CX and backend teams to translate user feedback into front-end improvements.",
    ],
    tech: ["React.js", "Material-UI"],
  },
];