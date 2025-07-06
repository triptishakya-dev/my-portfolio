"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "my-portfolio", updated: "2 days ago", language: "JavaScript" },
  { title: "bring-smile", updated: "last week", language: "JavaScript" },
  { title: "blog_website_with_admin-panel", updated: "Jun 2", language: "JavaScript" },
  { title: "blog_website", updated: "May 31", language: "JavaScript" },
  { title: "e-commerce-web", updated: "May 20", language: "JavaScript" },
  { title: "npm-packeg", updated: "May 17", language: "JavaScript" },
  { title: "chat--application", updated: "May 16", language: "HTML" },
  { title: "chat-application", updated: "May 16", language: "HTML" },
  { title: "Form-Nextj.s", updated: "Mar 26", language: "JavaScript" },
  { title: "form-nextJs", updated: "Mar 26", language: "—" },
  { title: "PasswordGenerator-React", updated: "Mar 20", language: "JavaScript" },
  { title: "blockwebsite-my-fst-react-project", updated: "Oct 5, 2024", language: "JavaScript" },
  { title: "QR-generator", updated: "Jun 20, 2024", language: "CSS" },
  { title: "age-calcuilater", updated: "Jun 20, 2024", language: "HTML" },
  { title: "sundown-animated-website", updated: "May 21, 2024", language: "HTML" },
  { title: "Moving-cursor", updated: "May 13, 2024", language: "CSS" },
  { title: "bg-changer", updated: "May 12, 2024", language: "JavaScript" },
  { title: "My-First-React-Project", updated: "Apr 29, 2024", language: "JavaScript" },
  { title: "react-project", updated: "Apr 27, 2024", language: "—" },
  { title: "CSS-Bootcamp", updated: "Mar 1, 2024", language: "HTML" },
];

const MyProjects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Language:</span>{" "}
                {project.language}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Updated:</span>{" "}
                {project.updated}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
