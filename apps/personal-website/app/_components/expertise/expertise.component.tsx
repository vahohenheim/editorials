import {
  Card, CardContent,
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
				<CardDescription>{expertise.description}</CardDescription>
			</CardHeader>
      <CardContent>
        {expertise.text}
      </CardContent>
		</Card>
	);
};
