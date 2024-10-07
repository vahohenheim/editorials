import { PageNotionApi } from "../../../api";
import { getNotionTitle } from '../../../utils/notion-title';

export const useNotionPageTitle = async (pageId: string, label?: string): Promise<string | null>  => {
    if(label) {
        return label;
    }

    const page = await PageNotionApi.fetch(pageId);

    if(!page) {
      return null
    }

    return getNotionTitle(page.properties.title);
}
