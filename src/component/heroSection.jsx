"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-4">
            Hi, I'm <span className="text-purple-600">Tripti Shakya</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Full Stack Developer 💻
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            I build modern, responsive web applications with Next.js, React, Node.js & MongoDB.
            Let's create something amazing!
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-md hover:shadow-xl"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-2xl animate-float">
            <Image
              src="/tripti.jpg" // Ensure it's in public/
              alt="Tripti Shakya"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Floating animation style */}
      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
