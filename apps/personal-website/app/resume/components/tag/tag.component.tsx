import { TagComponentProp } from "./tag.model";
import styles from './tag.module.css';

export const TagComponent = ({ text }: TagComponentProp) => {
    return (
        <div className={styles.tag}>
            <p className={styles.text}>{text}</p>
        </div>
    )
}