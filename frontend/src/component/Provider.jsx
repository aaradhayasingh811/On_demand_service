import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import business from "../assets/business.png";
const Provider = () => {
  return (
    <div
      className="flex sm:flex-row flex-col bg-[#fdd867]"
      style={{ minHeight: "90vh" }}
    >
      <div className="flex flex-col pe-10 sm:ps-32 ps-14 py-32">
        <div className="text-4xl font-extrabold my-2">
          Earn More from Reliable Customers
        </div>
        <div className="text-lg font-normal my-4">
          Save yourself from hours and get to-do list completed
        </div>
        <div className="flex my-4">
          <RadioButtonCheckedIcon className="me-3" />
          Easily access to client rasks and projects.
        </div>
        <div className="flex my-4">
          <RadioButtonCheckedIcon className="me-3" />
          Direct booking and secure payments.
        </div>
        <div className="flex my-4">
          <RadioButtonCheckedIcon className="me-3" />
          AI tools to enhance service quality.
        </div>
        <a
          href="/login"
          className="bg-[#183354] w-max text-white py-2 sm:px-6 px-2 rounded-lg sm:text-lg font-semibold hover:bg-[#0088cc] transition-all duration-300 shadow-md"
        >
          Become a Service Provider
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img src={business} alt="" />
      </div>
    </div>
  );
};

export default Provider;
