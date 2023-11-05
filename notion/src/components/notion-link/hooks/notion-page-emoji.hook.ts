import { NotionAdapter } from "../../../notion.adapter";
import { getNotionEmoji } from "../../../utils/notion-emoji";
import { use } from "react";

export const useNotionPageEmoji = (pageId: string): string | undefined  => {
    const page = use(NotionAdapter.getPageMeta(pageId));
    return getNotionEmoji(page.icon);
}