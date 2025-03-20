// components/ProjectsTechnologies.tsx
"use client";

import { useState, useEffect, JSX } from "react";
import { FaPython, FaAndroid } from "react-icons/fa";

// Zmiana w typie
interface Project {
  name: string;
  description: string;
  link: string;
}

interface AnimatedSectionProps {
  id: string;
  title: string;
  projects: Project[];
  icon: JSX.Element;
}

const AnimatedSection = ({ id, projects, icon }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <section
      id={id}
      className={`text-white flex flex-col items-center text-center px-4 transition-all duration-2000 ${
        isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
      }`}
    >
      {/*Icon*/}
      <div className="mb-10">{icon}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 grid-auto-dense">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 w-full flex flex-col justify-between rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm mt-2 flex-grow">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mt-4 inline-block"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedSection;
