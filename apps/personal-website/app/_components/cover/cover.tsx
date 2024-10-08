import Image from "next/image";
import Link from "next/link";
import styles from "./cover.module.css";
import { Button, HeadingComponent, HeadingTags, NavigationMenu, NavigationMenuList } from "@editorials/ui/server";
import { CoverAlignment, CoverComponentProps } from "./cover.model";
import classnames from "classnames";
import AppearComponent from "../appear/appear";
import SectionComponent from "../section/section";
import SocialNetworkComponent from "../social-network/social-network";
import classNames from "classnames";

const CoverComponent = ({
  ontitle,
  title,
  description,
  alignment = CoverAlignment.LEFT,
  action,
  socialNetworks = [],
  avatar
}: CoverComponentProps) => {
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
          <AppearComponent delay={0.1}>
            <p className="mb-0 text-xl text-slate-800 dark:text-slate-200"
               dangerouslySetInnerHTML={{ __html: ontitle }} />
          </AppearComponent>
        )}
        <AppearComponent delay={0.2}>
          <HeadingComponent tag={HeadingTags.H1} className="my-0">
            {title}
          </HeadingComponent>
        </AppearComponent>
        {description && (
          <AppearComponent delay={0.3}>
            <p className="text-slate-600 dark:text-slate-300"
               dangerouslySetInnerHTML={{ __html: description }} />
          </AppearComponent>
        )}
        <AppearComponent delay={0.4}>
          <div className={classNames(styles.actions, "mt-4")}>
            <div className={styles.buttons}>
              <Link href={action.link} scroll={true}>
                <Button
                  className={styles.button}
                  variant={action.variant || "default"}
                >
                  {action.label}
                </Button>
              </Link>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                {socialNetworks.map((socialNetwork, index) => <SocialNetworkComponent key={index}
                                                                                      socialNetwork={socialNetwork} />)}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </AppearComponent>
      </div>
    </SectionComponent>
  );
};

export default CoverComponent;
