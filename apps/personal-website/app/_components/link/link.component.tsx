import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import styles from "./link.module.css";

const LinkComponent = ({ href, children }: LinkProps & PropsWithChildren) => {
	return (
		<Link className={styles.link} href={href}>
			{children}
		</Link>
	);
};
