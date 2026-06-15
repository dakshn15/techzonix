import React from "react";

const TeamCard = ({ name, role, image, bio }) => (
  <div className="text-center h-full">
    <img src={image} alt={name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="font-heading font-semibold text-xl mb-1">{name}</h3>
    <p className="text-primary font-medium mb-3">{role}</p>
    <p className="text-gray-600 text-sm line-clamp-2">{bio}</p>
  </div>
);

export default TeamCard;
