import { Language } from "../../../../_models/language";

const LanguageComponent = ({
	language
}: {
	language: Language;
}) => {
	return (
    <div
      className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 rounded-lg">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
        <div
          className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
          <p
            className="text-2xl font-bold">
            {language.icon} {language.name}
          </p>
          <p
            className="text-secondary-foreground">
            {language.level}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageComponent;
