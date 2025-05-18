import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [features, setFeatures] = useState([]);
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Failed to load about.json:", err));

    fetch("/about2.json")
      .then((res) => res.json())
      .then((data) => setReasons(data))
      .catch((err) => console.error("Failed to load about2.json:", err));
  }, []);

  return (
    <div className="px-[5%] py-10 bg-white text-gray-800 space-y-16">
      {/* First Row - Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          About RAM IT
        </h1>
        <p className="text-lg leading-7 text-justify">
          RAM IT is a next-generation IT training institute and digital
          solutions agency based in Rajshahi, Bangladesh. With a mission to
          empower youth through practical, skill-based education, we specialize
          in delivering industry-standard training in high-demand fields like
          Digital Marketing, Graphics Design, Web Development, Video Editing,
          Cyber Security, and more.
        </p>
        <p className="text-lg leading-7 text-justify">
          Founded by Md. Abdur Rahman, RAM IT stands for quality, creativity,
          and real-world impact. Our hands-on courses are designed not just to
          teach—but to transform beginners into professionals ready for the
          freelancing world, startup culture, or tech jobs at home and abroad.
        </p>
        <p className="text-lg leading-7 text-justify">
          Whether you're a student, job seeker, or aspiring entrepreneur, RAM IT
          is your launchpad to a digital future.
        </p>
      </section>

      {/* Second Row - Key Features */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Our Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          {features.map((item) => (
            <li
              key={item.id}
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: item.detail }}
            />
          ))}
        </ul>
      </section>

      {/* Third Row - Why Choose Us */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Why Choose RAM IT?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700">
          {reasons.map((item) => (
            <li key={item.id} className="flex items-start space-x-3 text-lg">
              <span className="text-2xl">{item.icon}</span>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
