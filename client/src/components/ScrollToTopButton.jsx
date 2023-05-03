import React, { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      id="scroll-to-top"
      style={{ display: isVisible ? "block" : "none" }}
      onClick={handleClick}
      className="fixed bottom-0 right-0 z-50 p-4 font-medium text-white text-xl bg-white rounded-full hover:bg-gray-300 m-4"
    >
      <BsFillArrowUpSquareFill className="text-slate-800" />
    </button>
  );
}

export default ScrollToTopButton;
