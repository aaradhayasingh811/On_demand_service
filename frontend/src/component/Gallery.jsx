import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="w-full"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        background: "#FFD580		",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-3xl font-mono font-semibold text-center mt-12 text-gray-800">
        Photo Gallery
      </h1>
      <Slider {...settings} className="w-[80vw] sm:h-96 sm:w-96 mx-auto my-auto">
        <div>
          <img
            src="https://img.freepik.com/free-photo/electrician-builder-work-examines-cable-connection-electrical-line-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool_169016-8633.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_tags_boosted"
            alt="Electrician at Work"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18675.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_tags_boosted"
            alt="Carpenter in Workshop"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/male-plumber-using-wrench-tighten-water-faucet-kitchen-seen-up-close_662251-2697.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_tags_boosted"
            alt="Plumber Tools"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/side-view-woman-cleaning-windows_23-2148394944.jpg?uid=R156714607&ga=GA1.1.1646366203.1721816203&semt=ais_tags_boosted"
            alt="Focused Woodworker"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
