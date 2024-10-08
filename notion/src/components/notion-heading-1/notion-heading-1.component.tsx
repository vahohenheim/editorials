import { NotionResponse } from "notion-api-types";
import { RichTexts } from "notion-api-types/responses";
import { NotionHeading1ComponentProps } from "./notion-heading-1.model";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";

const NotionHeading1Component = ({
	result
}: NotionHeading1ComponentProps): JSX.Element => {
	const content = result.heading_1.rich_text
		.map(
			(text: NotionResponse.RichText) =>
				(text as RichTexts.Text).text.content
		)
		.flat();

	return (
		<HeadingComponent className="mt-7" tag={HeadingTags.H1}>
			{content}
		</HeadingComponent>
	);
};

export default NotionHeading1Component;
