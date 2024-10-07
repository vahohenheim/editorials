import { LinkComponent } from '@editorials/ui/server';
import { useNotionPageEmoji } from './hooks/notion-page-emoji.hook';
import { useNotionPageHref } from './hooks/notion-page-href.hook';
import { useNotionPageTitle } from './hooks/notion-page-title.hook';
import { NotionLinkComponentProps } from './notion-link.model';

const NotionLinkComponent = async ({
  pageId,
  label,
}: NotionLinkComponentProps) => {
  const href = await useNotionPageHref(pageId);
  const emoji = await useNotionPageEmoji(pageId);
  const title = await useNotionPageTitle(pageId, label);

  if(!href || !title) {
    return;
  }

  return (
    <LinkComponent href={href} emoji={emoji || ''}>
      {label || title}
    </LinkComponent>
  );
};

export default NotionLinkComponent;
