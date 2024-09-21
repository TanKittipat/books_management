import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import SignUpPage from "../pages/SignUpPage";
import StorePage from "../pages/StorePage";
import AuthLayout from "../components/AuthLayout";
import SignInPage from "../pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "store", element: <StorePage /> },
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
]);

export default router;
