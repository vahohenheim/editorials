import { ExpertiseComponent } from "../expertise/expertise.component"
import { SectionComponent } from "../section/section.component"
import { ExpertisesComponentProps } from "./expertises.model"
import styles from './expertises.module.css';

export const ExpertisesComponent = ({ title, expertises }: ExpertisesComponentProps) => {
    return (
        <SectionComponent>
          <div className={styles.grid}>
            {expertises.map((expertise, index) => <ExpertiseComponent key={index} expertise={expertise} />)}
          </div>
        </SectionComponent>
    )
}
