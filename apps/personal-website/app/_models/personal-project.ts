export type PersonalProject = {
  id: PersonalProjectId;
  icon: string;
  status: PersonalProjectStatus;
  link?: string;
};

export enum PersonalProjectStatus {
  COMING_SOON = 'coming_soon',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  COMPLETED = 'completed',
}

export enum PersonalProjectId {
  EDITORIALS = "editorials",
  NOTION_BLOG = "notion-blog",
  FINANCE = "finance",
}
