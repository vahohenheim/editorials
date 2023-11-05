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
			<CardHeader>
				<CardTitle>
					<Image
						className="mb-2"
						src={experience.icon}
						alt={experience.entreprise.toLowerCase()}
						width={40}
						height={40}
					/>
					{experience.job} at {experience.entreprise}{" "}
				</CardTitle>
				<CardDescription>
					from {experience.startDate} to {experience.endDate}
				</CardDescription>
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
