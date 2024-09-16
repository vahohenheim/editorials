import { ReactNode } from 'react';
import styles from './background.module.css';

export const BackgroundComponent = ({ children }: { children : ReactNode }) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.main}>
                {children}
            </div>
        </div>
        
    )
}