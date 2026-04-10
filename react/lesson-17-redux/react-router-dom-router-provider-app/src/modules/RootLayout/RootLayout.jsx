import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import useTheme from "../../shared/hooks/useTheme";

import styles from "./RootLayout.module.css";

const RootLayout = () => {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <main className={`${styles.main} ${styles[theme]}`}><Outlet /></main>
      <Footer />
    </>
  );
};

export default RootLayout;
