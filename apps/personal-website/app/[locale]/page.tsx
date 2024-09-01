import Cover from "../_components/cover/cover";
import { EXPERTISES } from "../_constants/resume";
import { Expertises } from "../_components/expertises/expertises";
import JsonLdProfilePageComponent from "../_components/jsonld/profil-page/profil-page";
import JsonLdPortfolioComponent from "../_components/jsonld/portfolio/portfolio";
import { getDictionary } from "./dictionaries";
import AppearComponent from "../_components/appear/appear";
import { notFound } from "next/navigation";
import { SOCIAL_NETWORKS } from "../_constants/social-network";
import { MAIN_BUTTON } from "../_constants/links";
import { CoverAlignment } from "../_components/cover/cover.model";
import CompaniesComponent from "../_components/companies/companies";
import { Metadata } from "next";
import { COMPANIES } from "../_constants/companies";
import PersonalProjectsComponent from "../_components/personal-projects/personal-projects";

export function generateMetadata({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }): Metadata {
  return {
    title: "Front-end engineer",
    description: "Valentin Bourreau personal website",
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: "https://valentinbourreau.com",
      title: "Front-end engineer",
      description: "Valentin Bourreau personal website",
      images: [
        {
          url: "https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4",
          width: 120,
          height: 120,
          alt: "Valentin Bourreau profile picture",
        },
      ],
      siteName: "Valentin Bourreau",
    },
    twitter: {
      card: "summary_large_image",
      title: "Front-end engineer",
      description: "Valentin Bourreau personal website",
      images: [
        {
          url: "https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4",
          width: 120,
          height: 120,
          alt: "Valentin Bourreau profile picture",
        },
      ],
    },
  }
}

const Home = async ({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }) => {
  const dict = await getDictionary(locale)

  if(!dict) {
    notFound();
  }

	return (
    <main>
      <JsonLdProfilePageComponent />
      <JsonLdPortfolioComponent />
      <Cover
        ontitle={dict.cover.ontitle}
        title={dict.cover.title}
        avatar="https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4"
        description={dict.cover.summary}
        buttons={MAIN_BUTTON}
        socialNetworks={SOCIAL_NETWORKS}
        alignment={CoverAlignment.CENTER}
      />
      <AppearComponent delay={0.6}>
        <CompaniesComponent companies={Object.values(COMPANIES)} />
      </AppearComponent>
      <AppearComponent delay={0.3}>
        <Expertises
          title={"Expertises"}
          expertises={EXPERTISES}
        />
      </AppearComponent>
      <AppearComponent delay={0.3}>
        <PersonalProjectsComponent />
      </AppearComponent>
    </main>
  );
}

export default Home;
