import 'server-only';

const dictionaries = {
  en: () => import('./../_dictionaries/en.json').then((module) => module.default),
  fr: () => import('./../_dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'fr' | 'en') => dictionaries[locale]()
