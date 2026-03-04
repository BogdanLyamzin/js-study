// import { useState } from "react";

import ThemeProvider from "../context/ThemeProvider";
import PostsProvider from "../context/PostsProvider";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import "../shared/styles/style.css";

function App() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = ()=> setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider>
      <PostsProvider>
        <Header />
        <Main />
        <Footer />
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App;
