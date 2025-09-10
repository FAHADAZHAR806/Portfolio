import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "/src/App.jsx";
import Home from "/src/pages/Home/Home.jsx";
import About from "/src/pages/About/About.jsx";
import Services from "/src/pages/Services/Services.jsx";
import Contact from "/src/pages/Contact/Contact.jsx";
import Portfolio from "/src/pages/Portfolio/Portfolio.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Portfolio" element={<Portfolio />} />
      <Route path="Services" element={<Services />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
