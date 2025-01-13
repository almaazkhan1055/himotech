import React from "react";
import { CiGlobe } from "react-icons/ci";

const Globe = ({ title, difference }) => {
  return (
    <div className="flex items-center gap-2">
      <CiGlobe color="#4265DB" className="-rotate-45" size={30} />
      <h3
        className="text-4xl font-semibold"
        style={{
          color: `${difference ? "#5036BC" : "#fff"}`,
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default Globe;
