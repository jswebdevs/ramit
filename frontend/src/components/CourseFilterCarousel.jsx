import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-40px] cursor-pointer transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
    onClick={onClick}
  >
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
      <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" />
    </svg>
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-40px] cursor-pointer transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
    onClick={onClick}
  >
    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
      <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" />
    </svg>
  </div>
);

const CourseFilterCarousel = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  console.log(courses);

  const categories = [
    "All Courses",
    "Digital Marketing",
    "Graphic Design",
    "Web Design & Development",
    "Mobile App Development",
    "Cyber Security",
  ];

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="px-[5%] bg-white py-10">
      <h2 className="text-2xl font-bold mb-1 text-center text-[#202020]">
        Our Courses
      </h2>
      <h3 className="font-semibold mb-6 text-center text-[#202020]">
        Browse All our Courses
      </h3>
      {/* Category Filter Buttons */}
      <div className="flex justify-start md:justify-center space-x-2 md:space-x-4 overflow-x-auto px-4 mb-6 scrollbar-hide whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Carousel */}
      <div className="slider-container">
        {filteredCourses.length > 1 ? (
          <Slider {...settings}>
            {filteredCourses.map((course) => (
              <div key={course.id} className="px-2">
                <Link
                  to={`courses/${course.title}`}
                  className="flex bg-white shadow-md items-center text-black flex-col justify-center p-6 rounded-lg hover:scale-105 transition"
                >
                  <img
                    src={course.media.thumbnail}
                    alt={course.title}
                    className="w-full mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center">
                    {course.title}
                  </h3>
                </Link>
              </div>
            ))}
          </Slider>
        ) : (
          filteredCourses.map((course) => (
            <div key={course.id} className="px-2 max-w-[300px] mx-auto">
              <Link
                to={course.title}
                className="flex bg-white shadow-md items-center text-black flex-col justify-center p-6 rounded-lg hover:scale-105 transition"
              >
                <img
                  src={course.media.thumbnail}
                  alt={course.title}
                  className="w-full mb-4"
                />
                <h3 className="text-lg font-semibold text-center">
                  {course.title}
                </h3>
              </Link>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center">
        <Link to="/courses" className="btn text-center">
          Browse All our Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseFilterCarousel;
