import { NotionResponse } from "notion-api-types";
import { RichTexts } from "notion-api-types/responses";
import { NotionHeading2ComponentProps } from "./notion-heading-2.model";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";

export const NotionHeading2Component = ({
	result
}: NotionHeading2ComponentProps): JSX.Element => {
	const content = result.heading_2.rich_text
		.map(
			(text: NotionResponse.RichText) =>
				(text as RichTexts.Text).text.content
		)
		.flat();
	return (
		<HeadingComponent className="mt-5" tag={HeadingTags.H2}>
			{content}
		</HeadingComponent>
	);
};
