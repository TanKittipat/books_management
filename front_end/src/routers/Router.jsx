import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const DefaultLayout = lazy(() => import("../components/DefaultLayout"));
const AuthLayout = lazy(() => import("../components/AuthLayout"));
const StoreLayout = lazy(() => import("../components/StoreLayout"));
const Home = lazy(() => import("../pages/Home"));
const StorePage = lazy(() => import("../pages/StorePage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const AddBookPage = lazy(() => import("../pages/AddBookPage"));
const UpdateBookPage = lazy(() => import("../pages/UpdateBookPage"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const AdminOnly = lazy(() => import("./AdminOnly"));
const AdminOrMod = lazy(() => import("./AdminOrMod"));

// import Home from "../pages/Home";
// import DefaultLayout from "../components/DefaultLayout";
// import SignUpPage from "../pages/SignUpPage";
// import StorePage from "../pages/StorePage";
// import AuthLayout from "../components/AuthLayout";
// import SignInPage from "../pages/SignInPage";
// import AboutUs from "../pages/AboutUs";
// import StoreLayout from "../components/StoreLayout";
// import AddBookPage from "../pages/AddBookPage";
// import UpdateBookPage from "../pages/UpdateBookPage";
// import AdminOnly from "./AdminOnly";
// import AdminOrMod from "./AdminOrMod";
// import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "aboutus", element: <AboutUs /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <SignUpPage /> },
      { path: "signin", element: <SignInPage /> },
    ],
  },
  {
    path: "/",
    element: <StoreLayout />,
    children: [
      { path: "store", element: <StorePage /> },
      {
        path: "add",
        element: (
          <AdminOnly>
            <AddBookPage />
          </AdminOnly>
        ),
      },
      {
        path: "updatebook/:id",
        element: (
          <AdminOrMod>
            <UpdateBookPage />
          </AdminOrMod>
        ),
      },
    ],
  },
]);

export default router;
