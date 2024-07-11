'use client';

import Image from "next/image";
import valentinbourreau from "../../../public/valentinbourreau.svg";
import styles from "./header.module.css";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@editorials/ui/server";
import { useState } from "react";
import Link from "next/link";

export const HeaderComponent = () => {
  // TODO: get lang from cookie
  const [lang, setLang] = useState("en");


	return (
    <header
      className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 justify-between items-center">
        <div>
          <Link href="/">
            <Image
              className={styles.logo}
              src={valentinbourreau}
              alt="valentin bourreau logo"
              width={162}
              height={14}
              priority
            />
          </Link>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" defaultValue={lang} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿 English</SelectItem>
              <SelectItem value="fr">🇫🇷 Français</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};
