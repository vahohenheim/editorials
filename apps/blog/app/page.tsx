import { Metadata } from 'next';
import { Post } from '@editorials/notion/server';
import {
  getNotionEmoji,
  getNotionTitle,
} from '@editorials/notion/server';
import { PageNotionApi } from "../../../notion/src/api";

export async function generateMetadata(): Promise<Metadata> {
  const rootPageId = process.env.NEXT_PUBLIC_BLOG_INDEX_ID || '';
  const page = await PageNotionApi.fetch(rootPageId);

  if(!page) {
    return {};
  }

  const emoji = getNotionEmoji(page.icon);
  const title = getNotionTitle(page.properties.title);

  return {
    title: title,
    icons: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`,
  };
}

export default async function Home() {
  const rootPageId = process.env.NEXT_PUBLIC_BLOG_INDEX_ID || '';
  return <Post postId={rootPageId} />;
}
