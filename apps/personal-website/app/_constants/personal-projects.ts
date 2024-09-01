import { PersonalProject, PersonalProjectStatus } from "../_models/personal-project";

export const PERSONAL_PROJECTS: Array<PersonalProject> = [
  {
    id: "studio",
    status: PersonalProjectStatus.COMING_SOON,
    icon: "🏛",
    title: "vah studio",
    description: "studio to build differently"
  },
  {
    id: "editorials",
    status: PersonalProjectStatus.ACTIVE,
    icon: "📚",
    title: "editorials",
    description: "NX project for editorial websites, with Nextjs and notion-adaptor.",
    link: "https://github.com/vahohenheim/editorials"
  },
  {
    id: "notion-blog",
    status: PersonalProjectStatus.ACTIVE,
    icon: "📦",
    title: "notion-blog",
    description: "starter nextjs project link to notion API .",
    link: "https://github.com/valentinbourreau/editorials"
  }
];
