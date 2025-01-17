import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div
      className="w-full"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #FFD580, #FFB347)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-center mt-12 text-gray-800 sm:text-5xl">
        Professional Photo Gallery
      </h1>
      <p className="text-center mt-2 text-gray-600 text-lg sm:text-xl">
        Capturing the essence of craftsmanship and artistry.
      </p>
      <Slider {...settings} className="w-[90%] max-w-4xl mx-auto mt-10">
        {[
          {
            src: "https://img.freepik.com/free-photo/electrician-builder-work-examines-cable-connection-electrical-line-fuselage-industrial-switchboard-professional-overalls-with-electrician-s-tool_169016-8633.jpg",
            alt: "Electrician inspecting connections in a professional setting",
          },
          {
            src: "https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18675.jpg",
            alt: "Carpenter working on wood with precision",
          },
          {
            src: "https://img.freepik.com/free-photo/male-plumber-using-wrench-tighten-water-faucet-kitchen-seen-up-close_662251-2697.jpg",
            alt: "Plumber using tools to fix a water faucet",
          },
          {
            src: "https://img.freepik.com/free-photo/side-view-woman-cleaning-windows_23-2148394944.jpg",
            alt: "Focused professional cleaning windows with dedication",
          },
        ].map((image, index) => (
          <div key={index} className="p-4">
            <img
              src={image.src}
              alt={image.alt}
              className="h-96 w-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
