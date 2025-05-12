import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  const categories = [
    "All Courses",
    "Digital Marketing",
    "Graphic Design",
    "Web Design & Development",
    "Mobile App Development",
    "Cyber Security",
  ];

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

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

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Link
            key={course.id}
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
        ))}
      </div>
    </div>
  );
};

export default Courses;
