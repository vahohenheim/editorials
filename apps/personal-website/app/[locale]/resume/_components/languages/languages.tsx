import LanguageComponent from "../language/language";
import { Language } from "../../../../_models/language";
import QualificationComponent from "../qualification/qualification";
import SectionComponent from "../../../../_components/section/section";

const LanguagesComponent = ({
  title,
	languages
}: {
  title: string;
	languages: Array<Language>;
}) => {
	return (
    <SectionComponent title={title}>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
        {languages.map((language, index) => <LanguageComponent key={index} language={language} />)}
      </div>
    </SectionComponent>

  );
};

export default LanguagesComponent;
