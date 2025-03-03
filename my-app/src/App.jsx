import Layout from "./layout/layout";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/about";
import GetById from "./pages/getById/get-by-id";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/home";
import "./App.css"
import Blog from "./pages/blog/blog";
import Contact from "./pages/Contact/contact";
import Contact2 from "./pages/Contact/contact2";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path : "/blog/:id",
          element : <GetById />
        },
        {
          path : "/contact2",
          element : <Contact2 />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
