import React from "react";
import legacyRectangle from "../assets/legacyRectangle.png";
import logo from "../assets/logo.png";
import legacy from "../assets/legacy.png";

const Legacy = () => {
  const legacyData = [
    {
      title: "A Legacy Since",
      years: "2021",
    },
    {
      title: "Project Delivery",
      years: "200+",
    },
    {
      title: "Worldwide Project Impact",
      years: "100%",
    },
    {
      title: "Customer Ratings",
      years: "4.9/5",
    },
  ];

  return (
    <div className="relative z-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-12 sm:ml-10 ml-0 justify-center">
        <div className="flex flex-col gap-8 ml-10 justify-center">
          {legacyData?.map((obj, i) => (
            <div key={i} className="leading-none">
              <h5 className="text-black text-lg py-3 px-3 font-semibold whitespace-nowrap">
                {obj?.title}
              </h5>
              <p className="ml-20 text-[40px] sm:text-[50px] font-bold bg-gradient-to-r from-[#5036BC] to-[#4265DB] bg-clip-text text-transparent">
                {obj?.years}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center mt-12 sm:mt-60 sm:ml-16 ml-0 w-full">
          <img src={logo} alt="Logo" className="w-[100px]" />
          <p className="opacity-70 font-medium text-md text-center sm:text-left">
            At himotech global, we are at the forefront of the Web3 revolution,
            delivering cutting-edge blockchain solutions and crypto projects
            that shape the digital landscape. With over 3-4 years of experience,
            our team excels in creating innovative, secure, and scalable
            decentralized applications and networks.
          </p>
        </div>
      </div>

      <div className="relative w-full md:w-1/2">
        <img
          src={legacyRectangle}
          alt="Legacy Rectangle"
          className="w-full h-auto object-cover"
        />

        <div className="absolute top-20 right-10 sm:right-36 p-6 rounded-xl bg-transparent border border-white shadow-xl">
          <p className="text-black text-lg sm:text-xl font-semibold text-center">
            Where experience fuels DIGITAL SUCCESS
          </p>
        </div>
      </div>
      <img
        src={legacy}
        alt="legacy"
        className="absolute inset-0 m-auto transform translate-x-[-50%] translate-y-[-50%] sm:top-1/2 max-sm:bottom-0"
      />
    </div>
  );
};

export default Legacy;
