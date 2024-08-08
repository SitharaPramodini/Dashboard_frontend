import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../img/logo.png";
import Header from "../Header/Header.jsx";
import sidebarData from "./sidebarData"; // Import your JSON data

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate to a specific route and set active item
  const handleItemClick = (route, item) => {
    navigate(route);
    setActiveItem(item.id);
  };

  return (
    <div className="">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-4 h-4"
          
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 bg-white-50 dark:bg-white-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div
            className="flex items-center pl-2.5 mb-5"
            style={{ cursor: "pointer" }}
          >
            <img
              src={logo}
              className="h-10 me-3 sm:h-10"
              alt="logo"
            />
            <span className="text-xl font-semibold dark:text-black-400">
              Human Resource
            </span>
          </div>

          {/* Menu */}
          <ul className="space-y-2 font-medium">
            <li className="m-2">MENU</li>
            {sidebarData.menu.map((item) => (
              <li
                key={item.id}
                className={`flex items-center p-2 rounded-lg cursor-pointer ${activeItem === item.id
                    ? "bg-blue-700 text-white"
                    : "dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                  }`}
                onClick={() => handleItemClick(item.route, item)}
              >
                <div
                  className={`w-6 h-6 ${activeItem === item.id
                      ? "text-white"
                      : "hover:text-white"
                    }`}
                  
                  dangerouslySetInnerHTML={{ __html: item.icon }} // Render SVG icon
                />
                <span className="ml-3">{item.title}</span>
              </li>
            ))}
          </ul>

          {/* Recruitment */}
          <ul className="space-y-2 font-medium">
            <li className="m-2">RECRUITMENT</li>
            {sidebarData.recruitment.map((item) => (
              <li
                key={item.id}
                className={`flex items-center p-2 rounded-lg cursor-pointer ${activeItem === item.id
                    ? "bg-blue-700 text-white"
                    : "dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                  }`}
                onClick={() => handleItemClick(item.route, item)}
              >
                <div
                  className={`w-6 h-6 ${activeItem === item.id
                      ? "text-white"
                      : "hover:text-white"
                    }`}
                  dangerouslySetInnerHTML={{ __html: item.icon }} // Render SVG icon
                />
                <span className="ml-3">{item.title}</span>
              </li>
            ))}
          </ul>

          {/* Organization */}
          <ul className="space-y-2 font-medium">
            <li className="m-2">ORGANIZATION</li>
            {sidebarData.organization.map((item) => (
              <li
                key={item.id}
                className={`flex items-center p-2 rounded-lg cursor-pointer ${activeItem === item.id
                    ? "bg-blue-700 text-white"
                    : "dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                  }`}
                onClick={() => handleItemClick(item.route, item)}
              >
                <div
                  className={`w-6 h-6 ${activeItem === item.id
                      ? "text-white"
                      : "hover:text-white"
                    }`}
                  dangerouslySetInnerHTML={{ __html: item.icon }} // Render SVG icon
                />
                <span className="ml-3">{item.title}</span>
              </li>
            ))}
          </ul>

        </div>
      </aside>

      <div
        className={`sm:ml-64 bg-red transition-all ${isOpen ? "ml-0" : "ml-0"
          }`}
      >
        {/* <Header/> */}
        <div style={{ minHeight: "80vh" }} className="--pad">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
