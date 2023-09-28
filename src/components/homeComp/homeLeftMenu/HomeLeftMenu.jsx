import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const homeLeftMenu = () => {
  return (
    <nav className="flex items-center justify-between">
      <a href="#" className="navbar-brand w-[50px] py-2">
        <img
          src="https://www.ansonika.com/wilio/img/logo.png"
          className="w-full max-w-full"
          alt="logo"
        />
      </a>

      <ul className="navbar-nav flex items-center justify-between">
        <li className="nav-items px-2 py-2">
          <a href="" className="nav-link text-gray-300 hover:text-white">
            <FaFacebookF />
          </a>
        </li>
        <li className="nav-items px-2 py-2">
          <a href="" className="nav-link text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
        </li>
        <li className="nav-items px-2 py-2">
          <a href="" className="nav-link text-gray-300 hover:text-white">
            <FaGooglePlusG />
          </a>
        </li>
        <li className="nav-items px-2 py-2">
          <a href="" className="nav-link text-gray-300 hover:text-white">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default homeLeftMenu;
