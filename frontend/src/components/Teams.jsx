import React, { useEffect, useState } from "react";

const Teams = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Error loading team:", err));
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-1 text-center">Our Team</h2>
      <h3 className="font-semibold mb-6 text-center">Meet Our Amazing team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white shadow-md rounded-2xl p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
