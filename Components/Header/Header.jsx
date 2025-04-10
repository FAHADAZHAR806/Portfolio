import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className=" bg-[#161616] text-white shadow-lg   ">
        <div className="container  grid grid-cols-[auto_auto] items-center py-6 w-full max-5xl m-auto px-4">
          {/* Logo */}
          <h1 className=" text-[#F50D32] text-2xl font-bold">
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
            <ul className="grid grid-cols-5  px-4  justify-items-end ">
              <li className="hover:bg-[#0563bb]  hover:border-[#0563bb] hover:rounded-full px-2 ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-[#F50D32] rounded-b-sm"
                        : "text-white"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-[#0563bb]  hover:border-[#0563bb] hover:rounded-full px-2 ">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-[#F50D32] rounded-b-sm"
                        : "text-white"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="hover:bg-[#0563bb]  hover:border-[#0563bb] hover:rounded-full px-2  ">
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-[#F50D32] rounded-b-sm"
                        : "text-white"
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="hover:bg-[#0563bb]  hover:border-[#0563bb] hover:rounded-full px-2 ">
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-[#F50D32] rounded-b-sm"
                        : "text-white"
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="hover:bg-[#0563bb]  hover:border-[#0563bb] hover:rounded-full px-2  ">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-2 border-[#F50D32] rounded-b-sm"
                        : "text-white"
                    }`
                  }
                >
                  Contact
                </NavLink>
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
            <NavLink to="/">Portfolio</NavLink>
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
