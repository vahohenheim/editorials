import Image from "next/image";
import styles from "./resume.module.css";
import avatar from "./../../public/avatar.png";
import valentinbourreau from "./../../public/valentinbourreau.svg";
import { ExperiencesComponent } from "./_components/experiences/experiences.component";
import { EXPERIENCES, EXPERTISES, QUALIFICATIONS } from "./resume.constants";
import { QualificationsComponent } from "./_components/qualifications/qualifications.component";
import { ExpertisesComponent } from "./_components/expertises/expertises.component";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";
import CoverComponent from "../_components/cover/cover.component";
import { CoverAlignment } from "../_components/cover/cover.model";

export const metadata = {
	title: "Resume | valentin bourreau",
	description: "sample of expertises, experiences and qualifications"
};

export default function Resume() {
	return (
		<main className="container">
			<CoverComponent
				title="Front-end engineer"
				alignment={CoverAlignment.LEFT}
			/>
			<ExpertisesComponent title={"Expertises"} expertises={EXPERTISES} />
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
