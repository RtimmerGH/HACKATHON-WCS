import React, { Fragment, useState, useContext } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import categoriesAdmin from "./categoriesAdmin";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../context/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AdminComponent() {
  const { userFirstName, userLastName, userEmail } = useContext(AuthContext);
  const activeStyle =
    "flex gap-3 bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md";
  const inactiveStyle =
    "flex gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-20 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XMarkIcon className="w-6 h-6 text-white" />

                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <Link to="/admin">
                  <img
                    className="h-8 w-auto"
                    src="https://www.zupimages.net/up/22/51/0z21.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">
                  <div className="space-y-1">
                    {categoriesAdmin.map((item) => (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        className={({ isActive }) =>
                          isActive ? activeStyle : inactiveStyle
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-white">
        <div className="flex items-center flex-shrink-0 px-6">
          <Link to="/admin" className="flex items-center gap-2">
            <img
              className="h-12 w-auto bg-emerald-500"
              src={logo}
              alt="Workflow"
            />
            <p className="text-lg font-medium">Easy Moove</p>
          </Link>
        </div>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
          {/* User account dropdown */}
          <Menu as="div" className="px-3 mt-3 relative inline-block text-left">
            <div>
              <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200">
                <span className="flex w-full justify-between items-center">
                  <span className="flex min-w-0 items-center justify-between space-x-3">
                    <span className="flex-1 flex flex-col min-w-0">
                      <span className="text-gray-900 text-sm font-medium truncate">
                        {userFirstName} {userLastName}
                      </span>
                      <span className="text-gray-500 text-sm truncate">
                        {userEmail}
                      </span>
                    </span>
                  </span>
                </span>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 ">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/">
                        <button
                          type="button"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "flex w-full px-4 py-2 text-sm"
                          )}
                        >
                          Back to website
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* Navigation */}
          <nav className="px-3 mt-6">
            <div className="space-y-1">
              {categoriesAdmin.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>

                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
      {/* Main column */}
      <div className="lg:pl-64 flex flex-col">
        {/* Search header */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500     lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" />

            <span className="sr-only">Open sidebar</span>
          </button>
          <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex-1 fle w-full flex md:ml-0x" />
            <div className="flex items-center">
              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full     justify-center">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full flex items-center justify-center">
                      <p className="font-bold text-xl text-gray-700">J</p>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 ">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/">
                            <button
                              type="button"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "flex w-full px-4 py-2 text-sm"
                              )}
                            >
                              Back to website
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <main className="mx-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminComponent;
