import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Page } from "./utils/constant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage page={Page.Home}></MainPage>,
  },
  {
    path: "/projects",
    element: <MainPage page={Page.Projects}></MainPage>,
  },
  {
    path: "/about",
    element: <MainPage page={Page.About}></MainPage>,
  },
  {
    path: "/blogs",
    element: <MainPage page={Page.Blogs}></MainPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
