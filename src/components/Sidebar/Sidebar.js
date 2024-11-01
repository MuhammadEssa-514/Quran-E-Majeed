/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

import { MdDashboard } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { BsCalendar2EventFill } from "react-icons/bs";
import { GiCarrier } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import logo from 'assets/img/main-logo.png';
import { FaUserGraduate } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";








export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const handleLinkClick = () => {
    // Check if the screen width is small (for example, less than 768px)
    if (window.innerWidth < 768) {
      setCollapseShow("hidden");
    }
  };
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl  text-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 bg-blueGray-800 ">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer  opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="text-yellow-500 md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
           Talimaat e Ahlibayt
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
          
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0  overflow-y-auto overflow-x-hidden h-auto items-center  flex-1 bg-blueGray-800  rounded " + 
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200 ">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-800 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                 <img src={logo} className="h-10" />
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer opacity-50 md:hidden px-3 py-1 text-2xl leading-none text-white "
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times text-white"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search here....."
                  className="px-3 py-2 h-12 border border-solid placeholder-blueGray-800 text-blueGray-800 bg-yellow-500 rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            
            {/* Heading */}
            <h6 className="md:min-w-full text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center flex">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                    ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-blueGray-400")
                  }
                  to="/admin/dashboard"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <MdDashboard className="cursor-pointer text-xl mr-2" />{" "}
                    Dashboard
                  </div>
                </Link>
              </li>

              <li className="items-center flex">
                <Link
                 className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/teacher") !== -1
                    ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-blueGray-400")
                  }
                  to="/admin/teacher"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <FaUserGraduate   className="cursor-pointer text-xl mr-2" />{" "}
                   Teacher
                  </div>
                </Link>
              </li>



              <li className="items-center flex">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/event") !== -1
                     ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-gray-300")
                  }
                  to="/admin/event"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <BsCalendar2EventFill className="cursor-pointer text-xl mr-2" />{" "}
                    Event
                  </div>
                </Link>
              </li>

              <li className="items-center flex">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/courses") !== -1
                     ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-gray-300")
                  }
                  to="/admin/courses"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <MdDashboard className="cursor-pointer text-xl mr-2" />{" "}
                    Courses
                  </div>
                </Link>
              </li>

              <li className="items-center flex">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/gallary") !== -1
                     ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-gray-300")
                  }
                  to="/admin/gallary"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <GrGallery className="cursor-pointer text-xl mr-2" />{" "}
                    Gallary
                  </div>
                </Link>
              </li>

              <li className="items-center flex">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/carrier") !== -1
                     ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-gray-300")
                  }
                  to="/admin/carrier"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <GiCarrier className="cursor-pointer text-xl mr-2" />{" "}
                    Carrier
                  </div>
                </Link>
              </li>

              <li className="items-center flex">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/plans") !== -1
                     ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-gray-300")
                  }
                  to="/admin/plans"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <MdLocalOffer className="cursor-pointer text-xl mr-2" />{" "}
                    Plans
                  </div>
                </Link>
              </li>

              <li className="items-center flex">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/history") !== -1
                     ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-gray-300")
                  }
                  to="/admin/history"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center">
                    <FaHistory className="cursor-pointer text-xl mr-2" />{" "}
                    History
                  </div>
                </Link>
               
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/paper") !== -1
                    ? "text-yellow-500 hover:text-yellow-600"
                    : "text-white hover:text-blueGray-400")
                  }
                  to="/admin/paper"
                  onClick={handleLinkClick}
                >
                 <div className="flex items-center">
                    <IoNewspaper className="cursor-pointer text-xl mr-2" />{" "}
                    Paper
                  </div>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
           

            {/* <hr className="my-4 md:min-w-full" /> */}
            <h6 className="md:min-w-full text-white text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"></ul>
          </div>
        </div>
      </nav>
    </>
  );
}
