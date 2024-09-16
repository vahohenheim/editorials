import { Experience } from "../../../../_models/experience";

export interface ExperiencesComponentProps {
    lang: 'fr' | 'en';
    experiences: Array<Experience>;
}
