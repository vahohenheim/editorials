import { IconProps } from "../icons/icon.model";
import GithubIcon from "../icons/social-networks/github";
import DribbbleIcon from "../icons/social-networks/dribbble";
import BehanceIcon from "../icons/social-networks/behance";
import LinkedinIcon from "../icons/social-networks/linkedin";
import { SocialNetworkType } from "../../_models/social-network";
import { SocialNetworkComponentProps } from "./social-network.model";
import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@editorials/ui/server";
import classNames from "classnames";
import styles from "./social-network.module.css";

const SocialNetworkIconComponent = ({ socialNetwork }: SocialNetworkComponentProps) => {
  const defaultProps: IconProps = {
    width: 20,
    height: 20,
    className: styles.socialNetwork
  };

  if (socialNetwork.type === SocialNetworkType.GITHUB) {
    return <GithubIcon {...defaultProps} />
  }

  if (socialNetwork.type === SocialNetworkType.DRIBBBLE) {
    return <DribbbleIcon {...defaultProps} />
  }

  if (socialNetwork.type === SocialNetworkType.BEHANCE) {
    return <BehanceIcon {...defaultProps} />
  }

  if (socialNetwork.type === SocialNetworkType.LINKEDIN) {
    return <LinkedinIcon {...defaultProps} />
  }
};

const SocialNetworkComponent = ({ socialNetwork }: SocialNetworkComponentProps) => {
  return (
    <NavigationMenuItem>
      <Link href={socialNetwork.link} legacyBehavior passHref target="_blank">
        <NavigationMenuLink className={classNames(navigationMenuTriggerStyle(), styles.link)}>
          <SocialNetworkIconComponent socialNetwork={socialNetwork} />
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
};

export default SocialNetworkComponent;