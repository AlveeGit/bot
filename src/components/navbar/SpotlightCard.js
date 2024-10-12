import React from "react";

const SpotlightCard = ({
  image,
  title,
  description,
  link,
  handleLinkClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row  shadow-lg rounded-lg overflow-hidden cursor-pointer gap-4 ">
      <div className="md:w-2/5">
        <img
          src={image}
          alt={title}
          className="h-36 w-44 object-cover rounded-lg "
        />
      </div>
      <div className="md:w-3/5 flex flex-col justify-center opacity-60 hover:opacity-100 ">
        <h2 className="font-semibold text-gray-200 mb-4">{title}</h2>
        <p className="text-blue-200 text-sm mb-6">{description}</p>
        <a href={link} onClick={handleLinkClick} className="text-blue-500 hover:underline">
          Read Article
        </a>
      </div>
    </div>
  );
};

export default SpotlightCard;
