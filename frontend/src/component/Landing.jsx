import React from "react";
import a from "../assets/1.png";
import b from "../assets/2.png";
import About from "./About.jsx";

const Landing = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#f9f9f9] to-[#fff7e1] min-h-screen flex flex-col lg:flex-row justify-center items-center p-6 sm:p-6 gap-10">
        {/* Left Image Section */}
        <div className="flex justify-center  mb-6 sm:mb-0">
          <img
            src={a}
            alt="Professional Service"
            className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Text and Call to Action Section */}
        <div className="text-center sm:text-left sm:ml-8 ">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2f4f4f] my-4 text-center">
            Discover Professional Services Near You
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#555] mb-6">
            Securely hire vetted and qualified workers for your projects with confidence and peace of mind.
          </p>

          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="/login"
              className="bg-[#183354] w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
            >
              Become a Client
            </a>
            <a
              href="/login"
              className="bg-[#183354] w-max text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
            >
              Become a Service Provider
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center mt-6 sm:mt-0">
          <img
            src={b}
            alt="Professional Service"
            className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* About Section (Optional - Uncomment if needed) */}
      {/* <About /> */}
    </>
  );
};

export default Landing;
