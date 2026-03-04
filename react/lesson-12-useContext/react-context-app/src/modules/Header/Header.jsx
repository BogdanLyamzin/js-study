// import { useContext } from "react";

import Container from "../../shared/components/Container/Container";

// import { themeContext } from "../../context/ThemeProvider";
import useTheme from "../../shared/hooks/useTheme";
import usePosts from "../../shared/hooks/usePosts";

import items from "./items";

import styles from "./Header.module.css";

const Header = () => {
  // const {theme, toggleTheme} = useContext(themeContext);
  const {theme, toggleTheme} = useTheme();
  const {posts} = usePosts();
  
  const elements = items.map(({ href, text }) => (
    <li key={text}>
      <a href={href} className={`${styles.link} ${styles[theme]}`}>
        {text}
      </a>
    </li>
  ));

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <Container>
        <div className={styles.content}>
          <a href="/" className={`${styles.logo} ${styles[theme]}`}>
            LOGO
          </a>
          <ul className={styles.menu}>{elements}</ul>
          <div className={styles.headerInfo}>
            <button
              onClick={toggleTheme}
              type="button"
              className={`${styles.themeBtn} ${styles[theme]}`}
            >
              to {theme === "light" ? "dark" : "light"} theme
            </button>
            <span className={`${styles.postsCount} ${styles[theme]}`}>
              {posts.length}
              posts
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
