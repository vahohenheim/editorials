import { ExperienceComponentProps } from "./experience.model";
import Image from "next/image";
import styles from "./experience.module.css";
import {
	Badge,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@editorials/ui/server";

export const ExperienceComponent = ({
	experience,
	inlineTitle = false
}: ExperienceComponentProps) => {
	return (
		<Card>
			<CardHeader
				className={`flex items-start ${
					inlineTitle && "flex-row items-center"
				} gap-2`}
			>
				<Image
					src={experience.icon}
					alt={experience.entreprise.toLowerCase()}
					width={40}
					height={40}
				/>
				<div className="grow">
					<CardTitle>
						{experience.job} at {experience.entreprise}{" "}
					</CardTitle>
					<CardDescription>
						from {experience.startDate} to {experience.endDate}
					</CardDescription>
				</div>
				{experience.tag && (
					<Badge variant="outline">{experience.tag}</Badge>
				)}
			</CardHeader>
			<CardContent>
				<p
					className={styles.text}
					dangerouslySetInnerHTML={{ __html: experience.text }}
				></p>
			</CardContent>
		</Card>
	);
};
