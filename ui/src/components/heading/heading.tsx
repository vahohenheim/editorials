import React from "react";
import styles from "./heading.module.css";
import { HeadingComponentProps } from "./heading.model";
import { cn } from "@editorials/ui/server";

export const HeadingComponent = ({
	tag,
	className,
	apperance,
	children
}: HeadingComponentProps) => {
	return React.createElement(
		tag,
		{
			className: cn(
				styles.heading,
				styles[apperance || tag],
				"mb-2",
				className
			)
		},
		children
	);
};
