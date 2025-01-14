import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "Services", "About us", "Blog"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header flex items-center justify-between sm:px-20 px-5 text-white py-2 relative">
      <img src={logo} alt="Logo" />

      <ul className="hidden md:flex items-center gap-10">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>

      <div className="md:hidden" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-white mb-2"></div>
        <div className="w-6 h-1 bg-white mb-2"></div>
        <div className="w-6 h-1 bg-white"></div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#313131] bg-opacity-80 backdrop-blur py-4 md:hidden`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
          <li>
            <Button text="Contact" bgColor1="#5036BC" bgColor2="#4265DB" />
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <Button text="Contact" bgColor1="#5036BC" bgColor2="#4265DB" />
      </div>
    </div>
  );
};

export default Header;
