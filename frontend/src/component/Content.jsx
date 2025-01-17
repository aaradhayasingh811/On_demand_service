import React from "react";
import cleaning from "../assets/cleaning.png";
import mechanic from "../assets/mechanic.png";
import plumber from "../assets/plumber.png";
import electrician from "../assets/electrician.png";
import carpentar from "../assets/carpentar.png";
import { useNavigate, useParams } from "react-router-dom";

const Card = ({ src, value, handleOnCard }) => {
  return (
    <div className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg mx-4 my-4 p-4 sm:h-56 sm:w-56 w-72 h-64 flex flex-col items-center justify-center">
      <button onClick={handleOnCard} className="flex flex-col items-center">
        <img
          src={src}
          alt={value}
          className="h-32 w-32 object-contain mb-4 hover:scale-105 transition-transform duration-300"
        />
        <p className="text-center text-xl font-semibold text-orange-800 font-mono">
          {value}
        </p>
      </button>
    </div>
  );
};

const Content = () => {
  const { email, people } = useParams();
  const navigate = useNavigate();

  const categories = [
    { src: cleaning, value: "Cleaning", work: "cleaning" },
    { src: plumber, value: "Plumber", work: "plumber" },
    { src: mechanic, value: "Mechanic", work: "mechanic" },
    { src: electrician, value: "Electrician", work: "electrician" },
    { src: carpentar, value: "Carpenter", work: "carpenter" },
  ];

  const handleOnCard = (work) => () => {
    navigate(`/dashboard/${email}/${people}/${work}`);
  };

  return (
    <div
      className="content bg-[#fff7e1] p-8 flex flex-col items-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="text-4xl font-mono font-bold text-gray-800">Welcome 👋</h1>
      <p className="italic text-yellow-600 my-4 text-center max-w-xl">
        "The best way to find yourself is to lose yourself in the service of others."
      </p>
      <h2 className="text-3xl my-5 font-mono font-semibold text-[#532c34]">
        Categories
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {categories.map((category, index) => (
          <Card
            key={index}
            src={category.src}
            value={category.value}
            handleOnCard={handleOnCard(category.work)}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
