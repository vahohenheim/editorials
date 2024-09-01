import { Locale } from "../_models/locale";

export const LOCALES = [Locale.EN, Locale.FR];

export const LOCALE_PATHS: Record<Locale, string> = {
  [Locale.EN]: 'en',
  [Locale.FR]: 'fr'
}

export const DEFAULT_LOCALE = 'en';
