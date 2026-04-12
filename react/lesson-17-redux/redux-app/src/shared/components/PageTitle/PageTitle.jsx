// import { useContext } from "react";

// import { themeContext } from "../../../context/ThemeProvider";
import useTheme from "../../hooks/useTheme";

import styles from "./PageTitle.module.css";

const PageTitle = ({ children }) => {
  // const {theme} = useContext(themeContext);
  const {theme} = useTheme();
  
  return <h1 className={`${styles.title} ${styles[theme]}`}>{children}</h1>;
};

export default PageTitle;
