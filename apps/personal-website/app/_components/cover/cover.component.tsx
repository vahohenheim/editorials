import Image from "next/image";
import Link from "next/link";
import styles from "./cover.module.css";
import { Button, HeadingComponent, HeadingTags } from "@editorials/ui/server";
import { CoverComponentProps } from "./cover.model";
import classnames from "classnames";

const CoverComponent = ({
	title,
	description,
	buttons,
	socialNetworks
}: CoverComponentProps) => {
	const hasButtons = buttons && buttons.length > 0;
	const hasSocialNetwork = socialNetworks && socialNetworks.length > 0;
	const hasActions = hasButtons || hasSocialNetwork;
	return (
		<div className={classnames(styles.cover)}>
			<HeadingComponent tag={HeadingTags.H1} className="mt-0 mb-2">
				{title}
			</HeadingComponent>
			{description && (
				<HeadingComponent
					apperance={HeadingTags.H2}
					tag={HeadingTags.PARAGRAPH}
					className="text-muted-foreground mb-8"
				>
					{description}
				</HeadingComponent>
			)}
			{hasActions && (
				<div className={styles.actions}>
					{hasButtons && (
						<div className={styles.buttons}>
							{buttons.map((button, index) => (
								<Link key={index} href={button.link}>
									<Button
										className={styles.button}
										variant="outline"
									>
										{button.label}
									</Button>
								</Link>
							))}
						</div>
					)}
					{hasSocialNetwork && (
						<div className={styles.socialNetworks}>
							{socialNetworks.map((socialNetwork, index) => (
								<Link key={index} href={socialNetwork.link}>
									<Image
										src={socialNetwork.src}
										alt={socialNetwork.alt}
										width={20}
										height={20}
									/>
								</Link>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default CoverComponent;
