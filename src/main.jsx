import React from "react";
import "./App.css"
import ReactDOM from "react-dom/client";
import {  RouterProvider, createBrowserRoute  } from "react-router-dom";
import Layout from "../Components/Layout/Layout.jsx";
import Home from "../Components/Home/Home.jsx";
import About from "../Components/About/About.jsx";
import Services from "../Components/Services/Services.jsx";
import Contact from "../Components/Contact/Contact.jsx";




const router = createBrowserRoute([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Services",
        element: <Services/>,
      },
      {
        path: "Contact",
        element: <Contact/>,
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
