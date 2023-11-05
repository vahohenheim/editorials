import { ReactNode } from "react";
import styles from "./section.module.css";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";

export const SectionComponent = ({
	title,
	children
}: {
	title: string;
	children: ReactNode;
}) => {
	return (
		<section className={styles.section}>
			<HeadingComponent tag={HeadingTags.H2} className="mb-4">{title}</HeadingComponent>
			<div className={styles.content}>{children}</div>
		</section>
	);
};
