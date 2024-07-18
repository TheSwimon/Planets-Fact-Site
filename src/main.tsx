import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Global from "./styles/Global";
import PublicLayout from "./Layout/PublicLayout";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/mercury`} />,
  },
  {
    path: "/:BlogPostId",
    element: <PublicLayout />,
  },
  {
    path: "/:BlogPostId/:Topic",
    element: <PublicLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global />
    <RouterProvider router={router} />
  </React.StrictMode>
);
