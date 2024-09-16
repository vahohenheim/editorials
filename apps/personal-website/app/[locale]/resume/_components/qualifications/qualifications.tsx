import QualificationComponent from "../qualification/qualification"
import { QualificationsComponentProps } from "./qualifications.model"
import SectionComponent from "../../../../_components/section/section";
import { getScopedI18n } from "../../../../../locales/server";

const QualificationsComponent = async ({ qualifications }: QualificationsComponentProps) => {
  const scopedT = await getScopedI18n(`qualifications`);

    return (
      <SectionComponent title={scopedT('title')}>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
          {qualifications.map((qualification, index) => <QualificationComponent key={index} qualification={qualification} />)}
        </div>
      </SectionComponent>
    )
}

export default QualificationsComponent;
