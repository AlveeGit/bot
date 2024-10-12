import React from "react";
import Button from "./common/Button";

const Promo = ({ heading, buttonText, icon, onButtonClick }) => {
  return (
    <div className="bg-[#0076FF]  py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:items-center text-center">
        <h2 className="text-4xl font-bold text-white mb-6">{heading}</h2>
        <Button
          text={buttonText}
          icon={icon}
          onButtonClick={onButtonClick}
          variant="white"
        />
      </div>
    </div>
  );
};

export default Promo;
