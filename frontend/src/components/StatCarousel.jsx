import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-20px] lg:right-[-50px] z-10 cursor-pointer transform -translate-y-1/2 bg-red-500 hover:bg-red-600 p-2 rounded-full"
      onClick={onClick}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path
          d="M9 18l6-6-6-6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-[-20px] lg:left-[-50px] z-10 cursor-pointer transform -translate-y-1/2 bg-red-500 hover:bg-red-600 p-2 rounded-full"
      onClick={onClick}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path
          d="M15 18l-6-6 6-6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const StatCarousel = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("/stats.json")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-white py-10 px-[5%]">
      <Slider {...settings}>
        {stats.map((stat) => (
          <div key={stat.id} className="px-4 h-full">
            <div className="bg-blue-100 p-6 rounded-xl h-full shadow-md hover:shadow-lg transition flex flex-col justify-between min-h-[320px]">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </h2>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-700">{stat.details}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StatCarousel;
