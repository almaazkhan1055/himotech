import React from "react";
import whatwedo from "../assets/whatwedo.png";
import Button from "./Button";
import TypingEffect from "./TypingEffect";
import Globe from "./Globe";

const OurWorks = () => {
  return (
    <div className="whatwedo relative">
      <img
        src={whatwedo}
        alt="hero-overlay"
        className="w-full h-full object-cover animate-scroll-up"
      />
      <div className="flex max-sm:flex-col items-center justify-between px-20 gap-2 absolute top-[10%] sm:top-[40%] w-full">
        <Globe title="What We Do" />
        <div className="flex items-center flex-col gap-10 w-[400px]">
          <TypingEffect />
          <span>
            <Button
              text="Learn More About Our Solution"
              bgColor1="#5036BC"
              bgColor2="#4265DB"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
