// components/About.tsx

"use client";

import { useState, useEffect } from "react";

const About = () => {
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

    const section = document.getElementById("aboutMe");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="aboutMe"
      className={`text-white h-screen flex flex-col items-center text-center transition-all duration-2000 ${
        isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-sm sm:text-lg mt-2">
        🎓 Computer Science Bachelor's student at Poznań University of
        Technology.
      </p>
      <p className="text-sm sm:text-lg mt-2">
        💻 Proficient in Python, Data Engineering, and Android development.
      </p>
      <p className="text-sm sm:text-lg mt-2">
        👩‍💻 Experienced with Oracle, Laravel, Hadoop, Jetpack Compose and Docker.
      </p>
    </section>
  );
};

export default About;
