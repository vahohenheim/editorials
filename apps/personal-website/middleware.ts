import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
import { DEFAULT_LOCALE, LOCALES } from "./app/_constants/locale";

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
