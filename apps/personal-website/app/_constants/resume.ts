import { Qualification } from '../_models/qualification';
import { Expertise } from '../_models/expertise';
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
        title: 'engineer developer',
        text: 'search, create, develop, conceptualized architecture, documented, make REX, tests.<br/><br/>I work mainly on front-end part, but i make my studies in back-end developpement, and i reponse to some full-stack solutions today.'
    },
    {
        title: 'lead tech team',
        text: 'create membership, united around a goal or work/research together to create common best practices.<br/><br/>It’s also about manage projects, budgets and cross-functional team leadership (dev, design, audience, acquisition, data analyst and engineer, product manager/owner)'
    },
    {
        title: 'UX conception',
        text: 'whatever about it is, a new feature or team organization, user experience is everywere.<br/><br/>During my studies, i obtain a degree on design. I cotinue to use this experience to challenge my organization works with my team, and from my research.'
    }
]
