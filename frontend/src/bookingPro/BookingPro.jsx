import React, { useState, useEffect, useMemo } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EmailIcon from "@mui/icons-material/Email";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useParams } from "react-router-dom";


const BookingPro = React.memo(({ item }) => {
  const {email } =  useParams();
  const [show, setShow] = useState(false);
  const provider = item.user;
  const status = item.status;
  useEffect(() => {
    setShow(status === "Pending");
  }, [status]);

  

  const handleonClick = async(item , stat) =>{
    try {
      const Data = {
        "status": stat ,
        "bookingid" : item.bookingid
      }
      const sendData = {
        "bookingid" : item.bookingid,
        "senderMail" : email,
        "receiverMail" : item.user.email 
      }
      console.log(Data)
      console.log(sendData)

      const response = await axios.patch(`http://localhost:3000/api/v1/change-status`,Data);
      if(stat === "Success"){
        await axios.post(`http://localhost:3000/api/v1/send-email`,sendData);
        console.log(sendData)
        toast.success('🦄 Confirmation mail sent Successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
      console.log(response.data);
      setShow(false)
      toast.success('🦄 You have Successfully choosed the options!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

      
    } catch (error) {
      console.error(error);
      toast.error('🦄 Something went wrong!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      
    }

  }

  // Memoize formatted date and time to avoid recalculation
  const { formattedDate, formattedTime } = useMemo(() => {
    console.log(item.user.createdAt)
    const dateTimeString = item.user.createdAt;
    const dateObject = new Date(dateTimeString);
    const day = dateObject.getDate();
    const monthName = dateObject.toLocaleString("default", { month: "long" });
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    const hourIn12HourFormat = hours % 12 || 12;

    return {
      formattedDate: `${day} ${monthName} ${year}`,
      formattedTime: `${hourIn12HourFormat}:${minutes} ${amPm}`,
    };
  }, [item.user.createdAt]);

  // Determine status color
  const statusColors = {
    Pending: "bg-yellow-500",
    Failed: "bg-red-500",
    Success: "bg-green-600",
  };
  const statusClass = statusColors[status] || "bg-gray-500";

  return (
    <div className="w-max mx-auto bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-200 ease-in-out flex flex-col">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center items-center shadow-lg shadow-orange-50 m-2">
          <div className="flex items-center w-full">
            <img
              src={provider.avatar}
              alt="Provider Avatar"
              className="h-20 w-20 rounded-full mx-auto border-4 border-orange-300"
            />
          </div>
          <div className="flex items-center mb-3 justify-center w-max mt-3">
            <PeopleAltOutlinedIcon className="text-primary text-2xl mr-2 w-max" />
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {provider.name}
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-start m-2 gap-y-[4px] w-full">
          <div className="flex items-center text-gray-600 mb-1 w-full">
            <WorkOutlineOutlinedIcon className="text-gray-500 text-lg mr-2" />
            <p className="text-base truncate w-full">{provider.people}</p>
          </div>

          <div className="flex items-center text-gray-600 mb-1 w-full">
            <EmailIcon className="text-gray-500 text-lg mr-2" />
            <p className="text-base truncate w-full">{provider.email}</p>
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
            <p className={`${statusClass} px-2 text-white rounded-xl truncate`}>
              {status}
            </p>
          </div>
        </div>
      </div>
      {show && (
        <div className="flex mt-3">
          <button className="bg-gray-800 mx-2 p-1 rounded-lg text-slate-200" onClick={()=>{
            handleonClick(item ,"Success")
          }}>
            Accept
          </button>
          <button className="bg-gray-800 mx-2 p-1 rounded-lg text-slate-200" onClick={()=>{
            handleonClick(item , "Failed")
          }}>
            Decline
          </button>
        </div>
      )}
    </div>
  );
});

export default BookingPro;
