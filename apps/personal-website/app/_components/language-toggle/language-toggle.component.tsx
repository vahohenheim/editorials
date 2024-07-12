'use client';

import { Button } from "@editorials/ui/server";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@editorials/ui";
import * as React from "react";
import { useRouter } from "next/navigation";
import classnames from "classnames";

const LanguageToggleComponent = ({ defaultLanguage = 'en' }: { defaultLanguage?: 'en' | 'fr' }) => {
  const router = useRouter();

  console.log("LanguageToggleComponent", defaultLanguage);

  const navigateToLanguage = (lang: 'en' | 'fr') => {
    router.push(`/${lang}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <p className={classnames("h-[1.2rem] w-[1.2rem] scale-0 transition-all", defaultLanguage === 'en' && "scale-100")}>🇺🇸</p>
          <p className={classnames("absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all", defaultLanguage === 'fr' && "scale-100")}>🇫🇷</p>
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

export default LanguageToggleComponent;
