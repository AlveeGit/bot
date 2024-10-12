import React from "react";

const GuideCard = ({ image, title, text }) => {
  return (
    <div className="bg-[#1F2129] p-8 rounded-lg text-left flex flex-col h-full cursor-pointer transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-5">
      <img src={image} alt={title} className="mb-4 mx-auto" />
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
        <p className="text-blue-100 opacity-70 text-sm mt-auto">{text}</p>
      </div>
    </div>
  );
};

export default GuideCard;
