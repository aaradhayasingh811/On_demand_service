import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Power3 } from "gsap/all";

const Profile = ({ profileDetail }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Wait for the image to be loaded, then trigger the border rotation
    const handleImageLoad = () => {
      setImageLoaded(true);
      gsap.to(".profile-image-border", {
        rotation: 360,
        duration: 3,
        repeat: 0,
        ease: Power3.easeOut,
      });
    };

    // Animate profile text to simulate typing effect
    gsap.fromTo(
      ".profile-text",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: Power3.easeOut,
      }
    );

    return () => {
      setImageLoaded(false);
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center bg-[#fafafa]"
      style={{ minHeight: "90vh" }}
    >
      {/* Profile Container */}
      <div className="flex flex-col items-center p-8 shadow-xl w-[80%] h-[70vh] my-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6 font-mono profile-text">
          Profile Page
        </h1>

        {/* Profile Image with spinning border in orange */}
        <div
          className="profile-image-border w-32 h-32 border-4 border-orange-500 rounded-full flex justify-center items-center overflow-hidden"
          style={{
            transition: "transform 0.5s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={profileDetail.avatar}
            alt="Profile"
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Profile Text */}
        <h1 className="text-2xl font-bold mt-4 text-center profile-text">{profileDetail.name}</h1>
        <p className="text-lg mt-2 text-center text-gray-600 profile-text">{profileDetail.username}</p>
        <p className="text-base mt-2 text-center text-gray-400 profile-text">{profileDetail.email}</p>
        <p className="text-base mt-2 text-center text-gray-400 profile-text">{profileDetail.work}</p>
      </div>
    </div>
  );
};

export default Profile;
