import { LanguageUser } from "../../../../_models/language";
import { getScopedI18n } from "../../../../../locales/server";
import { LANGUAGES } from "../../../../_constants/languages";

const LanguageComponent = async ({
	language
}: {
	language: LanguageUser;
}) => {
  const laguageScopedT = await getScopedI18n(`languages.list.${language.id}`);
  const laguageLevelSscopedT = await getScopedI18n(`languages.level.${language.level}`);

  return (
    <div
      className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 rounded-lg">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
        <div
          className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
          <p
            className="text-2xl font-bold">
            {LANGUAGES[language.id].icon} {laguageScopedT('name')}
          </p>
          <p
            className="text-secondary-foreground">
            {laguageLevelSscopedT('name')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageComponent;
