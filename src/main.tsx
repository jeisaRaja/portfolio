import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage page="home"></MainPage>,
  },
  {
    path: "/projects",
    element: <MainPage page="projects"></MainPage>,
  },
  {
    path: "/about",
    element: <MainPage page="about"></MainPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
