import Image from "next/image";
import { NotionTitleComponentProps } from "./notion-title.model";
import styles from "./notion-title.module.css";
import { getNotionCover } from "../../utils/notion-cover";
import { getNotionEmoji } from "../../utils/notion-emoji";
import { getNotionTitle } from "../../utils/notion-title";
import { getNotionPageParentId } from "../../utils/notion-page-parent-id";
import { NotionParentNavigationComponent } from "../notion-parent-navigation/notion-parent-navigation.component";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";

export const NotionTitleComponent = ({
	page,
	hasParent
}: NotionTitleComponentProps): JSX.Element => {
	const rootPageId = process.env.BLOG_INDEX_ID;
	const cover = getNotionCover(page.cover);
	const emoji = getNotionEmoji(page.icon);
	const title = getNotionTitle(page.properties.title);
	const parentId = getNotionPageParentId(page.parent);

	return (
		<div className={styles.title}>
			{hasParent && parentId && page.id !== rootPageId ? (
				<NotionParentNavigationComponent parentId={parentId} />
			) : (
				""
			)}
			<HeadingComponent tag={HeadingTags.H1}>
				{emoji ? <span className={styles.emoji}>{emoji}</span> : ""}
				{title}
			</HeadingComponent>
			<NotionTitleCoverComponent cover={cover} />
		</div>
	);
};

export const NotionTitleCoverComponent = ({ cover }: { cover?: string }) => {
	if (!cover) {
		return <></>;
	}
	return (
		<div className={[styles.cover, styles.coverWithEmoji].join(" ")}>
			<Image
				className={styles.image}
				src={cover}
				priority={true}
				alt={"cover"}
				width={700}
				height={300}
			/>
		</div>
	);
};
