import { PersonalProjectStatus } from "../../_models/personal-project";
import { Badge } from "@editorials/ui/server";
import { getScopedI18n } from "../../../locales/server";

const BadgePersonalProjectComponent = async ({ status }: { status: PersonalProjectStatus }) => {
  const scopedT = await getScopedI18n('personal-projects.status');

  switch (status) {
    case PersonalProjectStatus.COMING_SOON:
      return <Badge variant="outline">{scopedT('coming-soon')}</Badge>;
    case PersonalProjectStatus.ACTIVE:
      return <Badge variant="outline" className="gap-1.5">
        <svg
          width="9"
          height="9"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <circle cx="3" cy="3" r="3" fill="#4F7EFF"></circle>
        </svg>
        {scopedT('active')}
      </Badge>;
    case PersonalProjectStatus.ARCHIVED:
      return <Badge variant="outline" className="gap-1.5">
        <svg
          width="9"
          height="9"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <circle cx="3" cy="3" r="3" fill="#EFB74F"></circle>
        </svg>
        {scopedT('archived')}
      </Badge>;
    default:
      return <></>;
  }
};

export default BadgePersonalProjectComponent;
