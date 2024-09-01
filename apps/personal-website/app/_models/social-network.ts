export type SocialNetwork = {
  type: SocialNetworkType;
  alt: string;
  link: string;
}

export enum SocialNetworkType {
  LINKEDIN = 'LINKEDIN',
  GITHUB = 'GITHUB',
  DRIBBBLE = 'DRIBBBLE',
  BEHANCE = 'BEHANCE',
}
