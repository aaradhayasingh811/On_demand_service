import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // Corrected from "react-router"

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md p-2">
      {/* Logo Section */}
      <div className="flex items-center justify-center sm:ms-14">
        <img src={logo} alt="Logo" className="w-16 h-16 mr-4" />
        <Link
          to="/"
          className="sm:hidden block bg-[#fe4b01] w-max text-white text-sm font-medium py-2 px-4 rounded"
        >
          Contact
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4 sm:space-x-8 my-4 justify-center items-center sm:my-0">
        <Link
          to="/"
          className="text-lg font-medium text-center text-gray-700 hover:text-[#fe4b01] transition"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="text-lg font-medium text-center text-gray-700 hover:text-[#fe4b01] transition"
        >
          Login
        </Link>
        {/* <Link
          to="#about"
          className="text-lg font-medium text-gray-700 hover:text-[#fe4b01] transition"
        >
          About
        </Link> */}
        <Link
          to="/blog"
          className="text-lg font-medium text-center text-gray-700 hover:text-[#fe4b01] transition"
        >
          Blog
        </Link>
      </div>

      {/* Contact Button */}
      <div className="hidden sm:flex sm:me-8">
        <Link
          to="/"
          className="bg-[#fe4b01] text-white text-center text-sm font-medium py-2 px-4 rounded shadow hover:bg-[#e44301] transition w-max"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;