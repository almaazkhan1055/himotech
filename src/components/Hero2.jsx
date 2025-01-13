import React from "react";
import heroImgbelow from "../assets/heroimgbelow.png";

const Hero2 = () => {
  return (
    <div className="relative z-10">
      <img src={heroImgbelow} alt="hero-below" />
      <div className="absolute top-10 sm:top-36 left-24 h-full text-white">
        <p data-aos="fade-up-left" className="text-xl sm:text-6xl">
          SHAPING
        </p>
        <p data-aos="fade-up-right" className="text-2xl sm:text-9xl">
          INNOVATIVE <span className="text-xl sm:text-6xl">AND</span>
        </p>
        <p data-aos="fade-up-left" className="text-xl sm:text-6xl">
          ENGAGING
        </p>
        <p data-aos="fade-up-right" className="text-2xl sm:text-9xl">
          DIGITAL PATHWAYS
        </p>
      </div>
    </div>
  );
};

export default Hero2;
