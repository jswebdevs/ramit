import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const { title } = useParams();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        const course = data.find(
          (course) =>
            course.title.toLowerCase() ===
            decodeURIComponent(title).toLowerCase()
        );
        setSelectedCourse(course);
      })
      .catch((err) => console.error("Error loading courses:", err));
  }, [title]);

  if (!selectedCourse) {
    return (
      <p className="text-center py-10">Course not found or still loading...</p>
    );
  }

  return (
    <div className="px-[5%] bg-white py-10">
      <div className="text-center items-center justify-center">
        <h1 className="text-3xl text-black font-bold">
          {selectedCourse.title}
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          {selectedCourse.description}
        </p>
        <img
          src={selectedCourse.media.thumbnail}
          alt={selectedCourse.title}
          className="w-1/2 mx-auto mt-4"
        />
      </div>
    </div>
  );
};

export default SingleCourse;
