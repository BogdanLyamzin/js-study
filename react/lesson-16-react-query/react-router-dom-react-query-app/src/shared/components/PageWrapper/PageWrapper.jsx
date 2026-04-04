import useTheme from "../../hooks/useTheme";

import styles from "./PageWrapper.module.css";

const PageWrapper = ({children}) => {
    const {theme} = useTheme();
    
    return (
        <main className={`${styles.main} ${styles[theme]}`}>
            {children}
        </main>
    )
}

export default PageWrapper;