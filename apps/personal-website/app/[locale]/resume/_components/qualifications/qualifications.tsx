import QualificationComponent from "../qualification/qualification"
import { QualificationsComponentProps } from "./qualifications.model"
import SectionComponent from "../../../../_components/section/section";

const QualificationsComponent = ({ title, qualifications }: QualificationsComponentProps) => {
    return (
      <SectionComponent title={title}>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
          {qualifications.map((qualification, index) => <QualificationComponent key={index} qualification={qualification} />)}
        </div>
      </SectionComponent>
    )
}

export default QualificationsComponent;
