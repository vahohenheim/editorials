import { NotionBlockComponent } from "../../components/notion-block/notion-block.component";
import styles from "./post.module.css";
import { NotionTitleComponent } from "../../components/notion-title/notion-title.component";
import { Block } from "notion-api-types/responses";
import { NotionApi } from "notion/src/notion.api";
import { notFound } from "next/navigation";

export const Post = async ({
	postId,
	hasParent
}: {
	postId: string;
	hasParent?: boolean;
}) => {
	const data = await NotionApi.fetchPageData(postId);

	if (!data.page || !data.blocks) {
		notFound();
	}

	return (
		<main className={`${styles.main} container max-w-[800px]`}>
			<NotionTitleComponent page={data.page} hasParent={hasParent} />
			{data.blocks?.results.map((result: Block, index: number) => (
				<NotionBlockComponent key={index} result={result} />
			))}
		</main>
	);
};
