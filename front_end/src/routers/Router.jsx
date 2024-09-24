import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import SignUpPage from "../pages/SignUpPage";
import StorePage from "../pages/StorePage";
import AuthLayout from "../components/AuthLayout";
import SignInPage from "../pages/SignInPage";
import AboutUs from "../pages/AboutUs";
import StoreLayout from "../components/StoreLayout";
import AddBookPage from "../pages/AddBookPage";
import UpdateBookPage from "../pages/UpdateBookPage";
import AdminOnly from "./AdminOnly";
import AdminOrMod from "./AdminOrMod";

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
