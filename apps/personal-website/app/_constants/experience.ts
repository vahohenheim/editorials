import { COMPANIES } from "./companies";
import { CompanyId } from "../_models/company";
import { Experience } from "../_models/experience";

export const EXPERIENCES: Array<Experience> = [
    {
        company: COMPANIES[CompanyId.EP],
        startDate: 'jun. 2021',
        endDate: 'sep. 2024',
        duration: '3&nbsp;years and 4 months',
        roles: [
            {
                job: 'lead front-end',
                startDate: 'sep. 2023',
                endDate: 'sep. 2024',
                duration: '1&nbsp;year',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.<br/><br/> Est placerat in egestas erat imperdiet. Consectetur adipiscing elit ut aliquam purus sit amet. Tellus orci ac auctor augue mauris. Nec dui nunc mattis enim ut tellus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sollicitudin tempor id eu nisl nunc mi. Eu consequat ac felis donec et odio."
            },
            {
                job: 'front-end engineer',
                startDate: 'jun. 2021',
                endDate: 'aug. 2023',
                duration: '2&nbsp;years and 4 months',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.<br/><br/> Est placerat in egestas erat imperdiet. Consectetur adipiscing elit ut aliquam purus sit amet. Tellus orci ac auctor augue mauris. Nec dui nunc mattis enim ut tellus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Sollicitudin tempor id eu nisl nunc mi. Eu consequat ac felis donec et odio."
            }
        ]
    }
]
