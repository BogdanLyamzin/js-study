

import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
    const lang = "ua";

    return (
        <div>
            <span  className={lang === "ua" ? styles.currentLang : styles.lang} >UA</span>
            | 
            <span  className={lang === "en" ? styles.currentLang : styles.lang} >EN</span> 
        </div>
    )
}

export default LanguageSwitcher;