// components/AnimatedSection.tsx
"use client";

import { useState, useEffect } from "react";

interface AnimatedSectionProps {
  id: string;
  title: string;
  content: string[];
}

const AnimatedSection = ({ id, title, content }: AnimatedSectionProps) => {
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
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index} className="text-sm sm:text-lg mt-2">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default AnimatedSection;
