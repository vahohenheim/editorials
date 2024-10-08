import Cover from "../_components/cover/cover";
import ExpertisesComponent from "../_components/expertises/expertises";
import JsonLdProfilePageComponent from "../_components/jsonld/profil-page/profil-page";
import JsonLdPortfolioComponent from "../_components/jsonld/portfolio/portfolio";
import AppearComponent from "../_components/appear/appear";
import { SOCIAL_NETWORKS } from "../_constants/social-network";
import { CoverAlignment } from "../_components/cover/cover.model";
import CompaniesComponent from "../_components/companies/companies";
import { Metadata } from "next";
import { COMPANIES } from "../_constants/companies";
import PersonalProjectsComponent from "../_components/personal-projects/personal-projects";
import { getScopedI18n } from "../../locales/server";
import { MetadataHelpers } from "../_helpers/metadata";
import { setStaticParamsLocale } from "next-international/server";

export async function generateMetadata({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }): Promise<Metadata> {
  setStaticParamsLocale(locale)
  return await MetadataHelpers.translateHomepage(locale)
}

const HomePage = async ({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }) => {
  setStaticParamsLocale(locale)
  const scopedT = await getScopedI18n('home')

	return (
    <main>
      <JsonLdProfilePageComponent />
      <JsonLdPortfolioComponent />
      <Cover
        ontitle={scopedT('ontitle')}
        title={scopedT('title')}
        description={scopedT('summary')}
        avatar="https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4"
        action={{
          label: scopedT('cta'),
          link: "mailto:contact@valentinbourreau.com",
          variant: "default"
        }}
        socialNetworks={SOCIAL_NETWORKS}
        alignment={CoverAlignment.CENTER}
      />
      <AppearComponent delay={0.4}>
        <CompaniesComponent companies={Object.values(COMPANIES)} />
      </AppearComponent>
      <AppearComponent delay={0.5}>
        <ExpertisesComponent />
      </AppearComponent>
      <AppearComponent delay={0.3}>
        <PersonalProjectsComponent />
      </AppearComponent>
    </main>
  );
}

export default HomePage;
