import { Qualification } from '../_models/qualification';
import { Expertise, ExpertiseId } from "../_models/expertise";
import { JsonLdAuthor, JsonLdAuthorType } from '../_helpers/json-ld/json-ld.model';

export const AUTHOR: JsonLdAuthor = {
    avatar: "",
    firstname: "Valentin",
    lastname: "Bourreau",
    type: JsonLdAuthorType.PERSON,
    link: "https://valentinbourreau.com",
    job: "Front-end Engineer",
    description:
        "Numerical resume version. Introduce personal expertises, experiences and qualifications"
}

export const QUALIFICATIONS: Array<Qualification>  = [
    {
        name: 'Project manager in IT',
        obtainDate: 'oct. 2019',
        level: 'RNCP Level I',
        school: {
            name: 'IMIE',
            location: 'Nantes, France'
        }
    },
    {
        name: 'Analyst and webdeveloper',
        obtainDate: 'oct. 2018',
        level: 'RNCP Level II',
        school: {
            name: 'IMIE',
            location: 'Nantes, France'
        }
    },
    {
        name: 'Product designer',
        obtainDate: 'oct. 2018',
        level: 'RNCP Level II',
        school: {
            name: 'IMIE',
            location: 'Nantes, France'
        }
    },
    {
        name: 'Software developer',
        obtainDate: 'sep. 2016',
        level: 'University degree',
        school: {
            name: 'Nantes University',
            location: 'Nantes, France'
        }
    }
]

export const EXPERTISES: Array<Expertise>  = [
    {
        id: ExpertiseId.ENGINEER_DEVELOPER
    },
    {
        id: ExpertiseId.LEAD_TECH_TEAM
    },
    {
        id: ExpertiseId.UX_CONCEPTION
    }
]
