import Container from "../../shared/components/Container/Container";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import useTheme from "../../shared/hooks/useTheme";
import usePosts from "../../shared/hooks/usePosts";

import styles from "./Header.module.css";

const Header = () => {
  const {theme, toggleTheme} = useTheme();
  const {posts} = usePosts();

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <Container>
        <div className={styles.content}>
          <a href="/" className={`${styles.logo} ${styles[theme]}`}>
            LOGO
          </a>
          <HeaderMenu />
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
