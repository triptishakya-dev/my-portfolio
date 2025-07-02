"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-4">
            Hi, I'm <span className="text-purple-600">Tripti Shakya</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Full Stack Developer 💻
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            I build modern, responsive web applications with Next.js, React, Node.js & MongoDB. Let's create something amazing!
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/tripti.jpg" // make sure this file is in public/
            alt="Tripti Shakya"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
