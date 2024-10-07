import { getNotionEmoji } from "../../../utils/notion-emoji";
import { PageNotionApi } from "../../../api";

export const useNotionPageEmoji = async (pageId: string): Promise<string | null> => {
  const page = await PageNotionApi.fetch(pageId);

  if(!page) {
    return null;
  }

  return getNotionEmoji(page.icon);
}
