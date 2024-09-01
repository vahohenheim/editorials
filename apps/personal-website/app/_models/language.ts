export type Language = {
	icon: string;
	name: string;
	level: LanguageLevel;
};

export enum LanguageLevel {
	NATIVE = "native",
	PROGRESSION = "progression",
	NOTION = "notion"
}
