import React from 'react'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 text-white shadow-md navbar">
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <a href="#home" className="text-xl font-bold capitalize">Manjeet's Portfolio</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-[#0f172a] py-4 space-y-4 text-gray-300 transition-all">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Contact</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
