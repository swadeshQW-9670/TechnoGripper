
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black p-6">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl">
          <img src="https://www.aiforge.org/logo_white.svg" alt="" />
        </a>
        <nav className="space-x-4">
          <a href="#home" className="text-white hover:text-gray-300 text-xl">Home</a>
          <a href="#about" className="text-white hover:text-gray-300 text-xl">Features</a>
          <a href="#menu" className="text-white hover:text-gray-300 text-xl">Pricing</a>
          <a href="#products" className="text-white hover:text-gray-300 text-xl">Products</a>
          <a href="#contact" className="text-white hover:text-gray-300 text-xl">Contact us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="text-lg text-white">
            <span className="fa-solid fa-magnifying-glass text-xl"></span>
          </div>
          <span className="text-[#cfd8e7]">
            <i className="fa-regular fa-bell text-current text-xl"></i>
          </span>
          <span className="text-[#cfd8e7]">
          <i class="fa-solid fa-right-to-bracket text-xl"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

