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
      "Dedicated technical lead for enterprise accounts — the single point of contact when things get complicated.",
      "Launched and own the Integrations Support Pod end-to-end: real-time onboarding troubleshooting, defect coordination with engineering, smoother launches for high-value customers.",
      "Onboarding buddy and technical mentor for new hires joining the team.",
    ],
    tech: ["DataDog", "Sentry", "Postman", "AWS", "Azure", "GCP"],
  },
  {
    company: "Sprinto",
    role: "Support Engineer",
    location: "Remote, India",
    period: "Jan 2025 — Oct 2025",
    bullets: [
      "Debugged compliance-platform issues spanning AWS, Azure, GCP, and dozens of third-party integrations — tracing logs in DataDog and Sentry, calling APIs through Postman, reading code when needed.",
      "Wrote back-end scripts for safe, large-scale data corrections in customer environments.",
      "Drove the Support SME initiative — turning recurring escalations into product fixes by partnering closely with Product and Engineering.",
    ],
    tech: ["DataDog", "Sentry", "Postman", "Node.js", "PostgreSQL"],
  },
  {
    company: "American First Finance",
    role: "Technical Support Developer",
    location: "Dallas, TX",
    period: "Nov 2020 — May 2024",
    bullets: [
      "Level 2 support for e-commerce API integrations, including on-call rotations.",
      "Primary contact for major retail clients — kept their checkout flows alive.",
      "Wrote production code alongside support work: RPG stored procedures, PHP classes, and Vue components shipped based on customer-driven requirements.",
      "Ran root cause analyses, owned post-deployment verification using Dynatrace, FullStory, MySQL, and PowerBI.",
    ],
    tech: ["IBM RPG", "PHP", "Vue.js", "MySQL", "Dynatrace", "Postman"],
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