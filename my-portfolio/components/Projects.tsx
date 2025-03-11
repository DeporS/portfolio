// components/Projects.tsx
"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    name: "Kayssa Chess Engine",
    description: "A chess engine built in Python using the `chess` library.",
    link: "https://github.com/DeporS/kayssa",
  },
  {
    name: "Android Authenticator",
    description:
      "Mobile app using Jetpack Compose and Firebase for authentication.",
    link: "https://github.com/DeporS/android-auth",
  },
];

const Projects = () => {
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

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className={`text-white h-screen flex flex-col items-center text-center transition-all duration-2000 ${
        isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold mb-10">My Projects</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, // 3 secs per slide
          disableOnInteraction: false,
        }}
        className="w-full max-w-lg sm:max-w-2xl md:max-w-4xl px-4"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left min-w-[300px] sm:min-w-[400px] md:min-w-[500px] mx-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-4 inline-block"
              >
                View on GitHub →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg pl-4 pr-4"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm mt-2">{project.description}</p>
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

export default Projects;
