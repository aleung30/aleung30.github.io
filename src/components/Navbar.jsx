import React from "react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`flex justify-between items-center p-5 z-50 top-0 fixed w-full ${
        scroll ? "bg-[#F0F4F8]" : ""
      }`}
    >
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="font-bold text-xl cursor-pointer hover:opacity-50"
      >
        Anita Leung
      </Link>
      <ul className="flex justify-between items-center gap-4">
        <li>
          <Link to="about" smooth={true} duration={750} offset={-50} className="cursor-pointer hover:opacity-50">
            about
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={750} offset={-50} className="cursor-pointer hover:opacity-50">
            experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={750} offset={-50} className="cursor-pointer hover:opacity-50">
            projects
          </Link>
        </li>

        <li>
          <Link to="interests" smooth={true} duration={750} offset={-50} className="cursor-pointer hover:opacity-50">
            interests
          </Link>
        </li>
        <button className="rounded-[10px] text-semibold bg-[#A5C8D6] p-2">
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:opacity-50">
              contact
            </Link>
          </li>
        </button>
      </ul>
    </nav>
  );
};
