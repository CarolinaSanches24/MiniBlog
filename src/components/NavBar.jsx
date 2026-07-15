import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 shadow">
      <NavLink to="/" className="font-playfair text-4xl text-600 text-white">
        Universo Dev
      </NavLink>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
        </li>

        <NavLink to="/login" className="hover:text-blue-500">
          Login
        </NavLink>
        <li>
          <NavLink to="/register" className="hover:text-blue-500">
            Register
          </NavLink>
          <li></li>
          <NavLink to="/about" className="hover:text-blue-500">
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
