import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const homeLeftMenu = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-0">
      <Link to="/" className="navbar-brand w-[50px] py-2">
        <img
          src="https://www.ansonika.com/wilio/img/logo.png"
          className="w-full max-w-full"
          alt="logo"
        />
      </Link>

      <ul className="navbar-nav flex items-center justify-between mr-10 sm:mr-7 lg:mr-0">
        <li className="nav-items px-2 py-2">
          <Link to="/" className="nav-link text-gray-300 hover:text-white">
            <FaFacebookF />
          </Link>
        </li>
        <li className="nav-items px-2 py-2">
          <Link to="/" className="nav-link text-gray-300 hover:text-white">
            <FaTwitter />
          </Link>
        </li>
        <li className="nav-items px-2 py-2">
          <Link to="/" className="nav-link text-gray-300 hover:text-white">
            <FaGooglePlusG />
          </Link>
        </li>
        <li className="nav-items px-2 py-2">
          <Link to="/" className="nav-link text-gray-300 hover:text-white">
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default homeLeftMenu;
