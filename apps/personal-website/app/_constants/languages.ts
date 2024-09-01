import { Language, LanguageLevel } from "../_models/language";

const LANGUAGES: Array<Language> = [
	{
		icon: "🇫🇷",
		name: "Français",
		level: LanguageLevel.NATIVE
	},
	{
		icon: "🇬🇧",
		name: "Anglais",
		level: LanguageLevel.PROGRESSION
	},
	{
		icon: "🇪🇸",
		name: "Espagnol",
		level: LanguageLevel.NOTION
	}
];

export default LANGUAGES;
