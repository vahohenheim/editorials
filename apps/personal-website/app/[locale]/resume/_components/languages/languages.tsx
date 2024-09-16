import LanguageComponent from "../language/language";
import { LanguageUser } from "../../../../_models/language";
import SectionComponent from "../../../../_components/section/section";
import { getScopedI18n } from "../../../../../locales/server";

const LanguagesComponent = async ({
	languages
}: {
	languages: Array<LanguageUser>;
}) => {
  const scopedT = await getScopedI18n(`languages`);

  return (
    <SectionComponent title={scopedT('title')}>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        {languages.map((language, index) => <LanguageComponent key={index} language={language} />)}
      </div>
    </SectionComponent>

  );
};

export default LanguagesComponent;
