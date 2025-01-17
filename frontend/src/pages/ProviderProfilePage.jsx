import React, { useEffect, useState, useRef } from "react";
import Navclient from "../component/Navclient";
import Footer from "../component/Footer";
import Profile from "../profileProviderDashboard/Profile";
import EditProfile from "../profileProviderDashboard/EditProfile";
import { useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import AnalysisPro from "../profileProviderDashboard/AnalysisPro";
import RateNReview from "../profileDashboard/RateNReview";
import axios from "axios";
import TopReview from "../profileProviderDashboard/TopReview";
import NavPro from "../component/NavPro";

const ProviderProfilePage = () => {
  const [whichToShow, setWhichToShow] = useState("a");
  const { email, people } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const mobileMenuRef = useRef(null); 

  useEffect(() => {
    const profileLoader = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/show-profile/${email}`
        );
        setProfileData(response.data);
      } catch (err) {
        setError("Failed to load profile data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    profileLoader();
  }, [email]);

  useEffect(() => {
    // Close the mobile menu if the user clicks outside of it
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <p className="text-center my-10">Loading profile...</p>;
  }

  if (error) {
    return <p className="text-center my-10 text-red-500">{error}</p>;
  }

  // Desktop Client Dashboard
  const FullClientDashboard = ({ setting }) => {
    return (
      <div className="sm:flex hidden min-h-screen bg-gray-800 flex-col justify-around gap-y-8">
        <div className="flex flex-col justify-start gap-y-8 p-3 mt-16  ">
          <div className=" p-2 text-slate-300 hover:text-white rounded-sm ">
            <button onClick={() => setting("a")} className="flex rounded items-center w-max justify-center ">
              <IoPeopleSharp className="me-2 text-2xl" style={{color:"#fafafa"}}/>
              Profile</button>
          </div>
          <div className="p-2 text-slate-300 hover:text-white rounded-sm  ">
            <button onClick={() => setting("b")} className="flex rounded items-center w-max justify-center text-nowrap"> <FaEdit className="me-2 text-2xl" style={{color:"#fafafa"}}/>Edit Profile</button>
          </div>
          {/* <div className="hover:bg-[#1f1f1f9a] p-2 hover:text-slate-300 rounded-sm ">
            <button onClick={() => setting("c")} className="flex rounded items-center w-max justify-center "><FaHistory className="me-2" />
            History</button>
          </div> */}
          <div className="p-2 text-slate-300 hover:text-white rounded-sm ">
            <button onClick={() => setting("d")} className="flex rounded items-center w-max justify-center text-nowrap">
              <MdStarRate className="me-2 text-2xl" style={{color:"#fafafa"}}/>
               Reviews</button>
          </div>
          <div className="p-2 text-slate-300 hover:text-white rounded-sm "> 
            <button onClick={() => setting("e")} className="p-2 flex rounded items-center w-max justify-center text-nowrap">
              <FaChartColumn className="me-2 text-2xl" style={{color:"#fafafa"}}/>
              Analysis</button>
          </div>
        </div>
        <div className="flex p-2 text-center flex-col justify-center items-center text-slate-200">
          <div className="flex justify-center">
            <img src={profileData?.avatar} alt="Profile" className="w-16 h-16 border-4 border-white shadow-lg rounded-[50%]" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-medium">{profileData?.name}</p>
            <p className="text-base mb-10">{profileData?.username}</p>
          </div>
        </div>
      </div>
    );
  };

  // Mobile Client Dashboard
  const mobileClientDashboard = () => {
    return (
      <div className="w-full sm:hidden fixed top-[7vh]">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-max p-2 flex justify-start">
          <IoMdMenu size={30} className="flex justify-start" />
        </button>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="bg-gray-800 text-slate-200 p-4 fixed min-h-[95vh] w-[50vw] flex flex-col justify-between"
          >
            <div className="flex flex-col justify-start gap-y-8 ">
              <div className="p-2 hover:bg-[#1f1f1f9a]">
                <button onClick={() => setWhichToShow("a")} className="flex items-center justify-start w-max text-nowrap">
                  <IoPeopleSharp className="me-2 text-2xl"/>
                  Profile
                </button>
              </div>
              <div className="p-2 hover:bg-[#1f1f1f9a]">
                <button onClick={() => setWhichToShow("b")} className="flex items-center justify-start w-max text-nowrap">
                  <FaEdit className="me-2 text-2xl"/>
                  Edit Profile
                </button>
              </div>
              
              <div className="p-2 hover:bg-[#1f1f1f9a]">
                <button onClick={() => setWhichToShow("d")} className="flex items-center justify-start w-max text-nowrap">
                  <MdStarRate className="me-2 text-2xl"/>
                   Reviews
                </button>
              </div>
              <div className="p-2 hover:bg-[#1f1f1f9a]">
                <button onClick={() => setWhichToShow("e")} className="flex items-center justify-start w-max text-nowrap">
                  <FaChartColumn className="me-2 text-2xl"/>
                  Analysis
                </button>
              </div>
            </div>

            <div className="flex p-2 text-center flex-col justify-center items-center">
              <div className="flex justify-center">
                <img src={profileData?.avatar} alt="Profile" className="w-20 h-20 rounded-[50%]" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-medium">{profileData?.name}</p>
                <p className="text-base mb-14">{profileData?.username}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <NavPro
        val1="Home"
        val2="Appointments"
        val3="Transactions"
        val4="Logout"
        email={email}
        people={people}
      />
      {mobileClientDashboard()} 
      <div className="flex">
        <div className="xl:w-[15%] lg:w-[20%] sm:w-[20%] fixed w-0 ">
          <FullClientDashboard setting={setWhichToShow} />
        </div>
        <div className="xl:w-[85%] lg:w-[80%] sm:w-[80%] xl:ms-[15%] lg:ms-[20%] sm:ms-[20%] w-full bg-[#fafafa]">
          {whichToShow === "a" && (
            profileData ? (
              <Profile profileDetail={profileData} />
            ) : (
              <p className="text-center my-10">No profile data available.</p>
            )
          )}
          {whichToShow === "b" && <EditProfile profileDetail={profileData} />}
          {whichToShow === "e" && <AnalysisPro />}
          {whichToShow === "d" && <TopReview />}
          <Footer />

        </div>
      </div>
    </div>
  );
};

export default ProviderProfilePage;