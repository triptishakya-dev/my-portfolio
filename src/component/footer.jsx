"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-3">Tripti Shakya</h2>
          <p className="text-sm text-gray-300">
            Full Stack Developer | Passionate about building meaningful digital experiences.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <Link href="https://github.com/" target="_blank">
              <FaGithub className="w-6 h-6 hover:text-indigo-500 transition" />
            </Link>
            <Link href="https://linkedin.com/" target="_blank">
              <FaLinkedin className="w-6 h-6 hover:text-indigo-500 transition" />
            </Link>
            <Link href="https://instagram.com/" target="_blank">
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
            </Link>
            <Link href="mailto:youremail@example.com">
              <FaEnvelope className="w-6 h-6 hover:text-yellow-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        &copy; {new Date().getFullYear()} Tripti Shakya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
