import { NotionResponse } from "notion-api-types";

export enum NotionBlockType {
    HEADING_1 = 'heading_1',
    HEADING_2 = 'heading_2',
    HEADING_3 = 'heading_3',
    PARAGRAPH = 'paragraph',
    IMAGE = 'image',
    CHILD_PAGE = 'child_page',
    TODO = 'to_do',
    CALLOUT = 'callout',
    QUOTE = 'quote',
    BULLETED_LIST_ITEM = 'bulleted_list_item'
}

export interface NotionBlocks {
    object: 'list',
    results: Array<NotionResponse.Block>;
    next_cursor: null,
    has_more: boolean,
    type: 'block',
    block: {}
}