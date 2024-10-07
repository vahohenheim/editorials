import { NotionBlockType } from "./notion.model";
import { NotionResponse } from "notion-api-types";
import { BlockNotionApi } from "./api";

export class NotionAdapter {
    private static async getPageChild(pageId: string): Promise<Array<string>> {
        const blocks = await BlockNotionApi.fetchChildren(pageId);

        const filterChildPage = (block: NotionResponse.Block) => block.type === NotionBlockType.CHILD_PAGE;
        const getPageIdFromBlock = (block: NotionResponse.Block) => block.id;

        if(!blocks) {
          return [];
        }

        return blocks.results.filter(filterChildPage).map(getPageIdFromBlock);
    }

    static async getPageChildRecursive(pageId: string, path: Array<string> = []): Promise<Array<Array<string>>> {
      const children = [];

      // Get child blocks of the current page/notion-block
      const blocks = await NotionAdapter.getPageChild(pageId);

      // Add the path for each notion-block found
      for (const block of blocks) {
        const newPath = [...path, block];
        children.push(newPath);

        // Recursively call the function for each child notion-block
        const childBlocks = await this.getPageChildRecursive(block, newPath);
        children.push(...childBlocks);
      }

      return children;
    }
}
