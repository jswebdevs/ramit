import React, { useEffect, useState } from "react";

const SuccessPage = () => {
    const [stories, setStories] = useState([]);

    useEffect(()=>{
        fetch("/success.json")
          .then((res) => res.json())
          .then((data) => setStories(data))
          .catch((err) => console.error("Failed to load success stories:", err));

    }, [])
  return (
    <div className="bg-gray-50 py-12 px-[5%]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">সফলতার গল্প</h2>
        <p className="text-gray-600 text-lg">
          আমাদের শিক্ষার্থীদের অসাধারণ যাত্রার কিছু বাস্তব উদাহরণ।
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white p-6 shadow-md rounded-2xl hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {story.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4 whitespace-pre-line">
              {story.discription.slice(0, 90)}...
            </p>
            <a
              href={story.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              ভিডিও দেখুন →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPage;
