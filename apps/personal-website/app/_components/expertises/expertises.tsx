import { Expertise } from "../expertise/expertise"
import SectionComponent from "../section/section"
import { ExpertisesComponentProps } from "./expertises.model"
import styles from './expertises.module.css';

export const Expertises = ({ title, expertises }: ExpertisesComponentProps) => {
    return (
        <SectionComponent>
          <div className={styles.grid}>
            {expertises.map((expertise, index) => <Expertise key={index} expertise={expertise} />)}
          </div>
        </SectionComponent>
    )
}
