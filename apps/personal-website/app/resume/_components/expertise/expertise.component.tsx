import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from "@editorials/ui/server";
import { ExpertiseComponentProps } from "./expertise.model";

export const ExpertiseComponent = ({ title, text }: ExpertiseComponentProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{text}</CardDescription>
			</CardHeader>
		</Card>
	);
};
