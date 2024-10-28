import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Apropos from "./apropos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apropos",
    element: <Apropos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
