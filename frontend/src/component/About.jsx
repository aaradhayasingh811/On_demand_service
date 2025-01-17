import React from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
const About = () => {
  return (
    <div
      style={{ background: "#fff7e1", position: "relative" }}
      className="flex justify-center"
      id="about"
    >
      <div
        className="bg-[#fe4b01] text-white text-2xl p-4 rounded flex"
        style={{ bottom: "10%", width: "90%" }}
      >
        <div className="flex justify-center items-center flex-col p-4">
          <p className="text-3xl text-left font-bold my-8 font-mono">
            About Us
          </p>
          <p className="text-lg">
            We provide fast, reliable, and affordable on-demand maintenance
            services for homes, offices, and commercial spaces. Our team of
            skilled technicians is available 24/7 to handle a wide range of
            tasks, from plumbing and electrical repairs to general upkeep.{" "}
          </p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTd-fAe4Dx1hq1FZwQij6b0IscemkPJ7f3Xg&s"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-end">
          <div className="my-7">
            <EditCalendarIcon />
            Task Schedular
          </div>
          <div className="my-7">
            <EditCalendarIcon />
            Task Schedular
          </div>
          <div className="my-7">
            <EditCalendarIcon />
            Task Schedular
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
