import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Custom Next Arrow
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

const CourseCarousel = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://ramit.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
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
    <div className="px-[5%] bg-white relative">
      <div className="slider-container">
        <Slider {...settings} className="gap-x-4">
          {courses.map((course) => (
            <div key={course.id} className="py-5 px-4 mx-3 flex">
              <Link
                to= {`/courses/${course.title}`}
                className="flex bg-white shadow-md items-center text-black flex-col justify-center p-4 rounded-lg hover:scale-105 transition min-h-40"
              >
                <img
                  src={course.media.icon}
                  alt={course.name}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-lg font-semibold text-center">
                  {course.title}
                </h3>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseCarousel;
