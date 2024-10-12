import React from "react";
import LinkContainer from "./LinkContainer"; // Import the LinkContainer component
import Spotlight from "./Spotlight"; // Import the Spotlight component

const DropdownContent = ({ linkCardsData, spotlightData, handleLinkClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LinkContainer takes 2/3 width on larger screens */}
        <div className="lg:col-span-7">
          <LinkContainer cards={linkCardsData} handleLinkClick={handleLinkClick} />
        </div>

        {/* Spotlight takes 1/3 width on larger screens */}
        <div className="lg:col-span-5">
          <Spotlight {...spotlightData} handleLinkClick={handleLinkClick} />
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;
