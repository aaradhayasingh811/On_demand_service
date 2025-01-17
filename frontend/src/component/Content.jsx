import React from "react";
import cleaning from "../assets/cleaning.png";
import mechanic from "../assets/mechanic.png";
import plumber from "../assets/plumber.png";
import electrician from "../assets/electrician.png";
import carpentar from "../assets/carpentar.png";
import { useNavigate, useParams } from "react-router-dom";

const Card = ({ src, value, handleOnCard }) => {
  return (
    <div className="card sm:h-56 sm:w-56 w-72 h-64 shadow-2xl mx-4 my-4 hover:shadow-orange-500 rounded">
      <button className="flex flex-col justify-center items-center" onClick={handleOnCard}>
        <img src={src} alt={value} className="h-44 w-44" />
        <p className="text-center text-xl font-semibold text-orange-900 font-mono">
          {value}
        </p>
      </button>
    </div>
  );
};

const Content = () => {
  const { email, people } = useParams();
  const navigate = useNavigate();

  const handleOnCard = (work) => {
    return () => {
      navigate(`/dashboard/${email}/${people}/${work}`);
    };
  };

  return (
    <div className="content bg-[#fff7e1] p-8" style={{ minHeight: "80vh" }}>
      <h1 className="text-4xl font-mono font-bold">Welcome 👋</h1>
      <p className="italic text-yellow-600 my-4">
        "The best way to find yourself is to lose yourself in the service of others."{" "}
      </p>
      <h1 className="text-3xl my-5 font-mono font-semibold text-[#532c34]">
        Categories
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <Card src={cleaning} value="Cleaning" handleOnCard={handleOnCard("cleaning")} />
        <Card src={plumber} value="Plumber" handleOnCard={handleOnCard("plumber")} />
        <Card src={mechanic} value="Mechanic" handleOnCard={handleOnCard("mechanic")} />
        <Card src={electrician} value="Electrician" handleOnCard={handleOnCard("electrician")} />
        <Card src={carpentar} value="Carpenter" handleOnCard={handleOnCard("carpenter")} />
      </div>
    </div>
  );
};

export default Content;
