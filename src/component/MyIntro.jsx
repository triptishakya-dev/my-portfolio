"use client";

import React from "react";
import { motion } from "framer-motion";

const MyIntro = () => {
  return (
    <section
      id="my-intro"
      className="py-20 px-6 sm:px-12 bg-gradient-to-br from-purple-100 via-white to-indigo-100"
    >
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 sm:p-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-700 mb-8"
        >
          My Introduction
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-800 text-lg leading-relaxed"
        >
          Hello! I'm Tripti, a law graduate turned tech enthusiast. I completed my 12th in 2019 and pursued a law degree, which I finished in 2024. Although law was a valuable experience, I realized during my studies that it wasn’t where my true interest lay.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-indigo-600 mt-8 mb-4"
        >
          Why I’m Interested in Technology
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-800 text-lg leading-relaxed"
        >
          My journey into tech began when a friend introduced me to coding. That small conversation opened the door to a world I instantly connected with. I loved the idea of building real things — apps, websites, tools — that could solve problems or bring ideas to life. I started with basic HTML and CSS, then discovered React, and everything just clicked. The logic, creativity, and constant learning in technology inspire me to grow every single day.
        </motion.p>
      </div>
    </section>
  );
};

export default MyIntro;
