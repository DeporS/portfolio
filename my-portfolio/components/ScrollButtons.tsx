"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollButtons = () => {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowUp(window.scrollY > 0); // Pokaż strzałkę w górę, jeśli nie jesteśmy na samej górze
      setShowDown(
        window.innerHeight + window.scrollY <
          document.documentElement.scrollHeight
      ); // Pokaż strzałkę w dół, jeśli nie jesteśmy na samym dole
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Sprawdzenie od razu po zamontowaniu

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight / 2, behavior: "smooth" }); // Scroll o wysokość ekranu w górę
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: "smooth" }); // Scroll o wysokość ekranu w dół
  };

  return (
    <>
      {showUp && (
        <button
          onClick={scrollUp}
          className="fixed justify-center top-4 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition z-50"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
      {showDown && (
        <button
          onClick={scrollDown}
          className="fixed justify-center bottom-4 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition z-50"
        >
          <FaArrowDown className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollButtons;
