import { RichTexts } from "notion-api-types/responses";
import { NotionResponse } from "notion-api-types";
import { NotionHeading3ComponentProps } from "./notion-heading-3.model";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";

export const NotionHeading3Component = ({
	result
}: NotionHeading3ComponentProps): JSX.Element => {
	const content = result.heading_3.rich_text
		.map(
			(text: NotionResponse.RichText) =>
				(text as RichTexts.Text).text.content
		)
		.flat();
	return (
		<HeadingComponent className="mt-3" tag={HeadingTags.H2}>
			{content}
		</HeadingComponent>
	);
};
