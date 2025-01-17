import React from "react";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";

const Section = () => {
  const stats = [
    {
      icon: <VerifiedOutlinedIcon className="text-yellow-500 text-4xl" />,
      value: "100+",
      description: "Verified Workers",
    },
    {
      icon: <PeopleAltOutlinedIcon className="text-yellow-500 text-4xl" />,
      value: "70+",
      description: "Demand Sponsored Businesses",
    },
    {
      icon: <MilitaryTechOutlinedIcon className="text-yellow-500 text-4xl" />,
      value: "120+",
      description: "Average Hires Per Month",
    },
    {
      icon: <LightbulbOutlinedIcon className="text-yellow-500 text-4xl" />,
      value: "50+",
      description: "Innovative Solutions Delivered",
    },
  ];

  return (
    <div className="min-h-[90vh] bg-[#fff7e1] font-mono py-20 px-4">
      <h1 className="text-center text-4xl font-bold text-gray-800">
        Demand Service App
      </h1>
      <p className="text-center text-lg font-normal text-gray-600 mt-4">
        Providing clients with certified workers in real-time.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 w-[280px] hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-lg font-medium text-gray-600 mt-2">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
