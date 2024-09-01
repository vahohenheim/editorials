import Image from "next/image";
import Link from "next/link";
import styles from "./cover.module.css";
import { Button, HeadingComponent, HeadingTags, NavigationMenu, NavigationMenuList } from "@editorials/ui/server";
import { CoverAlignment, CoverComponentProps } from "./cover.model";
import classnames from "classnames";
import AppearComponent from "../appear/appear.component";
import { SectionComponent } from "../section/section.component";
import SocialNetworkComponent from "../social-network/social-network";

const CoverComponent = ({
  ontitle,
  title,
  description,
  alignment = CoverAlignment.LEFT,
  buttons,
  socialNetworks,
  avatar
}: CoverComponentProps) => {
  const hasButtons = buttons && buttons.length > 0;
  const hasSocialNetwork = socialNetworks && socialNetworks.length > 0;
  const hasActions = hasButtons && hasSocialNetwork;
  return (
    <SectionComponent>
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

        {ontitle && (
          <AppearComponent delay={0.2}>
            <p className="mb-0 text-xl text-slate-800 dark:text-slate-200"
               dangerouslySetInnerHTML={{ __html: ontitle }} />
          </AppearComponent>
        )}
        <AppearComponent delay={0.3}>
          <HeadingComponent tag={HeadingTags.H1} className="my-0">
            {title}
          </HeadingComponent>
        </AppearComponent>
        {description && (
          <AppearComponent delay={0.4}>
            <p className="mb-4 text-slate-600 dark:text-slate-300"
               dangerouslySetInnerHTML={{ __html: description }} />
          </AppearComponent>
        )}
        <AppearComponent delay={0.5}>
          {hasActions && (
            <div className={styles.actions}>
              {hasButtons && (
                <div className={styles.buttons}>
                  {buttons.map((button, index) => (
                    <Link key={index} href={button.link} scroll={true}>
                      <Button
                        className={styles.button}
                        variant="default"
                      >
                        {button.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
              {hasSocialNetwork && (
                <NavigationMenu>
                  <NavigationMenuList>
                    {socialNetworks.map((socialNetwork, index) => <SocialNetworkComponent key={index} socialNetwork={socialNetwork} />)}
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          )}
        </AppearComponent>
      </div>
    </SectionComponent>
  );
};

export default CoverComponent;
