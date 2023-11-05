import Link from "next/link";
import { LinkComponentProps } from "./link.model";
import styles from './link.module.css';

export const LinkComponent = ({ href, emoji, children }: LinkComponentProps) => {
    return (
		<Link className={styles.link} href={href}>
			{emoji && <span className={styles.emoji}>{emoji} </span>}
			{children}
		</Link>
	);
}
