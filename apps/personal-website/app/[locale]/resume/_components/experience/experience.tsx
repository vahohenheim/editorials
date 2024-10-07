import { ExperienceComponentProps } from "./experience.model";
import CompanyIconComponent from "../../../../_components/company-icon/company-icon";
import MissionComponent from "../mission/mission";
import { getScopedI18n } from "../../../../../locales/server";


const ExperienceComponent = async ({
  lang,
	experience
}: ExperienceComponentProps) => {
  const companyScopedT = await getScopedI18n(`companies.list.${experience.company.id}`);

	return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 [&:not(:last-child)]:border-b-2 pb-10">
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
        <div className="shrink-0 mb-2 bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2">
          <CompanyIconComponent company={experience.company} className="fill-gray-700 dark:fill-gray-300" height={40}/>
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 text-2xl">
          <span className="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-bold">
            {companyScopedT('name')}
          </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 text-2xl">
              , {experience.company.location}
            </span>
        </p>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
        {experience.missions.map((mission, index) => <MissionComponent key={index} mission={mission} lang={lang} />)}
      </div>
    </div>
  );
};

export default ExperienceComponent;
