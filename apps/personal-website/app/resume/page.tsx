import { ExperiencesComponent } from "./_components/experiences/experiences.component";
import { EXPERIENCES, EXPERTISES, QUALIFICATIONS } from "./resume.constants";
import { QualificationsComponent } from "./_components/qualifications/qualifications.component";
import { ExpertisesComponent } from "./_components/expertises/expertises.component";
import CoverComponent from "../_components/cover/cover.component";
import { CoverAlignment } from "../_components/cover/cover.model";
import { JsonLdHelper } from "../_helpers/json-ld/json-ld.helper";
import { JsonLdAuthorType } from "../_helpers/json-ld/json-ld.model";

export const metadata = {
	title: "Resume | valentin bourreau",
	description:
		"Numerical resume version. Introduce personal expertises, experiences and qualifications"
};

const ResumeProfileComponent = () => {
	const profilePageJsonLd = JsonLdHelper.generateProfilePage(
		[
			
		],
		"",
		""
	);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(profilePageJsonLd)
			}}
		/>
	);
};

export default function Resume() {
	return (
		<>
			<ResumeProfileComponent />
			<main className="max-w-[900px] mx-auto">
				<div className="container">
					<CoverComponent
						title="Front-end engineer"
						alignment={CoverAlignment.LEFT}
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
				</div>
			</main>
		</>
	);
}
