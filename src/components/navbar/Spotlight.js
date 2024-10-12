import React from "react";
import SpotlightCard from "./SpotlightCard";

const Spotlight = ({ title, cards, linkText, linkUrl, handleLinkClick }) => {
  return (
    <div className="bg-[#151621] p-8  shadow-lg">
      <h2 className="text-sm text-gray-400 font-bold mb-6">{title}</h2>
      <div className="space-y-6">
        {cards.map((card, index) => (
          <SpotlightCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
            handleLinkClick={handleLinkClick}
          />
        ))}
      </div>
      <div className="mt-6">
        <a href={linkUrl} onClick={handleLinkClick} className="text-blue-500 hover:underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Spotlight;
