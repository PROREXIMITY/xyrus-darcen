"use client";
import React, { useState, useEffect } from "react";
import { Audiowide} from "next/font/google";


const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})


function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-[#0b0b0f]/50 backdrop-blur-lg" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`${audiowide.className} text-2xl font-bold text-white hover:scale-110 transition-all duration-300`}
          >
            XRD
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-[rgb(255,204,112)] group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden mt-4`}>
            <div className="flex flex-col space-y-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-white/80 hover:text-white transition-colors duration-300 w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-[rgb(255,204,112)] group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
