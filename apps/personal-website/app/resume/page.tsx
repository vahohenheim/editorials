import Image from "next/image";
import styles from "./resume.module.css";
import avatar from "./../../public/avatar.png";
import valentinbourreau from "./../../public/valentinbourreau.svg";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import { EXPERIENCES, EXPERTISES, QUALIFICATIONS } from "./resume.constants";
import { QualificationsComponent } from "./components/qualifications/qualifications.component";
import { ExpertisesComponent } from "./components/expertises/expertises.component";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";

export default function Resume() {
	return (
		<main className="max-w-[900px] mx-auto">
			<div className="container">
				<div className={styles.cover}>
					<Image
						className={styles.avatar}
						src={avatar}
						alt="valentin bourreau picture"
						width={70}
						height={70}
						placeholder="blur"
					/>
					<Image
						className={styles.logo}
						src={valentinbourreau}
						alt="valentin bourreau logo"
						width={162}
						height={14}
						priority
					/>
					<HeadingComponent
						tag={HeadingTags.H1}
						className="mt-0 mb-2"
					>
						Front-end engineer
					</HeadingComponent>
				</div>
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
			</div>
		</main>
	);
}
