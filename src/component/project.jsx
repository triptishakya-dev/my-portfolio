"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Donation Website",
    description:
      "A modern donation platform with secure payment methods and real-time form handling.",
    image: "/donation.jpg", // Save image in /public/projects
    link: "/projects/donation",
  },
  {
    title: "Blog Website",
    description:
      "A sleek and responsive blog system with category-based content and rich text editor.",
    image: "/blog.jpg",
    link: "/projects/blog",
  },
  {
    title: "E-commerce Website",
    description:
      "Full-featured online shopping experience with cart, authentication, and checkout.",
    image: "/e-commerce.jpg",
    link: "/projects/ecommerce",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with WebSocket using socket.io, user authentication and room-based chats.",
    image: "/ai.jpg",
    link: "/projects/chat",
  },
];

const ProjectSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
