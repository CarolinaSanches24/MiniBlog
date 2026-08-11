import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const NavBar = () => {

  const {user} = useAuthValue();
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 shadow">
      <NavLink to="/" className="font-playfair text-4xl text-600 text-white">
        MiniBlog
      </NavLink>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
        </li>

       {user &&(
        <>
        <li>
          <NavLink to="/posts/CreatePost" className="hover:text-blue-500">
            Novo Post
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </NavLink>
        </li>
        </>
       )}
       
        {!user &&(
          <>
          <li>
          <NavLink to="/login" className="hover:text-blue-500">
          Login
        </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="hover:text-blue-500">
            Register
          </NavLink>
         </li>
          </>
        )}
        <li>
          <NavLink to="/about" className="hover:text-blue-500">
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
