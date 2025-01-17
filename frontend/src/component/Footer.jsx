import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div style={{ minHeight: "20vh" }} className="">
      <div className="social-handles flex flex-row sm:w-1/3 w-full mx-auto justify-between p-4 ">
        <a className="flex justify-center hover:text-orange-400" href="">
          <FacebookIcon />
        </a>
        <a href="" className="flex justify-center hover:text-orange-400">
          <InstagramIcon />
        </a>
        <a href="" className="flex justify-center hover:text-orange-400">
          <TwitterIcon />
        </a>
        <a href="" className="flex justify-center hover:text-orange-400">
          <LinkedInIcon />
        </a>
      </div>
      <hr />
      <p className="text-center my-4 font-base font-bold text-gray-400 font-mono">
        All right are reserved to Aaradhaya Singh
      </p>
    </div>
  );
};

export default Footer;
