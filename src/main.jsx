import React from "react";
import "./App.css"
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout.jsx";
import Intro from "../Components/Home/Intro.jsx";
import About from "../Components/About/About.jsx";
import Services from "../Components/Services/Services.jsx";
import Contact from "../Components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Intro />,
      },
      {
        path: "/Home",
        element: <Intro />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Services",
        element: <Services/>,
      },
      {
        path: "/Contact",
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
