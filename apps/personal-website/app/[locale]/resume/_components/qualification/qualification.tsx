import { QualificationComponentProps } from "./qualification.model";

const QualificationComponent = ({
	qualification
}: QualificationComponentProps) => {
	return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 rounded-lg">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <div
            className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
            <p
              className="text-2xl font-bold">
              🎓 {qualification.name}
            </p>
            <p
              className="text-secondary-foreground">
              {qualification.level} | {qualification.school.name}, {qualification.school.location} | {qualification.obtainDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationComponent;
