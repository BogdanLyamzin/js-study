// import { useContext } from "react";

import Container from "../../shared/components/Container/Container";

// import { themeContext } from "../../context/ThemeProvider";
import useTheme from "../../shared/hooks/useTheme";

import styles from "./Footer.module.css";

const Footer = () => {
  // const {theme} = useContext(themeContext);
  const {theme} =useTheme();

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <Container>
        <p className={`${styles.copyright} ${styles[theme]}`}>2025 @Copyright</p>
      </Container>
    </footer>
  );
};

export default Footer;
