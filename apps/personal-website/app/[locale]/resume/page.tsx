import JsonLdProfilePageComponent from "../../_components/jsonld/profil-page/profil-page";
import JsonLdPortfolioComponent from "../../_components/jsonld/portfolio/portfolio";
import Cover from "../../_components/cover/cover";
import { RETURN_BUTTON } from "../../_constants/links";
import { CoverAlignment } from "../../_components/cover/cover.model";
import { Expertises } from "../../_components/expertises/expertises";
import { EXPERTISES, QUALIFICATIONS } from "../../_constants/resume";
import AppearComponent from "../../_components/appear/appear";
import Experiences from "./_components/experiences/experiences";
import { EXPERIENCES } from "../../_constants/experience";
import QualificationsComponent from "./_components/qualifications/qualifications";
import LanguagesComponent from "./_components/languages/languages";
import LANGUAGES from "../../_constants/languages";
import { getScopedI18n } from "../../../locales/server";

const ResumePage = async ({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }) => {
  const scopedT = await getScopedI18n('resume')

  return (
    <main>
      <JsonLdProfilePageComponent />
      <JsonLdPortfolioComponent />
      <Cover
        title={scopedT('title')}
        description={scopedT('summary')}
        avatar="https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4"
        buttons={RETURN_BUTTON}
        alignment={CoverAlignment.LEFT}

      />
      <AppearComponent delay={0.3}>
        <Expertises
          title={"Expertises"}
          expertises={EXPERTISES}
        />
      </AppearComponent>
      <Experiences title={"experiences"} experiences={EXPERIENCES} />
      <QualificationsComponent title={"qualifications"} qualifications={QUALIFICATIONS} />
      <LanguagesComponent title={"languages"} languages={LANGUAGES} />
    </main>
  )
};

export default ResumePage;
