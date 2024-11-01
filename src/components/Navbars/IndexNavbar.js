import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaSquareTwitter, FaYoutube } from "react-icons/fa6";
import logo from 'assets/img/main-logo.png';

// components
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-500 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <img src={logo} className="h-12" alt="Logo" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className={`fas fa-bars ${navbarOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

          <div className={`flex ${navbarOpen ? "flex-col" : "hidden"} lg:flex lg:flex-row lg:ml-auto bg-blueGray-800   mt-2 lg:bg-transparent `}>
            <IndexDropdown />

            <ul className={`flex flex-col lg:flex-row list-none  ${navbarOpen ? "block" : "hidden lg:flex"}`}>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/share/LT1nsYVKwbtDjiaZ/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareFacebook className="text-yellow-500  text-2xl leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.youtube.com/@taleematahlibaytacademytvn5529"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-yellow-500 text-2xl leading-lg" />
                  <span className="lg:hidden inline-block ml-2">YouTube</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareTwitter className="text-yellow-500 text-2xl leading-lg" />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
