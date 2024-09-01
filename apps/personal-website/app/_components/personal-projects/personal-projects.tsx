import { PERSONAL_PROJECTS } from "../../_constants/personal-projects";
import SectionComponent from "../section/section";
import PersonalProjectComponent from "../personal-project/personal-project";

const PersonalProjectsComponent = () => {
    return (
      <SectionComponent title="personal projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-stretch gap-6">
          {PERSONAL_PROJECTS.map((project) => <PersonalProjectComponent key={project.id} project={project} />)}
        </div>
      </SectionComponent>
    )
}

export default PersonalProjectsComponent;
