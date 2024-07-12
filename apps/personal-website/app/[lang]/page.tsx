import styles from "../page.module.css";
import github from "../../public/social-networks/github.svg";
import dribbble from "../../public/social-networks/dribbble.svg";
import behance from "../../public/social-networks/behance.svg";
import CoverComponent from "../_components/cover/cover.component";
import { EXPERIENCES, EXPERTISES, QUALIFICATIONS } from "../_constants/resume.constants";
import { ExpertisesComponent } from "../_components/expertises/expertises.component";
import { ExperiencesComponent } from "../_components/experiences/experiences.component";
import { QualificationsComponent } from "../_components/qualifications/qualifications.component";
import JsonLdProfilePageComponent from "../_components/jsonld/profil-page/profil-page.component";
import classnames from "classnames";
import JsonLdPortfolioComponent from "../_components/jsonld/portfolio/portfolio.component";
import { getDictionary } from "./dictionaries";
import { CoverSocialNetworkType } from "../_components/cover/cover.model";
import AppearComponent from "../_components/appear/appear.component";

export const metadata = {
	title: "Front-end engineer | valentin bourreau",
	description: "Valentin Bourreau personal website"
};

const Home = async ({ params: { lang } }: { params: { lang: 'en' | 'fr' } }) => {
  const dict = await getDictionary(lang)

	return (
    <main className={classnames(styles.main)}>
      <JsonLdProfilePageComponent />
      <JsonLdPortfolioComponent />
      <div className="max-w-[900px] mx-auto container">
        <CoverComponent
          title={dict.cover.title}
          avatar="https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4"
          description={
            <>
              Pationate by crafting static websites and web
              applications.
              <br />
              Mainly work on <b>React 18</b>, <b>Next.js 14</b>{" "}
              and <b>Angular 17</b>.
            </>
          }
          buttons={[
            {
              label: "Connect with me",
              link: "https://www.linkedin.com/in/valentin-bourreau/"
            }
          ]}
          socialNetworks={[
            {
              type: CoverSocialNetworkType.GITHUB,
              alt: "github logo",
              link: "https://github.com/vahohenheim"
            },
            {
              type: CoverSocialNetworkType.DRIBBBLE,
              alt: "dribbble logo",
              link: "https://dribbble.com/valentinbourreau"
            },
            {
              type: CoverSocialNetworkType.BEHANCE,
              alt: "behance logo",
              link: "https://www.behance.net/valentinbourreau"
            }
          ]}
        />
      </div>
      <div className="container-mobile">
        <AppearComponent delay={0.1}>
          <ExpertisesComponent
            title={"Expertises"}
            expertises={EXPERTISES}
          />
        </AppearComponent>
      </div>
      <div className="max-w-[900px] mx-auto container">
        <ExperiencesComponent
          title={"Job Experiences"}
          experiences={EXPERIENCES}
        />
      </div>
      <div className="max-w-[900px] mx-auto container">
        <QualificationsComponent
          title={"Qualifications"}
          qualifications={QUALIFICATIONS}
        />
      </div>




    </main>
  );
}

export default Home;
