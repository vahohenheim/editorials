import Image from "next/image";
import Link from "next/link";
import styles from "./cover.module.css";
import { Button, HeadingComponent, HeadingTags } from "@editorials/ui/server";
import { CoverAlignment, CoverComponentProps, CoverSocialNetwork, CoverSocialNetworkType } from "./cover.model";
import classnames from "classnames";
import GithubIcon from "../icons/github";
import { IconProps } from "../icons/icon.model";
import DribbbleIcon from "../icons/dribbble";
import BehanceIcon from "../icons/behance";
import AppearComponent from "../appear/appear.component";

const SocialNetwork = ({ socialNetwork }: { socialNetwork: CoverSocialNetwork }) => {
  const defaultProps: IconProps = {
    width: 20,
    height: 20,
    className: styles.socialNetwork
  };

  if (socialNetwork.type === CoverSocialNetworkType.GITHUB) {
    return <GithubIcon {...defaultProps} />
  }

  if (socialNetwork.type === CoverSocialNetworkType.DRIBBBLE) {
    return <DribbbleIcon {...defaultProps} />
  }

  if (socialNetwork.type === CoverSocialNetworkType.BEHANCE) {
    return <BehanceIcon {...defaultProps} />
  }
};

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
      <AppearComponent>
			<Image
				className={styles.avatar}
				src={avatar}
				alt="valentin bourreau picture"
				width={120}
				height={120}
			/>
      </AppearComponent>
      <AppearComponent delay={0.1}>
        <HeadingComponent tag={HeadingTags.H1} className="mt-0 mb-2">
          {title}
        </HeadingComponent>
      </AppearComponent>
      <AppearComponent delay={0.2}>
			{description && (
				<p className="text-slate-600 dark:text-slate-300 mb-8">{description}</p>
			)}
      </AppearComponent>
      <AppearComponent delay={0.3}>
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
									<SocialNetwork socialNetwork={socialNetwork} />
								</Link>
							))}
						</div>
					)}
				</div>
			)}
      </AppearComponent>
		</div>
	);
};

export default CoverComponent;
