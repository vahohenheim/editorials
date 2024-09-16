import { ExperienceComponentProps } from "./experience.model";
import CompanyIconComponent from "../../../../_components/company-icon/company-icon";
import MissionComponent from "../mission/mission";
import DurationComponent from "../duration/duration";
import { getScopedI18n } from "../../../../../locales/server";
import dayjs from "dayjs";
import { formatDateDifference } from "apps/personal-website/app/_utils/format-date-difference";

const ExperienceComponent = async ({
  lang,
	experience
}: ExperienceComponentProps) => {
  const companyScopedT = await getScopedI18n(`companies.list.${experience.company.id}`);

	return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
        <CompanyIconComponent company={experience.company} className="shrink-0 fill-gray-700 dark:fill-gray-300 cursor-pointer mb-2" height={40}/>
        <p className="self-stretch flex-grow-0 flex-shrink-0 text-2xl">
            <span className="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-bold">
              {companyScopedT('name')}
            </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 text-2xl">
              , {experience.company.location}
            </span>
        </p>
        <p
          className="self-stretch flex-grow-0 flex-shrink-0 text-base font-semibold">
          <DurationComponent startDate={dayjs(experience.startDate).format('MMMM YYYY')} endDate={dayjs(experience.endDate).format('MMMM YYYY')} duration={formatDateDifference(dayjs(experience.startDate), dayjs(experience.endDate), lang)} />
        </p>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
        {experience.missions.map((mission, index) => <MissionComponent key={index} mission={mission} lang={lang} />)}
      </div>
    </div>
  );
};

export default ExperienceComponent;
