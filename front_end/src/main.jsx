import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { BooksProvider } from "./contexts/BooksContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BooksProvider>
        <RouterProvider router={router} />{" "}
      </BooksProvider>
    </AuthProvider>
  </StrictMode>
);
