import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { ModeToggle } from "@editorials/ui";
import LanguageToggleComponent from "../language-toggle/language-toggle.component";
import LogoIcon from "../icons/logo";

export const HeaderComponent = ({ lang = 'en' }: { lang?: 'en' | 'fr' }) => {

	return (
    <header
      className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 justify-between items-center">
        <div>
          <Link href="/">
            <LogoIcon className={styles.logo} />
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <LanguageToggleComponent defaultLanguage={lang} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
