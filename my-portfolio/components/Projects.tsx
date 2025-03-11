// components/Projects.tsx
"use client";

import { useState, useEffect } from "react";
import { FaPython, FaAndroid } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ProjectsTechnologies from "@/components/ProjectsTechnologies";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiper_projects = [
  {
    name: "Kayssa Chess Engine",
    description: "A chess engine built in Python using the `chess` library.",
    link: "https://github.com/DeporS/kayssa-chess-engine",
    image: "/images/chessboard.jpg",
  },
  {
    name: "Product Verify App",
    description: "Android app in Kotlin for verifying product authenticity.",
    link: "https://github.com/DeporS/CCApp",
    image: "/images/phone.jpg",
  },
  {
    name: "Prison Management Project",
    description:
      "A project showcasing SQL queries and database management techniques for a prison management system using Oracle Database.",
    link: "https://github.com/DeporS/prison-management-sql-oracle/tree/main",
    image: "/images/prison.jpg",
  },
  {
    name: "Keystroke Dynamics App",
    description:
      "An Android app in Kotlin for collecting data from study participants for our thesis on biometric user identification using GNNs.",
    link: "https://github.com/qkb2/KeystrokeDynamics",
    image: "/images/keyboard.jpg",
  },
  {
    name: "Speedway Typer Full Stack",
    description:
      "Laravel app to track user progress in speedway events: manage race cards, calculate points, display rankings, and showcase trophies.",
    link: "https://github.com/DeporS/KartaTypera",
    image: "/images/speedway.jpg",
  },
];

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

const python_projects = [
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

const kotlin_projects = [
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
      className={`text-white min-h-screen flex flex-col items-center text-center transition-all duration-2000 ${
        isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold mb-5">My Projects</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-sm sm:max-w-2xl md:max-w-5xl"
      >
        {swiper_projects.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left width-max max-w-sm sm:max-w-md md:max-w-5xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-100 object-cover rounded-lg mb-4"
              />
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
      {/*Projects divided into technologies*/}
      <ProjectsTechnologies
        id={"pythonProjects"}
        title={"Python Projects"}
        projects={python_projects}
        icon={<FaPython className="w-20 h-20 text-white-400 mt-50" />}
      />

      <ProjectsTechnologies
        id={"kotlinProjects"}
        title={"Kotlin Projects"}
        projects={kotlin_projects}
        icon={<FaAndroid className="w-20 h-20 text-white-400 mt-10" />}
      />
    </section>
  );
};

export default Projects;
