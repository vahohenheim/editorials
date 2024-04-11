import { NotionApi, NotionBlockComponent } from "@editorials/notion/server";
import { notFound } from "next/navigation";
import CoverComponent from "../_components/cover/cover.component";
import { Block } from "notion-api-types/responses";

const AboutPage = async () => {
	const data = await NotionApi.fetchPageData(
		"497503fa1948481d8ff4a76f1c575378"
	);

	if (!data.page || !data.blocks) {
		notFound();
	}

	return (
		<main className={"container"}>
			<CoverComponent title="About" />
			<div className="my-5">
				{data.blocks?.results.map((result: Block, index: number) => (
					<NotionBlockComponent key={index} result={result} />
				))}
			</div>
		</main>
	);
};

export default AboutPage;
