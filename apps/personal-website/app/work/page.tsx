import { NotionApi, NotionBlockComponent } from "@editorials/notion/server";
import { notFound } from "next/navigation";
import CoverComponent from "../_components/cover/cover.component";
import { Block } from "notion-api-types/responses";

const WorkPage = async () => {
	const data = await NotionApi.fetchPageData(
		"ef26434fcbfc47449186bc7b008ccdd4"
	);

	if (!data.page || !data.blocks) {
		notFound();
	}

	return (
		<main className={"container"}>
			<CoverComponent title="Work" />
			<div className="my-5">
				{data.blocks?.results.map((result: Block, index: number) => (
					<NotionBlockComponent key={index} result={result} />
				))}
			</div>
		</main>
	);
};

export default WorkPage;
