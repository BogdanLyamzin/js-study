import ThemeProvider from "../context/ThemeProvider";
import PostsProvider from "../context/PostsProvider";

import Navigation from "../pages/Navigation";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import "../shared/styles/style.css";

function App() {
  return (
    <ThemeProvider>
      <PostsProvider>
        <Header />
        <Navigation />
        <Footer />
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App;
