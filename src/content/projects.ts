export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  link?: string;
  github?: string;
  status?: "live" | "archived" | "case-study" | "coming-soon";
};

export const projects: Project[] = [
  {
    title: "AccessMyResearch — Social Network",
    description:
      "Built social-network features for a non-profit research platform — auth, messaging, search filters, and personalized news feeds on top of AWS-native services.",
    tech: ["React", "AWS Amplify", "DynamoDB", "Cognito", "Trello"],
    status: "archived",
  },
  {
    title: "Debugging Integrations Across Clouds — A Case Study",
    description:
      "A write-up on how I approach debugging API integrations spanning AWS, Azure, and GCP — observability patterns, common failure modes, and the questions I ask first.",
    tech: ["DataDog", "Sentry", "Postman", "REST APIs"],
    status: "coming-soon",
  },
];