import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from "@editorials/ui/server";
import { ExpertiseComponentProps } from "./expertise.model";

export const ExpertiseComponent = ({ expertise }: ExpertiseComponentProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{expertise.title}</CardTitle>
				<CardDescription>{expertise.text}</CardDescription>
			</CardHeader>
		</Card>
	);
};
