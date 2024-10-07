import { LogHelpers } from "@editorials/next/server";

export class NotionApi {
  static async fetch<T>(url: string): Promise<T | null> {
    const token = process.env.NEXT_PUBLIC_NOTION_TOKEN;

    if(!token) {
      LogHelpers.error('NotionApi', `NEXT_PUBLIC_NOTION_TOKEN is not set`)
      return null;
    }

    return fetch(url, NotionApi.getRequestInit('GET', token))
      .then(res => res.json())
      .catch(() => {
        LogHelpers.error('NotionApi', `Failed to fetch ${url}`)
        return null;
      })
  }

  static getRequestInit(method: 'GET' | 'POST', token: string): RequestInit {
    return {
      method: method,
      headers: {
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        'mode': 'no-cors',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
        'Authorization': `Bearer ${token}`,
      }
    }
  }

  static getBasepath(): string | null {
    const basepath = process.env.NEXT_PUBLIC_NOTION_BASEPATH;

    if(!basepath) {
      LogHelpers.error('NotionApi', `NEXT_PUBLIC_NOTION_BASEPATH is not set`)
      return null;
    }

    return basepath;
  }
}
