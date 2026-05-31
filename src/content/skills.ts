import {
  Bug,
  Code2,
  Layout,
  Database,
  Cloud,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Debugging & Observability",
    icon: Bug,
    description: "Where I spend most of my time — finding the why behind the what.",
    items: ["DataDog", "Sentry", "Dynatrace", "FullStory", "Postman", "Log tracing"],
  },
  {
    title: "Languages",
    icon: Code2,
    description: "Languages I've shipped production code in.",
    items: ["JavaScript", "TypeScript", "PHP", "IBM RPG", "R", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    description: "Building interfaces users actually want to use.",
    items: ["React.js", "Vue.js", "Next.js", "Tailwind CSS", "Material-UI"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    description: "Where the business logic and the bugs both live.",
    items: ["Node.js", "MySQL", "PostgreSQL", "IBM DB2", "BigQuery", "DynamoDB", "REST APIs"],
  },
  {
    title: "Cloud & Integrations",
    icon: Cloud,
    description: "Connecting systems and tracing requests across boundaries.",
    items: ["AWS (Amplify, Cognito, DynamoDB)", "Azure", "GCP", "Third-party APIs"],
  },
  {
    title: "Tools & Process",
    icon: Settings,
    description: "The day-to-day workflow.",
    items: ["Git", "JIRA", "Confluence", "Freshdesk", "Agile / Kanban", "SDLC"],
  },
];