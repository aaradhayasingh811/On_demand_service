import React, { useEffect ,useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = () => {
    const [chartData, setChartData] = useState(null); // Changed to null for conditional rendering
  const {email} = useParams();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://on-demand-service-m5nh.onrender.com/api/v1/analysis-client/${email}`
        );
        const labels = ["Success", "Failed", "Pending"];
        const data = res.data.map((eachData) => eachData.data); // Assuming `data` is the key in the API response

        setChartData({
          labels,
          datasets: [
            {
              label: "Booking Analysis",
              data,
              backgroundColor: ["#F70D1A", "#39FF12", "#FFCE56"],
              hoverBackgroundColor: ["#F70D1A", "#39FF12", "#FFCE56"],
              hoverOffset: 4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
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
  const monthdata = {
    labels: ["Failed Bookings ", "Completed Bookings "],
    datasets: [
      {
        label: "Bookings Analysis",
        data: [22, 78],
        backgroundColor: ["#CE2029", "#1DB954"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col justify-between">
      {/* Title */}
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl font-mono text-[#1d1d1d] text-center mb-8 p-4">
        Analysis ⚙️ Between Failed 🔴 and Success 🟢 Bookings
      </h1>

      {/* Content container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-auto px-4">
        {/* Info section */}
        {/* <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8">
          <div className="shadow-lg px-4">
            <p className="text-gray-500">🚀 Dashboard for monthy detailed insights!</p>
            <p className="font-medium text-lg mb-2">Total number of bookings this month:</p>
            <div className="flex justify-center items-center mt-8 md:mt-0">
              <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-48 md:w-48">
                <Pie data={data} className="h-full w-full" />
              </div>
            </div>
          </div>
          <div className="shadow-lg px-4">
            <p className="text-gray-500">🚀Important Data !</p>
            <p className="font-medium text-lg mb-2 text-[#1d1d1dd4]">Total number of bookings :</p>
            <p className="font-medium text-lg mb-2 text-[#1d1d1dd4]">Total money spent :</p>
            <p className="font-medium text-lg mb-2 text-[#1d1d1dd4]">Total money spent in this month:</p>
            <p className="font-medium text-lg mb-2 text-[#1d1d1dd4]">Total number of bookings this month:</p>
            <p className="font-medium text-lg mb-2 text-[#1d1d1dd4]">Total trasactions made :</p>
            <p className="font-medium text-lg mb-2 text-[#1d1d1dd4]">Total trasactions made this month:</p>
            
            </div>
        </div> */}

        {/* Pie chart container */}
        <div className="flex flex-col shadow-lg px-4 py-4 ">
          <p className="font-medium text-2xl text-center mb-2">Previous Bookings History</p>
          <div className="flex justify-center items-center h-full w-full mt-8 md:mt-0">
            <div className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <Pie data={chartData} className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Analysis;
