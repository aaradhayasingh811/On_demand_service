import React from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

const BookingComponent = ({ item }) => {
  const provider = item.provider;  
  const status = item.status;
  const dateTimeString = item.provider.createdAt;
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

  const statusColors = {
    Pending: "bg-yellow-500",
    Failed: "bg-red-500",
    Success: "bg-green-600",
  };
  
  const statusClass = statusColors[status] || "bg-gray-500"; // Default to gray if status is unknown

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col md:flex-row items-center">
      <div className="flex flex-col justify-center items-center shadow-lg shadow-orange-50 m-2">
        <div className="flex items-center w-full">
          <img src={provider.avatar} alt="Provider Avatar" className="h-20 w-20 rounded-full mx-auto border-4 border-orange-300" />
        </div>
        <div className="flex items-center mb-3 justify-center w-max mt-3">
          <PeopleAltOutlinedIcon className="text-primary text-2xl mr-2 w-max" />
          <h2 className="text-lg font-semibold text-gray-800 truncate">{provider.name}</h2>
        </div>
      </div>

      <div className="flex flex-col items-start m-2 gap-y-[4px] w-full">
        <div className="flex items-center text-gray-600 mb-1 w-full">
          <WorkOutlineOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base truncate w-full">{provider.work}</p>
        </div>

        <div className="flex items-center text-gray-600 mb-1 w-full">
          <LocalPhoneOutlinedIcon className="text-gray-500 text-lg mr-2" />
          <p className="text-base truncate w-full">{provider.number}</p>
        </div>

        <div className="flex items-center text-gray-600 mb-1 w-full">
          <StarBorderOutlinedIcon className="text-yellow-500 text-lg mr-2" />
          <p className="text-base">{provider.Rating} / 5</p>
        </div>

        <div className="flex items-center text-gray-600 mb-1 w-full">
          <DateRangeOutlinedIcon className="text-lg mr-2 w-max" />
          <p className="text-base">{formattedDate}</p>
        </div>

        <div className="flex items-center text-gray-600 mb-1 w-full">
          <TimerOutlinedIcon className="text-lg mr-2" />
          <p className="text-base">{formattedTime}</p>
        </div>

        <div className="flex justify-end w-max">
          <p className={`${statusClass} px-2 text-white rounded-xl truncate`}>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
