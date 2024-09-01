export type PersonalProject = {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: PersonalProjectStatus;
  link?: string;
};

export enum PersonalProjectStatus {
  COMING_SOON = 'coming_soon',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
