import Image from "next/image";
import Link from "next/link";
import styles from "./cover.module.css";
import valentinbourreau from "../../../public/valentinbourreau.svg";
import { Button, HeadingComponent, HeadingTags } from "@editorials/ui/server";
import { CoverAlignment, CoverComponentProps } from "./cover.model";
import classnames from "classnames";

const CoverComponent = ({
	title,
	description,
	alignment = CoverAlignment.CENTER,
	buttons,
	socialNetworks,
  avatar
}: CoverComponentProps) => {
	const hasButtons = buttons && buttons.length > 0;
	const hasSocialNetwork = socialNetworks && socialNetworks.length > 0;
	const hasActions = hasButtons && hasSocialNetwork;
	return (
		<div
			className={classnames(styles.cover, {
				[styles[alignment as string]]: alignment
			})}
		>
			<Image
				className={styles.avatar}
				src={avatar}
				alt="valentin bourreau picture"
				width={70}
				height={70}
			/>
			<Image
				className={styles.logo}
				src={valentinbourreau}
				alt="valentin bourreau logo"
				width={162}
				height={14}
				priority
			/>
			<HeadingComponent tag={HeadingTags.H1} className="mt-0 mb-2">
				{title}
			</HeadingComponent>
			{description && (
				<p className="text-slate-600 mb-8">{description}</p>
			)}
			{hasActions && (
				<div className={styles.actions}>
					{hasButtons && (
						<div className={styles.buttons}>
							{buttons.map((button, index) => (
								<Link key={index} href={button.link} scroll={true}>
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
