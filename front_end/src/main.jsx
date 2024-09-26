import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
import { AuthProvider } from "./contexts/AuthContext";
import { BooksProvider } from "./contexts/BooksContext";
import SuspenseLoading from "./loadings/SuspenseLoading";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<SuspenseLoading />}>
      <AuthProvider>
        <BooksProvider>
          <RouterProvider router={router} />{" "}
        </BooksProvider>
      </AuthProvider>
    </Suspense>
  </StrictMode>
);
