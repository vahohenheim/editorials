import {
  Card, CardContent,
  CardDescription,
  CardHeader,
  CardTitle, HeadingComponent, HeadingTags
} from "@editorials/ui/server";
import { ExpertiseComponentProps } from "./expertise.model";
import { getScopedI18n } from "../../../locales/server";

export const Expertise = async ({ expertise }: ExpertiseComponentProps) => {
  const scopedT = await getScopedI18n('expertises.list');

  return (
    <div>
      <HeadingComponent tag={HeadingTags.H2} apperance={HeadingTags.H3} className="mb-0">
        {scopedT(`${expertise.id}.title`)}
      </HeadingComponent>
      <p className="text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: scopedT(`${expertise.id}.text`) }} />
    </div>
	);
};
