import { PageProperty } from "notion-api-types/responses";

export const getNotionTitle = (titleProperty: PageProperty): string | null => {
    if(titleProperty.type === 'title') {
      return titleProperty.title.map((title) => title.text.content).join(' ')
    }

    return null;
}
