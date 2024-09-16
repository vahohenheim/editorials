import { QualificationComponentProps } from "./qualification.model";
import { getScopedI18n } from "../../../../../locales/server";
import dayjs from "dayjs";

const QualificationComponent = async ({
	qualification
}: QualificationComponentProps) => {
  const qualificationScopedT = await getScopedI18n(`qualifications.list.${qualification.id}`);
  const qualificationLevelScopedT = await getScopedI18n(`qualifications.level.${qualification.level}`);
  const schoolScopedT = await getScopedI18n(`schools.list.${qualification.school.id}`);


  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 rounded-lg">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div
            className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
            <p
              className="text-2xl font-bold">
              🎓 {qualificationScopedT('label')}
            </p>
            <p
              className="text-secondary-foreground">
              {qualificationLevelScopedT('name')} | {schoolScopedT('name')}, {qualification.school.location} | {dayjs(qualification.obtainDate).format('YYYY')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationComponent;
