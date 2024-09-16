import JsonLdProfilePageComponent from "../../_components/jsonld/profil-page/profil-page";
import Cover from "../../_components/cover/cover";
import { CoverAlignment } from "../../_components/cover/cover.model";
import AppearComponent from "../../_components/appear/appear";
import ExperiencesComponent from "./_components/experiences/experiences";
import { EXPERIENCES } from "../../_constants/experiences";
import QualificationsComponent from "./_components/qualifications/qualifications";
import LanguagesComponent from "./_components/languages/languages";
import { USER_LANGUAGES } from "../../_constants/languages";
import { getScopedI18n } from "../../../locales/server";
import ExpertisesComponent from "../../_components/expertises/expertises";
import { Metadata } from "next";
import { RESUME_METADATA } from "./metadata";
import { QUALIFICATIONS } from "../../_constants/qualifications";

export function generateMetadata({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }): Metadata {
  return { ...RESUME_METADATA, openGraph: { ...RESUME_METADATA.openGraph, locale: locale === "en" ? "en_US" : "fr_FR" } }
}

const ResumePage = async ({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }) => {
  const scopedT = await getScopedI18n('resume')

  return (
    <main>
      <JsonLdProfilePageComponent />
      <Cover
        title={scopedT('title')}
        description={scopedT('summary')}
        avatar="https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4"
        action={{
          label: scopedT('cta'),
          link: "/",
          variant: "default"
        }}
        alignment={CoverAlignment.LEFT}
      />
      <AppearComponent delay={0.3}>
        <ExpertisesComponent hasLinkToResume={false} />
      </AppearComponent>
      <ExperiencesComponent experiences={EXPERIENCES} lang={locale} />
      <QualificationsComponent qualifications={QUALIFICATIONS} />
      <LanguagesComponent languages={USER_LANGUAGES} />
    </main>
  )
};

export default ResumePage;
