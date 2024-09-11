import { Expertise } from "../expertise/expertise"
import SectionComponent from "../section/section"
import styles from './expertises.module.css';
import { EXPERTISES } from "../../_constants/resume";

const ExpertisesComponent = async () => {
    return (
        <SectionComponent>
          <div className={styles.grid}>
            {EXPERTISES.map((expertise, index) => <Expertise key={index} expertise={expertise} />)}
          </div>
        </SectionComponent>
    )
}

export default ExpertisesComponent;
