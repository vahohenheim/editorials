import { NotionApi } from "./notion";
import { Block } from "notion-api-types/responses";
import { NotionBlocks } from '../notion.model';

export class BlockNotionApi {
  static async fetch(blockId: string): Promise<Block | null> {
    const basepath = NotionApi.getBasepath();
    const blockPath = "blocks/"
    const url = `${basepath}${blockPath}${blockId}`;
    return NotionApi.fetch<Block>(url);
  }

  static async fetchChildren(blockId: string): Promise<NotionBlocks | null> {
    const basepath = NotionApi.getBasepath();
    const blockPath = "blocks/"
    const blockArgs = "/children?page_size=200";
    const url = `${basepath}${blockPath}${blockId}${blockArgs}`;
    return NotionApi.fetch<NotionBlocks>(url);
  }
}
