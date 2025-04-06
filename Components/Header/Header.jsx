import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className=" bg-[#161616] text-white shadow-md  ">
        <div className="container m-auto grid grid-cols-[auto_auto] items-center py-6 max-w-screen-xl px-4">
          {/* Logo */}
          <h1 className="pl-10 text-[#F50D32] text-2xl font-bold">
            WEBDEV <span className="text-[24px] text-white">.</span>
          </h1>

          {/* Menu Button (Mobile View) */}
          <div
            className="block text-end md:hidden cursor-pointer text-3xl"
            onClick={toggleMenu}
          >
            ☰
          </div>

          {/* Desktop Navbar (Grid Layout) */}
          <nav className="hidden md:block">
            <ul className="grid grid-cols-5  px-4 justify-items-end ">
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/Services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar (Mobile Menu) */}
      
      <div
        className={`fixed top-0 left-0 h-full w-[250] z-10 bg-white p-6 grid grid-rows-[auto_1fr] transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full "
        } md:hidden`}
      >
        {/* Sidebar Header (Logo & Close Button) */}
        <div className="grid grid-cols-2 items-center mb-4">
          <h1 className="text-xl font-bold text-[#F50D32]">WEBDEV.</h1>
          <button
            className="text-[#161616] text-xl justify-self-end"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Sidebar Menu (Grid Layout) */}
        <ul className="grid pb-80  text-[#161616]">
          <li>
            <NavLink to="/Home" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      
      
    </>
  );
}
