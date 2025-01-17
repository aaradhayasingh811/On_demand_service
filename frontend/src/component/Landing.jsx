import React from "react";
import a from "../assets/1.png";
import b from "../assets/2.png";
import About from "./About.jsx";
const Landing = () => {
  return (
    <>
      <div className="bg-[#fff7e1] h-screen flex justify-around items-center sm:flex-row flex-col">
        <div className="sm:mx-8 flex sm:justify-start justify-center">
          <img
            src={a}
            alt=""
            className="lg:w-80 lg:h-80 md:w-64 md:h-64 w-40 h-40"
          />
        </div>
        <div className="sm:ms-2 sm:me-4 self-start sm:mt-32 mt-12">
          <h2 className="my-2 text-center md:text-3xl sm:text-2xl text-2xl lg:text-5xl font-mono font-semibold">
            Find Professional Services in your Area
          </h2>
          <p className="my-4 text-center md:text-base lg:text-xl font-light">
            Pay workers securely, with confidence; Hire vetted, qualified
            workers for your projects.{" "}
          </p>
          <div className="my-8 flex sm:flex-row flex-col sm:justify-around items-center sm:gap-y-0 gap-y-4">
            <a
              href="/login"
              className="sm:p-2 p-1 text-white bg-[#fe4b01] w-max rounded-lg"
            >
              Become a Client
            </a>
            <a
              href="/login"
              className="sm:p-2 p-1 text-white bg-[#fe4b01] w-max rounded-lg"
            >
              Become a service provider
            </a>
          </div>
        </div>
        <div className="sm:ms-8  flex sm:justify-start justify-center">
          <img
            src={b}
            alt=""
            className="lg:w-80 lg:h-80 md:w-64 md:h-64 w-40 h-40"
          />
        </div>
      </div>
      {/* <About /> */}
    </>
  );
};

export default Landing;
