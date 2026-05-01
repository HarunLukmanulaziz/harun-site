"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex items-center  justify-between md:bg-[#171717] ">
      <div className="logo">
        <h1 className="text-3xl ml-3 md:ml-20 font-bold rounded-xs p-1 md:text-[#fff] text-black md:bg-transparent ">
          Portofolio.
        </h1>
      </div>

      <ul
        className={`menu flex z-40 items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0  md:opacity-100 bg-white/15 md:bg-[#42424200] backdrop-blur-md md:backdrop-blur-none p-4 rounded-b-xl transition-all  md:transition-none md:text-[#121212] ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li className=" ">
          <a
            href="#home"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className="md:text-[#fff]  bg-[#e0e0e0] text-[#000] hover:text-[#fff] md:hover:text-[#000] hover:bg-[#121212] md:hover:bg-[#fff] px-4 py-2 rounded-xl md:bg-[#E0E0E000]">
              Home
            </p>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className="md:text-[#fff] bg-[#e0e0e0] text-[#000] hover:text-[#fff] md:hover:text-[#000] hover:bg-[#121212] md:hover:bg-[#fff] px-4 py-2 rounded-xl md:bg-[#E0E0E000]">
              About
            </p>
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className="md:text-[#fff] bg-[#e0e0e0] text-[#000] hover:text-[#fff] md:hover:text-[#000] hover:bg-[#121212] md:hover:bg-[#fff] px-4 py-2 rounded-xl md:bg-[#E0E0E000]">
              Project
            </p>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-semibold sm:text-1l text-base hover:text-[#eee] "
          >
            <p className=" md:mr-20 md:text-[#fff] bg-[#e0e0e0] text-[#000] hover:text-[#fff] md:hover:text-[#000] hover:bg-[#121212] md:hover:bg-[#fff] px-4 py-2 rounded-xl md:bg-[#E0E0E000]">
              Contact
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
