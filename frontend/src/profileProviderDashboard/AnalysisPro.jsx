import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useEffect } from "react";
import {useParams} from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);
const AnalysisPro = () => {
  
  const {email} = useParams();
  useEffect(()=>{
    const res = axios.get(`https://on-demand-service-m5nh.onrender.com/api/v1/analysis-provider/${email}`);
    console.log(res.data);
  },[email])


  const data = {
    labels: ["Failed Bookings ", "Completed Bookings "],
    datasets: [
      {
        label: "Bookings Analysis",
        data: [75, 125],
        backgroundColor: ["#F70D1A", "#39FF12"],
        hoverOffset: 4,
      },
    ],
  };
  
  
 
  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col ">
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl font-mono text-[#1d1d1d] text-center mb-8 p-4">
        Analysis ⚙️ Between Failed 🔴 and Success 🟢 Bookings
      </h1>
      {/* <div className="flex">
        <div className="flex flex-col">
          <div className=""></div>
          <div className="">
          </div>
        </div>
        <div className="flex flex-col shadow-lg px-4 py-4 ">
          <p className="font-medium text-2xl text-center mb-2">
            Previous Bookings History
          </p>
          <div className="flex justify-center items-center h-full w-full mt-8 md:mt-0">
            <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <Pie data={data} className="h-full w-full" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col shadow-lg px-4 py-4 ">
          <p className="font-medium text-2xl text-center mb-2">
            Previous Bookings History
          </p>
          <div className="flex justify-center items-center h-full w-full mt-8 md:mt-0">
            <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <Pie data={data} className="h-full w-full" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default AnalysisPro;



