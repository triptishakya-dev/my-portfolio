"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold text-indigo-600">devloper</div>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-gray-600 hover:text-indigo-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/my-journey" className="text-gray-600 hover:text-indigo-600 transition">
              my-journey
            </a>
          </li>
          <li>
            <a href="/projects" className="text-gray-600 hover:text-indigo-600 transition">
              projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
