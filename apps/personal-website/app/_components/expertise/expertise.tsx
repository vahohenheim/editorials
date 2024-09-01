import {
  Card, CardContent,
  CardDescription,
  CardHeader,
  CardTitle, HeadingComponent, HeadingTags
} from "@editorials/ui/server";
import { ExpertiseComponentProps } from "./expertise.model";

export const Expertise = ({ expertise }: ExpertiseComponentProps) => {
	return (
    <div>
      <HeadingComponent tag={HeadingTags.H2} apperance={HeadingTags.H3} className="mb-0">
        {expertise.title}
      </HeadingComponent>
      <p className="text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: expertise.text }} />
    </div>
	);
};
