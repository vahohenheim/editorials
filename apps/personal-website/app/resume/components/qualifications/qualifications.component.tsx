import { QualificationComponent } from "../qualification/qualification.component"
import { SectionComponent } from "../section/section.component"
import { QualificationsComponentProps } from "./qualifications.model"
import styles from './qualifications.module.css';

export const QualificationsComponent = ({ title, qualifications }: QualificationsComponentProps) => {
    return (
        <SectionComponent title={title}>
            <div className={styles.grid}>
                {qualifications.map((qualification, index) => <QualificationComponent key={index} qualification={qualification} />)}
            </div>
        </SectionComponent>
    )
}