import { StaticImageData } from "next/image";

export interface Experience {
    tag?: string;
    icon: StaticImageData;
    job: string;
    entreprise: string;
    startDate: string;
    endDate: string;
    text: string;
}