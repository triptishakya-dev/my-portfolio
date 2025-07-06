"use client";

import React from "react";

const MyJourney = () => {
  return (
    <section
      id="my-journey"
      className="relative py-20 px-6 sm:px-10 bg-gradient-to-br from-indigo-100 via-white to-purple-100"
    >
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          My Journey
        </h2>

        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          I completed my 12th in 2019 and decided to study law, which I completed in 2024. But deep down, I realized I wasn’t truly interested in law.
          <br />
          <br />
          One day, I met a friend who introduced me to the world of coding. He gave me an overview of how tech works, and that sparked my curiosity. I thought, "Let’s give it a try."
          <br />
          <br />
          Gradually, I started learning on my own. When I discovered <strong>React</strong>, everything changed — I loved its simplicity and power. I began building real-world projects like donation platforms, blogs, e-commerce websites, and chat apps.
          <br />
          <br />
          Today, I feel satisfied and proud of my journey — from law to tech. I’m continuously learning and excited about where this path will lead me next.
        </p>
      </div>
    </section>
  );
};

export default MyJourney;
