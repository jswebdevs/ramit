import React, { useState } from "react";

const AddCourseForm = () => {
  const [course, setCourse] = useState({
    name: "",
    description: "",
    category: "",
    level: "",
    duration: "",
    price: "",
    instructor: { name: "", profile: "" },
    media: { icon: "", thumbnail: "", banner: "", promo_video: "" },
    syllabus: "",
    outline: [],
    final_exam: { questions: [], certificate: "" },
    resources: { downloads: [], community: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleInstructorChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({
      ...prev,
      instructor: { ...prev.instructor, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Data:", course);
    // Send data to backend API
    
  };

  return (
    <div className="max-w-4xl mx-auto bg-base-100 p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={course.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={course.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="level"
          placeholder="Level (Beginner, Intermediate, Advanced)"
          value={course.level}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 12 weeks)"
          value={course.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Price (Free or Paid)"
          value={course.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <h3 className="font-semibold">Instructor</h3>
        <input
          type="text"
          name="name"
          placeholder="Instructor Name"
          value={course.instructor.name}
          onChange={handleInstructorChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="profile"
          placeholder="Instructor Profile Image URL"
          value={course.instructor.profile}
          onChange={handleInstructorChange}
          className="w-full p-2 border rounded"
        />

        <h3 className="font-semibold">Media</h3>
        <input
          type="text"
          name="icon"
          placeholder="Icon URL"
          value={course.media.icon}
          onChange={(e) =>
            setCourse({
              ...course,
              media: { ...course.media, icon: e.target.value },
            })
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          value={course.media.thumbnail}
          onChange={(e) =>
            setCourse({
              ...course,
              media: { ...course.media, thumbnail: e.target.value },
            })
          }
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;


