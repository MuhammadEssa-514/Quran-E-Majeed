import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md"; // Importing dashboard icon from react-icons

const IndexDropdown = () => {
  const links = [
    { to: "/home", label: "Home", className: "bg-yellow-500" },
    { to: "/about", label: "About", className: "bg-blueGray-800" },
    { to: "/courses", label: "Courses", className: "bg-blueGray-800" },
    { to: "/contact", label: "Contact Us", className: "bg-blueGray-800" },
    { to: "/quran", label: "Quran", className: "bg-blueGray-800" },
    { to: "/admin/dashboard", label: "Dashboard", className: "bg-blueGray-800" },
  ];

  return (
    <nav>
      <div className="container mx-auto px-2">
        <div className=" md:flex justify-between">
          <div className=" bg-blueGray-800 flex p-2 flex-wrap">
            {links.map((link, index) => (
              <div className="flex items-center" key={index}>
                <Link
                  to={link.to}
                  className={`hover:text-gray-300 text-white px-3 py-4 lg:py-2 mr-4 flex items-center text-xs font-bold ${link.className}`}
                  aria-label={link.label}
                >
                  <MdOutlineDashboard className="mr-2" />
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IndexDropdown;