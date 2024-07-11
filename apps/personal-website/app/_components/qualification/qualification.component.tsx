import Image from "next/image";
import styles from "./qualification.module.css";
import { QualificationComponentProps } from "./qualification.model";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from "@editorials/ui/server";

export const QualificationComponent = ({
	qualification
}: QualificationComponentProps) => {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center gap-2">
				<div>
					<CardTitle>
						{qualification.name} in {qualification.obtainDate}
					</CardTitle>
					<CardDescription>
						{qualification.level} at {qualification.school.name},{" "}
						{qualification.school.location}
					</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
};
