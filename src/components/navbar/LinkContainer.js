import React from "react";
import LinkCard from "./LinkCard";

const LinkContainer = ({ cards , handleLinkClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <LinkCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          to={card.to}
          handleLinkClick={handleLinkClick}
        />
      ))}
    </div>
  );
};

export default LinkContainer;
