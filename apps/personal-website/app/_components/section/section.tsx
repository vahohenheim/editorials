import { ReactNode } from "react";
import { HeadingComponent, HeadingTags } from "@editorials/ui/server";

const SectionComponent = ({
	title,
	children
}: {
	title?: string;
	children: ReactNode;
}) => {
	return (
		<section className="container mx-auto my-20 md:my-36 w-full max-w-[900px]">
      {title && (
        <div className="mx-auto w-full max-w-[900px]">
          <HeadingComponent tag={HeadingTags.H2} className="mb-6">{title}</HeadingComponent>
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionComponent;
