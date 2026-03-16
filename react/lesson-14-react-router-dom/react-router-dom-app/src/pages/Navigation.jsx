import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));
const CategoriesPage = lazy(() => import("./CategoriesPage"));
const SalesPage = lazy(() => import("./SalesPage"));
const DiscountsPage = lazy(() => import("./DiscountsPage"));
const ContactsPage = lazy(() => import("./ContactsPage"));
const SinglePostPage = lazy(() => import("./SinglePostPage"));
const SinglePostComments = lazy(() => import("../modules/SinglePostComments/SinglePostComments"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const Navigation = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />}>
          <Route path="comments" element={<SinglePostComments />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Navigation;
