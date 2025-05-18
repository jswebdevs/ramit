import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import Routes from "./routers/Routes";
import AdminAuthProvider from "./providers/AdminAuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AdminAuthProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </AdminAuthProvider>
    </HelmetProvider>
  </StrictMode>
);
