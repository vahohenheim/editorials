export type Company = {
  id: CompanyId;
  url: string;
  name: string;
  location: string;
}


export enum CompanyId {
  EP = 'ep',
  CONSERTO = 'conserto',
  TROOPERS = 'troopers',
  CONNEXING = 'connexing',
  ANJOU = 'anjou',
  DROUAULT = 'drouault'
}
