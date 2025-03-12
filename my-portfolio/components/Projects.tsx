// components/Projects.tsx
"use client";

import { useState, useEffect } from "react";
import { FaPython, FaAndroid, FaJava } from "react-icons/fa";
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
    name: "Product Authenticator App",
    description:
      "Mobile app using Jetpack Compose and Firebase for authentication.",
    link: "https://github.com/DeporS/android-auth",
  },
];

const python_projects = [
  {
    name: "Kayssa Chess Engine",
    description:
      "Kayssa is a personal chess engine project I’m developing as a hobby. Built with Python and the python-chess library, it aims to provide optimal move suggestions and position evaluations using either hard coded rules, or neural network models.",
    link: "https://github.com/DeporS/kayssa",
  },
  {
    name: "RPG Game (In progress)",
    description:
      "A simple game with physics, enemies and inventory system. It uses SQLite to store player data, including items and inventory.",
    link: "https://github.com/DeporS/RPG",
  },
  {
    name: "Movement Checker",
    description:
      "A system designed for Arduino that allows people to enter secured areas at work, featuring an SQLite database and a website interface for system administrators.",
    link: "https://github.com/DeporS/android-auth",
  },
  {
    name: "Algorithms",
    description: "Implementations of tree and sorting algorithms in Python.",
    link: "https://github.com/DeporS/Algorytmy",
  },
];

const android_projects = [
  {
    name: "Product Authenticator App",
    description:
      "An Android app in Kotlin for verifying product authenticity: generates unique codes for items, supports QR scanning, and checks originality via an external database. Includes login system.",
    link: "https://github.com/DeporS/android-auth",
  },
  {
    name: "Keystroke Dynamics App",
    description:
      "An Android app in Kotlin developed in collaboration with a colleague that collects data for training and testing, sends it to a server, receives the response, and displays the results. Built using Jetpack Compose and SQLite.",
    link: "https://github.com/qkb2/KeystrokeDynamics",
  },
  {
    name: "Sportsmans Essentials App",
    description:
      "An app built with Xamarin that helps athletes calculate their BMI, track gym records, access a meal recipe list, and features a 'personal trainer' powered by OpenAI. It also includes a barcode scanner that connects to food databases, allowing users to scan product barcodes for detailed information.",
    link: "https://github.com/DeporS/SportsmansEssentialsApp",
  },
];

const java_projects = [
  {
    name: "Football Data Processing Airflow",
    description:
      "A data engineering project used with Google Cloud Platform and Apache Airflow to process and analyze football player data. The pipeline incorporates MapReduce with a combiner for efficient data aggregation, filtering, and statistical analysis, such as calculating the number of players across leagues, their average salaries, and ages.",
    link: "https://github.com/DeporS/football-data-processing-airflow",
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
        id={"androidProjects"}
        title={"Android Projects"}
        projects={android_projects}
        icon={<FaAndroid className="w-20 h-20 text-white-400 mt-30" />}
      />

      <ProjectsTechnologies
        id={"javaProjects"}
        title={"Java Projects"}
        projects={java_projects}
        icon={<FaJava className="w-20 h-20 text-white-400 mt-30" />}
      />
    </section>
  );
};

export default Projects;
