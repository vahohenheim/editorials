import { NotionBlockType } from '../../notion.model';
import { ElementType } from "react";
import dynamic from "next/dynamic";

export const COMPONENTS: Record<NotionBlockType, ElementType> = {
  [NotionBlockType.PARAGRAPH]: dynamic(() => import("../notion-paragraph/notion-paragraph.component")),
  [NotionBlockType.HEADING_1]: dynamic(() => import("../notion-heading-1/notion-heading-1.component")),
  [NotionBlockType.HEADING_2]: dynamic(() => import("../notion-heading-2/notion-heading-2.component")),
  [NotionBlockType.HEADING_3]: dynamic(() => import("../notion-heading-3/notion-heading-3.component")),
  [NotionBlockType.IMAGE]: dynamic(() => import("../notion-image/notion-image.component")),
  [NotionBlockType.CHILD_PAGE]: dynamic(() => import("../notion-child-page/notion-child-page.component")),
  [NotionBlockType.TODO]: dynamic(() => import("../notion-todo/notion-todo.component")),
  [NotionBlockType.CALLOUT]: dynamic(() => import("../notion-callout/notion-callout.component")),
  [NotionBlockType.QUOTE]: dynamic(() => import("../notion-quote/notion-quote.component")),
  [NotionBlockType.BULLETED_LIST_ITEM]: dynamic(() => import("../notion-bulleted-list-item/notion-bulleted-list-item.component"))
}
