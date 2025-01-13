import React, { useEffect } from "react";
import heroImgOverLay from "../assets/heroimgoverlay.svg";
import himotech from "../assets/himotech.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="hero relative text-white py-[195px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={heroImgOverLay}
          alt="hero-overlay"
          className="w-full h-full object-cover"
        />
        <img
          src={himotech}
          alt="hero-below"
          data-aos="fade-up"
          className="absolute bottom-0 opacity-80"
        />
      </div>

      <div className="relative z-1 text-center flex flex-col gap-10">
        <p className="font-medium text-[20px]">
          Smile :) You’re in the right place!
        </p>
        <h1 className="font-bold sm:text-[96px] text-[30px] leading-none">
          The Future of Web3 <br /> and Blockchain
        </h1>
        <p className="text-[18px] leading-relaxed">
          We don’t just build blockchain projects; we help you shape the future.
          Whether you're developing <br /> your first decentralized application
          or launching a new cryptocurrency, our consulting team brings <br />
          deep industry knowledge to guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default Hero;
