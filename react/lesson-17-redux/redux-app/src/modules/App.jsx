import { RouterProvider } from "react-router-dom";

import ThemeProvider from "../context/ThemeProvider";
import PostsProvider from "../context/PostsProvider";

import router from "../pages/router";

import "../shared/styles/style.css";

function App() {
  return (
    <ThemeProvider>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App;
