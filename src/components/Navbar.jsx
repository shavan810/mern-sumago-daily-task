import {Link } from "react-router-dom";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-200 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          MyApp
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/"><li className="hover:text-indigo-600 cursor-pointer transition">Home</li></Link>
          <Link to="/about"><li className="hover:text-indigo-600 cursor-pointer transition">About</li></Link>
          <Link to="/contact"><li className="hover:text-indigo-600 cursor-pointer transition">Team</li></Link>
          <Link to="/apifetch"><li className="hover:text-indigo-600 cursor-pointer transition">ApiFetch</li></Link>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-4 font-medium text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer transition">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer transition">About</li>
          <li className="hover:text-indigo-600 cursor-pointer transition">Team</li>
          <li className="hover:text-indigo-600 cursor-pointer transition">ApiFetch</li>
        </ul>
      )}
    </nav>
  );
}