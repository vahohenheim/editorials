import ep from '../../public/experiences/ep.svg';
import conserto from '../../public/experiences/conserto.png';
import troopers from '../../public/experiences/troopers.png';
import connexing from '../../public/experiences/connexing.png';
import anjou from '../../public/experiences/anjou.png';
import drouault from '../../public/experiences/drouault.png';
import { Experience } from '../models/experience';
import { Qualification } from '../models/qualification';
import { Expertise } from '../models/expertise';

export const EXPERIENCES: Array<Experience> = [
    {
        tag: 'current job', 
        icon: ep, 
        job: 'Front-end engineer', 
        entreprise: 'EP', 
        startDate: 'jun. 2021',
        endDate: 'Today',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.<br/><br/> Est placerat in egestas erat imperdiet. Consectetur adipiscing elit ut aliquam purus sit amet. Tellus orci ac auctor augue mauris. Nec dui nunc mattis enim ut tellus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sollicitudin tempor id eu nisl nunc mi. Eu consequat ac felis donec et odio.", 
    },
    {
        icon: conserto, 
        job: 'Front-end engineer', 
        entreprise: 'Conserto', 
        startDate: 'feb. 2020',
        endDate: 'jun. 2021',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.", 
    },
    {
        icon: troopers, 
        job: 'Front-end developer', 
        entreprise: 'Troopers Agency', 
        startDate: 'feb. 2020',
        endDate: 'jun. 2021', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.", 
    },
    {
        icon: connexing, 
        job: 'Graphic designer', 
        entreprise: 'Connexing', 
        startDate: 'feb. 2020',
        endDate: 'jun. 2021', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", 
    },
    {
        icon: anjou, 
        job: 'Analyst developer', 
        entreprise: 'Département de Maine-et-Loire', 
        startDate: 'feb. 2020',
        endDate: 'jun. 2021', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", 
    },
    {
        icon: drouault, 
        job: 'Admin system and software developer', 
        entreprise: 'Drouault', 
        startDate: 'feb. 2020',
        endDate: 'jun. 2021', 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.", 
    }
]

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
        title: 'Jamstack propagandist',
        text: 'I work on this architecture from 4 years. The best improve is a static website run 150k static pages. I use mainly Next.js, and i ready to `app/` directory.'
    },
    {
        title: 'Design System manager',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]