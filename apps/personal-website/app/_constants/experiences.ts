import { COMPANIES } from "./companies";
import { CompanyId } from "../_models/company";
import { Experience } from "../_models/experience";
import { RoleId } from "../_models/role";
import { Mission, MissionId } from "../_models/mission";

export const MISSIONS: Record<MissionId, Mission> = {
  [MissionId.EP_LEAD_FRONT_END]: {
    id: MissionId.EP_LEAD_FRONT_END,
    roles: [RoleId.FRONT_END_LEAD],
    startDate: '2023-01-01',
    endDate: '2024-09-01',
  },
  [MissionId.EP_ENGINEER_FRONT_END]: {
    id: MissionId.EP_ENGINEER_FRONT_END,
    roles: [RoleId.FRONT_END_ENGINEER],
    startDate: '2021-06-01',
    endDate: '2022-12-31',
  },
  [MissionId.CONSERTO_ENGINEER_FRONT_END]: {
    id: MissionId.CONSERTO_ENGINEER_FRONT_END,
    roles: [RoleId.FRONT_END_ENGINEER],
    startDate: '2020-02-01',
    endDate: '2021-06-01',
  },
  [MissionId.TROOPERS_ENGINEER_FRONT_END]: {
    id: MissionId.TROOPERS_ENGINEER_FRONT_END,
    roles: [RoleId.FRONT_END_DEVELOPER],
    startDate: '2018-06-01',
    endDate: '2020-01-01',
  },
  [MissionId.CONNEXING_FULL_STACK_DEVELOPER_UI_UX_DESIGNER]: {
    id: MissionId.CONNEXING_FULL_STACK_DEVELOPER_UI_UX_DESIGNER,
    roles: [RoleId.FULL_STACK_DEVELOPER, RoleId.UI_UX_DESIGNER],
    startDate: '2016-09-01',
    endDate: '2018-09-01',
  },
  [MissionId.NANTES_METROPOLE_TEACHER]: {
    id: MissionId.NANTES_METROPOLE_TEACHER,
    roles: [RoleId.TEACHER],
    startDate: '2018-05-01',
    endDate: '2018-09-01',
  },
  [MissionId.ANJOU_FULL_STACK_DEVELOPER]: {
    id: MissionId.ANJOU_FULL_STACK_DEVELOPER,
    roles: [RoleId.FULL_STACK_DEVELOPER],
    startDate: '2015-09-01',
    endDate: '2016-09-01',
  },
  [MissionId.DROUAULT_SOFTWARE_DEVELOPER_HELP_DESK]: {
    id: MissionId.DROUAULT_SOFTWARE_DEVELOPER_HELP_DESK,
    roles: [RoleId.SOFTWARE_DEVELOPER, RoleId.HELP_DESK],
    startDate: '2013-09-01',
    endDate: '2015-09-01',
  },
}

export const EXPERIENCES: Array<Experience> = [
    {
        company: COMPANIES[CompanyId.EP],
        startDate: '2021-06-01',
        endDate: '2024-09-01',
        missions: [
          MISSIONS['ep-lead-front-end'],
          MISSIONS['ep-engineer-front-end']
        ]
    },
    {
        company: COMPANIES[CompanyId.CONSERTO],
        startDate: '2020-02-01',
        endDate: '2021-06-01',
        missions: [MISSIONS['conserto-engineer-front-end']]
    },
    {
      company: COMPANIES[CompanyId.TROOPERS],
      startDate: '2018-06-01',
      endDate: '2020-01-01',
      missions: [MISSIONS['troopers-engineer-front-end']]
    }
    ,
    {
      company: COMPANIES[CompanyId.NANTES_METROPOLE],
      startDate: '2018-05-01',
      endDate: '2018-09-01',
      missions: [MISSIONS['nantes-metropole-teacher']]
    },
    {
      company: COMPANIES[CompanyId.CONNEXING],
      startDate: '2016-09-01',
      endDate: '2018-09-01',
      missions: [MISSIONS['connexing-full-stack-developer-ui-ux-designer']]
    },
    {
      company: COMPANIES[CompanyId.ANJOU],
      startDate: '2015-09-01',
      endDate: '2016-09-01',
      missions: [MISSIONS['anjou-full-stack-developer']]
    },
    {
      company: COMPANIES[CompanyId.DROUAULT],
      startDate: '2013-09-01',
      endDate: '2015-09-01',
      missions: [MISSIONS['drouault-software-developer-help-desk']]
    }
]
