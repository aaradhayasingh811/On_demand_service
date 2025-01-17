import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar, FaUserCircle } from "react-icons/fa";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';

// Import a spinner or loader component
import CircularProgress from '@mui/material/CircularProgress'; 

const TopReview = () => {
  const { email, people } = useParams();
  const [dataset, setdataSet] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/provider-review/${email}`
        );
        setdataSet(response.data.alluser);
        setLoading(false); // Data fetched, stop loading
        console.log(response.data.alluser);
      } catch (error) {
        console.error(error);
        setLoading(false); // Stop loading in case of error as well
      }
    };
    fetchReview();
  }, [email]);

  const ReviewCard = ({ item }) => {
    const dateTimeString = item.eachPro.createdAt;
    const dateObject = new Date(dateTimeString);
    const date = dateObject.toISOString().split("T")[0];
    const time = dateObject.toISOString().split("T")[1].split(".")[0];
    const ds = new Date(date);
    const day = ds.getDate();
    const monthName = dateObject.toLocaleString("default", { month: "long" });
    const year = ds.getFullYear();
    const formattedDate = `${day} ${monthName} ${year}`;
    const [hours, minutes, seconds] = time.split(":");
    let hourIn12HourFormat = parseInt(hours);
    const amPm = hourIn12HourFormat >= 12 ? "PM" : "AM";
    if (hourIn12HourFormat > 12) {
      hourIn12HourFormat -= 12;
    } else if (hourIn12HourFormat === 0) {
      hourIn12HourFormat = 12;
    }
    const formattedTime = `${hourIn12HourFormat}:${minutes} ${amPm}`;

    return (
      <div className="flex flex-col md:flex-row bg-blue-50 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto mb-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
        <div className="flex flex-col items-center mr-6 space-y-3">
          {/* Profile Image */}
          <img
            src={item.user.avatar}
            alt="profile pic"
            className="h-24 w-24 rounded-full border-4 border-blue-400"
          />
          {/* Username and User Info */}
          <div className="text-center">
            <p className="font-semibold text-xl text-blue-800">{item.user.name}</p>
            <p className="text-sm text-gray-600 font-medium">@ {item.user.username}</p>
            <p></p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-3">
          {/* Rating */}
          <div className="flex items-center text-gray-600 mb-1 w-full">
            <WorkOutlineOutlinedIcon className="text-gray-500 text-lg mr-2" />
            <p className="text-base truncate w-full">{item.provider.work}</p>
          </div>

          <div className="flex items-center text-gray-600 mb-1 w-full">
            <DateRangeOutlinedIcon className="text-lg mr-2 w-max" />
            <p className="text-base">{formattedDate}</p>
          </div>

          <div className="flex items-center text-gray-600 mb-1 w-full">
            <TimerOutlinedIcon className="text-lg mr-2" />
            <p className="text-base">{formattedTime}</p>
          </div>
          <div className="flex items-center text-gray-600 mb-1 w-full">
            <ReviewsOutlinedIcon className="text-gray-500 text-lg mr-2" />
            <p className="text-base">{item.eachPro.review}</p>
          </div>
          <div className="flex items-center text-gray-600 mb-1 w-full">
            <StarBorderOutlinedIcon className="text-yellow-500 text-lg mr-2" />
            <p className="text-base">{item.eachPro.Rating} / 5</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-[90vh] bg-gray-100 flex flex-col">
      <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl font-mono text-[#1d1d1d] text-center mb-8 p-4">
        Review and Rating from your Customers. ⚙️
      </h1>
      
      {/* Show loader if data is still loading */}
      {loading ? (
        <div className="flex justify-center items-center mt-12">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {dataset.length > 0 ? (
            dataset.map(
              (item) =>
                item.eachPro.Rating != null && (
                  <ReviewCard item={item} key={item} />
                )
            )
          ) : (
            <p className="text-center text-gray-500">No reviews available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopReview;