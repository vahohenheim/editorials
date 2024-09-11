import styles from "./header.module.css";
import Link from "next/link";
import { ModeToggle } from "@editorials/ui";
import LanguageToggle from "../language-toggle/language-toggle";
import LogoIcon from "../icons/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@editorials/ui/server";
import { HEADER_NAVIGATION_MENU_ITEMS } from "./header.constants";
import AppearComponent from "../appear/appear";
import { getScopedI18n } from "../../../locales/server";

const HeaderComponent = async ({ lang = 'en' }: { lang?: 'en' | 'fr' }) => {
	const scopedT = await getScopedI18n('header');

  return (
    <header
      className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <AppearComponent>
        <div className="container-mobile mx-auto flex h-14 max-w-[900px] items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <LogoIcon className={styles.logo} />
          </Link>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {HEADER_NAVIGATION_MENU_ITEMS.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {scopedT(`menu.${item.id}`)}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-1">
          <LanguageToggle defaultLanguage={lang} />
          <ModeToggle />
        </div>
      </div>
      </AppearComponent>
    </header>
  );
};

export default HeaderComponent;
