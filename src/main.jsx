import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/Features/layout/Layout.jsx";
import Home from "/src/Features/pages/Home/Home.jsx";
import About from "/src/Features/pages/About/About.jsx";
import Services from "/src/Features/pages/Services/Services.jsx";
import Contact from "/src/Features/pages/Contact/Contact.jsx";
import Portfolio from "/src/Features/pages/Portfolio/Portfolio.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
