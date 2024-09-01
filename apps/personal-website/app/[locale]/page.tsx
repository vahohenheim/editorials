import styles from "./locale.module.css";
import CoverComponent from "../_components/cover/cover.component";
import { EXPERTISES } from "../_constants/resume.constants";
import { ExpertisesComponent } from "../_components/expertises/expertises.component";
import JsonLdProfilePageComponent from "../_components/jsonld/profil-page/profil-page.component";
import classnames from "classnames";
import JsonLdPortfolioComponent from "../_components/jsonld/portfolio/portfolio.component";
import { getDictionary } from "./dictionaries";
import AppearComponent from "../_components/appear/appear.component";
import { notFound } from "next/navigation";
import { SOCIAL_NETWORKS } from "../_constants/social-network.constants";
import { MAIN_BUTTON } from "../_constants/links";
import { CoverAlignment } from "../_components/cover/cover.model";

export const metadata = {
	title: "Front-end engineer | valentin bourreau",
	description: "Valentin Bourreau personal website"
};

const Home = async ({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }) => {
  const dict = await getDictionary(locale)

  if(!dict) {
    notFound();
  }

	return (
    <main className={classnames(styles.main)}>
      <JsonLdProfilePageComponent />
      <JsonLdPortfolioComponent />
      <div className="container mx-auto max-w-[900px]">
        <CoverComponent
          ontitle={dict.cover.ontitle}
          title={dict.cover.title}
          avatar="https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4"
          description={dict.cover.summary}
          buttons={MAIN_BUTTON}
          socialNetworks={SOCIAL_NETWORKS}
          alignment={CoverAlignment.CENTER}
        />
        <AppearComponent delay={0.5}>
          <ExpertisesComponent
            title={"Expertises"}
            expertises={EXPERTISES}
          />
        </AppearComponent>
      </div>
    </main>
  );
}

export default Home;
