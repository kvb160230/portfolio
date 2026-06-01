export type GithubLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  link?: string;
  github?: string | GithubLink[];
  status?: "live" | "case-study" | "coming-soon";
};

export const projects: Project[] = [
  {
    title: "Carpool — Ride Matching App",
    description:
      "An Android app that matches commuters traveling to the same destination, with built-in chat so drivers and riders can coordinate directly. Built with Java in Android Studio, using the Google Autocomplete API for destinations and Firebase for real-time data and messaging.",
    tech: ["Java", "Android Studio", "Firebase", "Google Autocomplete API"],
    link: "https://devpost.com/software/carpool-xqgapf",
  },
  {
    title: "AccessMyResearch — Social Network",
    description:
      "Built social-network features for a non-profit research platform, including authentication, messaging, search filtering, and personalized news feeds. Worked on a small team using pair programming, with sprint planning sessions to define user stories held directly with the project owner.",
    tech: ["AWS Amplify", "DynamoDB", "Cognito", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "Face Recognition Web App",
    description:
      "A full-stack web app that detects faces in user-submitted images using the Clarifai API. Built with React on the frontend and Node, Express, and PostgreSQL on the backend. Includes user registration, sign-in, and persistent progress tracking. Deployed on Heroku.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Clarifai API", "Heroku"],
    github: [
      { label: "Frontend", url: "https://github.com/kvb160230/smartbrain-frontend" },
      { label: "Backend", url: "https://github.com/kvb160230/smartbrain-api" },
    ],
  },
  {
    title: "Root — Search Engine",
    description:
      "A search engine clone built to work through the fundamentals of web crawling, indexing, and result ranking. Supports text, image, and tag-based results, with crawled data stored in MySQL. Used Ajax to dynamically resurface popular results and replace broken images.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Ajax", "MySQL"],
    github: "https://github.com/kvb160230/rootsearchengine",
  },
];