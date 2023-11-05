import { SectionComponent } from './../section/section.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ExperiencesComponentProps } from './experiences.model';
import styles from './experiences.module.css';


export const ExperiencesComponent = ({ title, experiences }: ExperiencesComponentProps) => {
    return (
        <SectionComponent title={title}>
            <div className={styles.grid}>
                {experiences.map((experience, index) => <ExperienceComponent key={index} experience={experience} inlineTitle={index === 1 || index === 2} />)}
            </div>
        </SectionComponent>
    )
}