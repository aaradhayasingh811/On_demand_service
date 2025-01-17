import React from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import cook from "../assets/cook.png";
const Client = () => {
  return (
    <div
      className="flex sm:flex-row flex-col bg-[#f3edeb]"
      style={{ minHeight: "90vh" }}
    >
      <div className="flex justify-center items-center">
        <img src={cook} alt="" />
      </div>
      <div className="flex flex-col px-10 py-32">
        <div className="text-4xl font-extrabold my-2">
          Get Reliable work with Safe Payment
        </div>
        <div className="text-lg font-normal my-4">
          Save yourself from hours and get to-do list completed
        </div>
        <div className="flex my-4">
          <RadioButtonCheckedIcon className="me-3" />
          Find Skilled workers for your work
        </div>
        <div className="flex my-4">
          <RadioButtonCheckedIcon className="me-3" />
          Access to a wide range of services and providers
        </div>
        <div className="flex my-4">
          <RadioButtonCheckedIcon className="me-3" />
          Get instant payment protection and secure payment options
        </div>
        <a href="/login" className="bg-[#fe4b01] p-2 w-max my-10 rounded text-white font-medium">
          Become a client
        </a>
      </div>
    </div>
  );
};

export default Client;
