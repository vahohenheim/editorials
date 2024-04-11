import github from "../public/social-networks/github.svg";
import dribbble from "../public/social-networks/dribbble.svg";
import behance from "../public/social-networks/behance.svg";
import linkedin from "../public/social-networks/linkedin.svg";
import CoverComponent from "./_components/cover/cover.component";
import { notFound } from "next/navigation";
import { NotionApi } from "notion/src/notion.api";
import { NotionBlockComponent } from "@editorials/notion/server";
import { Block } from "notion-api-types/responses";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";
import { ExpertiseComponent } from "./resume/_components/expertise/expertise.component";

export const metadata = {
	title: "Front-end engineer | valentin bourreau",
	description: "Valentin Bourreau personal website"
};

export default async function Home() {
	const data = await NotionApi.fetchPageData(
		"07616a8ec37648718a12910fe055a224"
	);

	if (!data.page || !data.blocks) {
		notFound();
	}

	return (
		<main className="container">
			<CoverComponent
				title={
					<>
						Discover, <br />
						Collaborate <br />
						and <span className="text-primary">Innovate</span>
					</>
				}
				description={<>Front-end engineer</>}
				socialNetworks={[
					{
						src: linkedin,
						alt: "linkedin logo",
						link: "https://www.linkedin.com/in/valentin-bourreau"
					},
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
			<div className="my-7 text-muted-foreground">
				{data.blocks?.results.map((result: Block, index: number) => (
					<NotionBlockComponent key={index} result={result} />
				))}
			</div>
			<div>
				<HeadingComponent tag={HeadingTags.H2} className="mb-8">
					Expertises
				</HeadingComponent>
				<div className="gap-6">
					<ExpertiseComponent
						title="Static generation anthousiasm"
						text="Working on Next.js 14, for build optimised internet of tomorrow for companies."
					/>
					<ExpertiseComponent
						title="Static generation anthousiasm"
						text="Working on Next.js 14, for build optimised internet of tomorrow for companies."
					/>
					<ExpertiseComponent
						title="Static generation anthousiasm"
						text="Working on Next.js 14, for build optimised internet of tomorrow for companies."
					/>
					<ExpertiseComponent
						title="Static generation anthousiasm"
						text="Working on Next.js 14, for build optimised internet of tomorrow for companies."
					/>
				</div>
			</div>
		</main>
	);
}
