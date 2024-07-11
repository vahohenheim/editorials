import styles from "./page.module.css";
import github from "../public/social-networks/github.svg";
import dribbble from "../public/social-networks/dribbble.svg";
import behance from "../public/social-networks/behance.svg";
import CoverComponent from "./_components/cover/cover.component";
import { EXPERIENCES, EXPERTISES, QUALIFICATIONS } from "./_constants/resume.constants";
import { ExpertisesComponent } from "./_components/expertises/expertises.component";
import { ExperiencesComponent } from "./_components/experiences/experiences.component";
import { QualificationsComponent } from "./_components/qualifications/qualifications.component";
import JsonLdProfilePageComponent from "./_components/jsonld/profil-page/profil-page.component";
import classnames from "classnames";
import JsonLdPortfolioComponent from "./_components/jsonld/portfolio/portfolio.component";

export const metadata = {
	title: "Front-end engineer | valentin bourreau",
	description: "Valentin Bourreau personal website"
};

export default function Home() {
	return (
		<main className={classnames(styles.main, "max-w-[900px] mx-auto")}>
      <JsonLdProfilePageComponent />
      <JsonLdPortfolioComponent />
      <CoverComponent
        title="Front-end engineer"
        avatar="https://avatars.githubusercontent.com/u/15048034?s=400&u=496078e2a68aaa3ea7e53c8eb2de313bed528b65&v=4"
        description={
          <>
            Pationate by crafting static websites and web
            applications.
            <br />
            Mainly work on <b>React 18</b>, <b>Next.js 14</b>{" "}
            and <b>Angular 17</b>. A Javacript lover.
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
            src: github,
            alt: "github logo",
            link: "https://github.com/vahohenheim"
          },
          {
            src: dribbble,
            alt: "dribbble logo",
            link: "https://dribbble.com/valentinbourreau"
          },
          {
            src: behance,
            alt: "behance logo",
            link: "https://www.behance.net/valentinbourreau"
          }
        ]}
      />
      <ExpertisesComponent
        title={"Expertises"}
        expertises={EXPERTISES}
      />
      <ExperiencesComponent
        title={"Job Experiences"}
        experiences={EXPERIENCES}
      />
      <QualificationsComponent
        title={"Qualifications"}
        qualifications={QUALIFICATIONS}
      />
		</main>
	);
}
