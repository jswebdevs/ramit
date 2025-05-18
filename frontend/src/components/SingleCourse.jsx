import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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

  const {
    description,
    category,
    duration,
    difficultyLevel,
    prerequisites,
    language,
    tags,
    ratings,
    enrollmentCount,
    price,
    discountPrice,
    certification,
    communitySupport,
    media,
    courseInfo,
    courseContent,
    syllabus,
  } = selectedCourse;

  return (
    <div className="px-[5%] bg-white py-10">
      <div className="text-center">
        <h1 className="text-3xl text-black font-bold">
          {selectedCourse.title}
        </h1>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
        <img
          src={media.thumbnail}
          alt={selectedCourse.title}
          className="w-1/2 mx-auto mt-4 rounded-xl"
        />
      </div>

      {/* Course Info Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseInfo.map((info) => (
          <div key={info.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              {info.icon} <span className="text-gray-800">{info.title}</span>
            </h3>
            <p className="text-gray-700">{info.description}</p>
          </div>
        ))}
      </div>

      {/* Content Outline */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-black">
          What You Will Learn
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {courseContent.map((content) => (
            <div
              key={content.id}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <h4 className="text-xl font-medium mb-1">
                {content.icon}{" "}
                <span className="text-gray-800"> {content.title}</span>
              </h4>
              <p className="text-gray-700">{content.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tags, Ratings, and Meta Info */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">
            Course Details
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Category:</strong> {category}
            </li>
            <li>
              <strong>Duration:</strong> {duration}
            </li>
            <li>
              <strong>Level:</strong> {difficultyLevel}
            </li>
            <li>
              <strong>Language:</strong> {language}
            </li>
            <li>
              <strong>Prerequisites:</strong> {prerequisites.join(", ")}
            </li>
            <li>
              <strong>Certification:</strong> {certification ? "Yes" : "No"}
            </li>
            <li>
              <strong>Community Support:</strong>{" "}
              {communitySupport ? "Yes" : "No"}
            </li>
            <li>
              <strong>Status:</strong> {selectedCourse.courseStatus}
            </li>
          </ul>
        </div>
      </div>

      {/* Pricing & Ratings */}
      <div className="mt-10 text-center">
        <p className="text-xl text-green-600 font-bold mt-2">
          <span className="text-2xl font-bold text-black"></span>৳{discountPrice}{" "}
          <span className="line-through text-red-400 text-base">৳{price}</span>
        </p>
        <p className="mt-2 text-gray-700">
          Rated {ratings.averageRating}⭐ by {ratings.totalReviews} students
        </p>
        <p className="text-sm text-gray-600">Enrollments: {enrollmentCount}</p>
      </div>

      {/* Syllabus Download */}
      <div className="mt-10 text-center">
        <Link
          to="/contact"
          className="btn btn-primary"
        >
          📥 Enroll Now
        </Link>
      </div>

      

      {/* Promo Video
      {media.promoVideo && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Promo Video
          </h2>
          <video
            src={media.promoVideo}
            controls
            className="mx-auto w-full max-w-4xl rounded-lg"
          />
        </div>
      )} */}

    </div>
  );
};

export default SingleCourse;
