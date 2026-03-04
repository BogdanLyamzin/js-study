

import LanguageSwitcher from "../LanguageSwitcher";

import styles from "./Navbar.module.css";

import locale from "./locale";

const Navbar = ()=> {
    const lang = "ua";

    const menuTitle = locale.menu[lang];

    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>{menuTitle}</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;