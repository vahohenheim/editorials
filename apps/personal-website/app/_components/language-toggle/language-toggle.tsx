'use client';

import { Button } from "@editorials/ui/server";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@editorials/ui";
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import classnames from "classnames";
import { LOCALE_PATHS } from "../../_constants/locale";

const LanguageToggle = ({ defaultLanguage = 'en' }: { defaultLanguage?: 'en' | 'fr' }) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToLanguage = (locale: 'en' | 'fr') => {
    const path = LOCALE_PATHS[locale];

    if(defaultLanguage !== locale) {
      const nextPath = pathname.replace(`/${defaultLanguage}`, `/${path}`);
      router.push(nextPath);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <p className={classnames("size-[1.2rem] scale-0 transition-all", defaultLanguage === 'en' && "scale-100")}>🇺🇸</p>
          <p className={classnames("absolute size-[1.2rem] scale-0 transition-all", defaultLanguage === 'fr' && "scale-100")}>🇫🇷</p>
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigateToLanguage("en")}>
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigateToLanguage("fr")}>
          🇫🇷 Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

export default LanguageToggle;
