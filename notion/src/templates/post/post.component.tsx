import { NotionBlockComponent } from "../../components/notion-block/notion-block.component";
import styles from "./post.module.css";
import { NotionTitleComponent } from "../../components/notion-title/notion-title.component";
import { Block } from "notion-api-types/responses";
import { PageNotionApi } from "../../api";
import { notFound } from "next/navigation";

export const Post = async ({
	postId
}: {
	postId: string;
}) => {
	const [page, blocks] = await PageNotionApi.fetchData(postId);

  if(!page || !blocks) {
    return notFound();
  }

	return (
		<main className={`${styles.main} container max-w-[800px]`}>
			<NotionTitleComponent page={page} />
			{blocks?.results.map((result: Block, index: number) => (
				<NotionBlockComponent key={index} result={result} />
			))}
		</main>
	);
};
