export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    name: "ISO 27001:2022 Lead Auditor",
    issuer: "Accredited Body",
    date: "Jun 2025",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera & Google",
    date: "Oct 2024",
  },
];