import SectionComponent from "../../../../_components/section/section";
import { ExperiencesComponentProps } from "./experiences.model";
import ExperienceComponent from "../experience/experience";
import { getScopedI18n } from "../../../../../locales/server";

const ExperiencesComponent = async ({
  lang,
	experiences
}: ExperiencesComponentProps) => {
  const scopedT = await getScopedI18n('experiences');

  return (
    <SectionComponent
      title={scopedT('title')}>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-10">
        {experiences.map((experience, index) => <ExperienceComponent key={index} experience={experience} lang={lang} />)}
      </div>
    </SectionComponent>
	);
};

export default ExperiencesComponent;
