"use client";
import React, { useState } from "react";
import {
  FaCaretDown,
  FaSearch,
  FaUser,
  FaBell,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_LOGOUT_API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          localStorage.removeItem("email");

          toast.success("Logged out successfully!");

          router.push("/");
        } else {
          toast.error("Logout failed. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred during logout. Please try again later.");
      }
    } else {
      toast.error("No token found. You are not logged in.");
    }
  };

  return (
    <>
      <ToastContainer />
      <header className="bg-[#2e2e2e] py-4">
        <div className="container mx-auto flex items-center justify-between px-20">
          <div>
            <img
              src="https://d9yd37cx1ebbr.cloudfront.net/Localhost/logos/1690282966.Netflix-Logo.png"
              alt="logo"
              className="w-24 h-auto"
            />
          </div>
          <nav className="flex gap-5 items-center">
            <a
              href="#"
              className="text-white text-sm no-underline transition-colors duration-300 hover:text-red-500"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-sm no-underline transition-colors duration-300 hover:text-red-500"
            >
              Watch
            </a>
            <a
              href="#"
              className="text-white text-sm no-underline transition-colors duration-300 hover:text-red-500"
            >
              News
            </a>
            <a
              href="#"
              className="text-white text-sm no-underline transition-colors duration-300 hover:text-red-500"
            >
              Learn
            </a>
            <a
              href="#"
              className="text-white text-sm no-underline transition-colors duration-300 hover:text-red-500"
            >
              Community
            </a>
          </nav>
          <div className="flex items-center text-white space-x-4">
            <button className="p-2 bg-white text-[#2e2e2e] rounded-full flex items-center justify-center">
              <FaSearch className="text-md" />
            </button>
            <span>Hi, {localStorage.getItem('name')}</span>
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  src="/person-placeholder.webp"
                  alt="Shaheer"
                  className="w-11 h-11 rounded-full"
                />
                <FaCaretDown className="ml-2 text-white text-lg" />
              </div>
              {isOpen && (
                <ul className="z-10 absolute right-0 mt-2 w-60 py-4 bg-[#2e2e2e] text-white border border-gray-700 rounded-lg">
                  <li className="px-4 py-4">
                    <h1 className="text-xl font-bold">{localStorage.getItem('name')}</h1>
                    <h2 className="text-gray-400 text-sm">{localStorage.getItem('email')}</h2>
                  </li>
                  <li>
                    <hr className="border-t border-gray-600" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-4 hover:text-red-700 flex items-center text-sm"
                      href="#"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaUser className="mr-3 text-lg" /> My account
                    </a>
                  </li>
                  <li>
                    <hr className="border-t border-gray-600" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-4 hover:text-red-700 flex items-center text-sm"
                      href="#"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaBell className="mr-3 text-lg" /> Notifications
                    </a>
                  </li>
                  <li>
                    <hr className="border-t border-gray-600" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-4 hover:text-red-700 flex items-center text-sm"
                      href="#"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaHeart className="mr-3 text-lg" /> My wishlist
                    </a>
                  </li>
                  <li>
                    <hr className="border-t border-gray-600" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-4 hover:text-red-700 flex items-center text-sm"
                      href="#"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="mr-3 text-lg" /> Sign out
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponent;
