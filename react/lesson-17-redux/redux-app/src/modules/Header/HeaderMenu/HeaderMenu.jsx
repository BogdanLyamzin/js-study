import { NavLink } from "react-router-dom";

import useTheme from "../../../shared/hooks/useTheme";

import items from "./items";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = ()=> {
    const {theme} = useTheme();

    const elements = items.map(({ href, text }) => (
        <li key={text}>
          <NavLink to={href} className={`${styles.link} ${styles[theme]}`}>
            {text}
          </NavLink>
        </li>
      ));

      return <ul className={styles.menu}>{elements}</ul>
}

export default HeaderMenu;