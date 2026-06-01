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
    description: "Where I spend a lot of my time - finding the why behind the what.",
    items: ["DataDog", "Sentry", "Dynatrace", "FullStory", "Postman"],
  },
  {
    title: "Languages",
    icon: Code2,
    description: "Languages I've shipped code in.",
    items: ["JavaScript", "TypeScript", "PHP", "IBM RPG", "Java", "C++"],
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
    description: "Where the business logic lives.",
    items: ["Node.js", "MySQL", "PostgreSQL", "IBM DB2", "BigQuery", "DynamoDB", "REST APIs", "Express.js", "Supabase"],
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
    items: ["Git", "Jira", "Confluence", "Freshdesk", "Agile/Kanban", "SDLC", "Notion"],
  },
];