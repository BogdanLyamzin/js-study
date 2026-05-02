import {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {fetchBooks} from "../../redux/books/booksOperations";

import useTheme from "../../shared/hooks/useTheme";

import styles from "./RootLayout.module.css";

const RootLayout = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={`${styles.main} ${styles[theme]}`}><Outlet /></main>
      <Footer />
    </>
  );
};

export default RootLayout;
