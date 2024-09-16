import { PersonalProject, PersonalProjectId, PersonalProjectStatus } from "../_models/personal-project";

export const PERSONAL_PROJECTS: Array<PersonalProject> = [
  {
    id: PersonalProjectId.EDITORIALS,
    status: PersonalProjectStatus.ACTIVE,
    icon: "📚",
    link: "https://github.com/vahohenheim/editorials"
  },
  {
    id: PersonalProjectId.NOTION_BLOG,
    status: PersonalProjectStatus.ACTIVE,
    icon: "📦",
    link: "https://github.com/vahohenheim/notion-blog"
  },
  {
    id: PersonalProjectId.FINANCE,
    status: PersonalProjectStatus.ARCHIVED,
    icon: "🏛️",
    link: "https://github.com/vahohenheim/personal-finance"
  }
];
