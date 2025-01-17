import React from "react";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
const Section = () => {
  return (
    <div style={{ minHeight: "90vh" }} className="bg-[#fff7e1] font-mono">
      <h1 className="text-center text-4xl font-bold pt-32">
        Demand Service App
      </h1>
      <p className="text-center text-lg font-normal my-4">
        This provide client with the certified workers in real time
      </p>
      <div className="flex p-20 sm:flex-row flex-col ">
        <div className="flex flex-col leading-8 justify-center items-center mx-2 text-center shadow-xl rounded">
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            <VerifiedOutlinedIcon />
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            100+
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            Verified Workers
          </div>
        </div>
        <div className="flex flex-col leading-8 text-2xl justify-center items-center mx-2 text-center shadow-xl rounded">
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            <PeopleAltOutlinedIcon />
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            70+
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            Demand sponsered Business
          </div>
        </div>
        <div className="flex flex-col leading-8 text-2xl justify-center items-center mx-2 text-center shadow-xl rounded">
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            <MilitaryTechOutlinedIcon />
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            120+
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            Average hires per month
          </div>
        </div>
        <div className="flex flex-col leading-8 text-2xl justify-center items-center mx-2 text-center shadow-xl rounded">
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            <VerifiedOutlinedIcon />
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            100+
          </div>
          <div className=" sm:text-2xl text-lg flex justify-center my-3 font-medium">
            Verified Workers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
