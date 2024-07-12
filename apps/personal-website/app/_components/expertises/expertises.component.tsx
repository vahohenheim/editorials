import { ExpertiseComponent } from "../expertise/expertise.component"
import { SectionComponent } from "../section/section.component"
import { ExpertisesComponentProps } from "./expertises.model"
import styles from './expertises.module.css';
import { ScrollArea, ScrollBar } from "@editorials/ui";
import classnames from "classnames";

export const ExpertisesComponent = ({ title, expertises }: ExpertisesComponentProps) => {
    return (
        <SectionComponent title={title}>
          <ScrollArea className={classnames(styles.scroll, "h-[100%] py-4")}>
            <div className={styles.grid}>
              {expertises.map((expertise, index) => <ExpertiseComponent key={index} expertise={expertise} />)}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </SectionComponent>
    )
}
