import { Page } from "notion-api-types/responses";
import { NotionBlocks } from "./notion.model";
import { FetchApi } from "@editorials/next/server";

export class NotionApi {
  static basepath = process.env.NEXT_PUBLIC_NOTION_API_BASEPATH;
  static token = process.env.NEXT_PUBLIC_NOTION_API_TOKEN;

  static async fetchPage(pageId: string): Promise<Page | null> {
    return NotionApi.get<Page>(`${this.basepath}pages/${pageId}`);
  }

  static async fetchBlock(pageId: string): Promise<NotionBlocks | null> {
    return NotionApi.get<NotionBlocks>(`${this.basepath}blocks/${pageId}`);
  }

  static async fetchBlockChildren(pageId: string): Promise<NotionBlocks | null> {
    return NotionApi.get<NotionBlocks>(`${this.basepath}blocks/${pageId}/children?page_size=200`);
  }

  static async fetchPageData(pageId: string): Promise<{ page: Page | null, blocks: NotionBlocks | null }> {
    const page = await NotionApi.fetchPage(pageId);
    const blocks = await NotionApi.fetchBlockChildren(pageId);
    return {
      page, 
      blocks
    }
    }

  static async get<T>(url: string): Promise<T | null> {
    const response = await FetchApi.get<T>(url, { requestInit: { headers: NotionApi.getHeaders()} });
    return response.data;
  }

  static getHeaders(): HeadersInit {
    return {
        "Notion-Version": '2022-06-28',
        "content-type": 'application/json',
        "mode": 'no-cors',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Authorization": `Bearer ${this.token}`,
      }
  }
}