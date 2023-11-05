import styles from './header.module.css';

export const HeaderComponent = () => {
    return <header className={styles.header}>
        <div className="container">
            <div className={styles.logo}>
                Blog
            </div>
        </div>
    </header>
}