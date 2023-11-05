import { getNotionTitle } from "../../../utils/notion-title";
import { NotionAdapter } from "../../../notion.adapter";
import { use } from "react";

export const useNotionPageTitle = (pageId: string, label?: string): string | undefined  => {
    if(label) {
        return label;
    }

    const page = use(NotionAdapter.getPageMeta(pageId));
    return getNotionTitle(page.properties.title);
}
