import { NotionAdapter, NotionHelper, Post, getNotionEmoji, getNotionTitle } from "@editorials/notion/server";
import { Metadata, ResolvingMetadata } from "next";

type Props<T> = {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props<{ slug: string }>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pageId = params.slug[params.slug.length - 1];
  const page = await NotionAdapter.getPageMeta(pageId);
  const emoji = getNotionEmoji(page.icon);
  const title = getNotionTitle(page.properties.title);

  return {
    title: title,
    icons: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`,
  };
}

export default async function NotionPost({ params }: { params: { slug: Array<string> }}) {
  const pageId = params.slug[params.slug.length - 1];
  return <Post postId={pageId} />
}

export async function generateStaticParams() {
  const rootPageId = process.env.BLOG_INDEX_ID || '';
  return NotionHelper.getPaths(rootPageId);
}