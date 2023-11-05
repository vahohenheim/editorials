import Image from "next/image";
import styles from "./qualification.module.css";
import { QualificationComponentProps } from "./qualification.model";
import qualificationIcon from "./../../../../public/qualification.svg";
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
			<CardHeader>
				<Image
					className={styles.title}
					src={qualificationIcon}
					alt={"Qualification icon"}
					width={40}
					height={40}
				/>
				<CardTitle>
					{qualification.name} in {qualification.obtainDate}
				</CardTitle>
				<CardDescription>
					{qualification.level} at {qualification.school.name},{" "}
					{qualification.school.location}
				</CardDescription>
			</CardHeader>
		</Card>
	);
};
