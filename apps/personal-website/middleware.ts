import { NextRequest, NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { DEFAULT_LOCALE, LOCALE_PATHS, LOCALES } from "./app/_constants/locale.constants";
import { Locale } from "./app/_models/locale";

const locales = LOCALES

// Get the preferred locale, similar to the above or using a library
function getLocale() {
  let headers = { 'accept-language': 'en-US,en,fr;q=0.5' }
  let languages = new Negotiator({ headers }).languages()
  return match(languages, locales, DEFAULT_LOCALE) as 'fr' | 'en';
}

const hasLocale = (path: string) => Object.keys(LOCALE_PATHS).some(
  (locale) => path.startsWith(`/${LOCALE_PATHS[locale as Locale]}/`) || path === `/${LOCALE_PATHS[locale as Locale]}`
);

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl

  if (hasLocale(pathname)) return

  // Redirect if there is no locale
  const locale = LOCALE_PATHS[getLocale()];
  const path = pathname === '/' ? '' : pathname;

  request.nextUrl.pathname = `/${locale}${path}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next).*)', // Skip all internal paths (_next)
  ],
}
