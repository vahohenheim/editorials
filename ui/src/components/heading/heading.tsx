import React from "react";
import styles from "./heading.module.css";
import { HeadingComponentProps } from "./heading.model";
import classNames from "classnames";

export const HeadingComponent = ({
	tag,
	className,
	apperance,
	children
}: HeadingComponentProps) => {
	return React.createElement(
		tag,
		{
			className: classNames(
				styles.heading,
        apperance,
				"mb-2",
				className
			),
      dangerouslySetInnerHTML: { __html: children }
		}
	);
};
