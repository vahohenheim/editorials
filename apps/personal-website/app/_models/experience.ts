import { Company } from "./company";

export type Experience = {
    company: Company;
    startDate: string;
    endDate: string;
    duration: string;
    roles: Array<Role>;
}

export type Role = {
  job: string;
  startDate: string;
  endDate: string;
  duration: string;
  content: string;
}

