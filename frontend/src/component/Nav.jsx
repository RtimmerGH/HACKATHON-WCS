/* eslint-disable import/no-duplicates */
import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import user from "../pages/img/compteWhite.png";
import adminpic from "../pages/img/admin.png";
import { AuthContext } from "../context/AuthContext";

export default function Nav({ setLoginModal, loginModal }) {
  const navigate = useNavigate();

  const { userToken, userRole } = useContext(AuthContext);

  const handleChange = () => {
    if (userToken) {
      navigate("/profile");
    } else {
      setLoginModal(!loginModal);
    }
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <>
      <div className="sticky top-0">
        <nav className="bg-white border-gray-200 px-2 md:px-5 py-4 bg-gradient-to-r from-lime-400 to-cyan-500">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="h-1à mr-3 sm:h-9"
                alt="Easymove Logo"
              />
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
                Easy Move
              </span>
            </a>
            {userRole > 1 && (
              <button
                data-collapse-toggle="mega-menu"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg hover:bg-gray-100   focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu"
                aria-expanded="false"
                onClick={handleAdmin}
              >
                <img
                  src={adminpic}
                  className="h-8 mr-3 sm:h-9"
                  alt="user logo"
                />
              </button>
            )}
            <div className="flex items-center md:order-2">
              <button
                data-collapse-toggle="mega-menu"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg hover:bg-gray-100   focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu"
                aria-expanded="false"
                onClick={handleChange}
              >
                <img src={user} className="h-8 mr-3 sm:h-9" alt="user logo" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
