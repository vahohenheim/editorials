import SectionComponent from "../../../../_components/section/section";
import { ExperiencesComponentProps } from "./experiences.model";
import ExperienceComponent from "../experience/experience";

const ExperiencesComponent = ({
	title,
	experiences
}: ExperiencesComponentProps) => {
	return (
    <SectionComponent
      title={title}>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-10">
        {experiences.map((experience, index) => <ExperienceComponent key={index} experience={experience} />)}
      </div>
    </SectionComponent>
	);
};

export default ExperiencesComponent;
