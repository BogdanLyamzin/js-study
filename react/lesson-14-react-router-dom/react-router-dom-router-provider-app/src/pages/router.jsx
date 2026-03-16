import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../modules/RootLayout/RootLayout";

import HomePage from "./HomePage";
import CategoriesPage from "./CategoriesPage";
import SalesPage from "./SalesPage";
import DiscountsPage from "./DiscountsPage";
import ContactsPage from "./ContactsPage";
import SinglePostPage from "./SinglePostPage";
import SinglePostComments from "../modules/SinglePostComments/SinglePostComments";
import NotFoundPage from "./NotFoundPage";

import { getPostCommentsByIdApi } from "../shared/api/posts-api";

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
        path: "categories",
        Component: CategoriesPage
      },
      {
        path: "sales",
        Component: SalesPage
      },
      {
        path: "discounts",
        Component: DiscountsPage
      },
      {
        path: "contacts",
        Component: ContactsPage
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
