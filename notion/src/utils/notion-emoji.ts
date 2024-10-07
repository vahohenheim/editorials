import { Emoji } from "notion-api-types/responses/global";
import { File } from "notion-api-types/responses";

export const getNotionEmoji = (icon: File | Emoji | null): string | null => {
    if (icon?.type === 'emoji') {
      return icon.emoji;
    }

    return null;
}
