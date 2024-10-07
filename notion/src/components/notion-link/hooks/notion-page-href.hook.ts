import { getNotionPageParentId } from "../../../utils/notion-page-parent-id";
import { PageNotionApi } from "../../../api";

export const useNotionPageHref = async (pageId: string): Promise<string | null> => {
    const href = `/${pageId}`;
    const page = await PageNotionApi.fetch(pageId);

    if(!page) {
      return null;
    }

    const parentId = getNotionPageParentId(page.parent);

    // TODO: Manage recursive parentPageFetching
    if (!!parentId && parentId !== process.env.NEXT_PUBLIC_BLOG_INDEX_ID) {
        return `/${parentId}${href}`;
    }

    return href;
}
