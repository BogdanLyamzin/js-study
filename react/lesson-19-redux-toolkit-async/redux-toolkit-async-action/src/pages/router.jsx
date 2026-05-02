import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../modules/RootLayout/RootLayout";

import HomePage from "./HomePage";
import MyBooksPage from "./MyBooksPage";
import MyPurchasesPage from "./MyPurchasesPage";
import MyFavoriteBooksPage from "./MyFavoriteBooksPage";
import SinglePostPage from "./SinglePostPage";
// import SinglePostComments from "../modules/SinglePostComments/SinglePostComments";
import NotFoundPage from "./NotFoundPage";

// import { getPostCommentsByIdApi } from "../shared/api/posts-api";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "books",
        Component: MyBooksPage,
      },
      {
        path: "favorite-books",
        Component: MyFavoriteBooksPage,
      },
      {
        path: "purchases",
        Component: MyPurchasesPage,
      },
      {
        path: "posts/:id",
        Component: SinglePostPage,
        children: [
          {
            path: "comments",
            lazy: ()=> import("../modules/SinglePostComments/SinglePostComments")
          }
        ]
      },
      {
        path: "*",
        Component: NotFoundPage
      }
    ]
  },
]);

export default router;
