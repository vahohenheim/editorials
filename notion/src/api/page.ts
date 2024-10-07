import { Page } from "notion-api-types/responses";
import { NotionApi } from "./notion";
import { BlockNotionApi } from "./block";
import { NotionBlocks } from '../notion.model';

export class PageNotionApi {
  static async fetch(pageId: string): Promise<Page | null> {
    const basepath = NotionApi.getBasepath();
    const pagePath = "pages/"
    const url = `${basepath}${pagePath}${pageId}`;

    return NotionApi.fetch<Page>(url);
  }

  static async fetchData(pageId: string): Promise<[Page | null, NotionBlocks | null]> {
    const page = await PageNotionApi.fetch(pageId);
    const blocks = await BlockNotionApi.fetchChildren(pageId);
    return [page, blocks];
  }
}
