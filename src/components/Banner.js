import React from "react";
import Button from "./common/Button";
import { icon1, icon2, icon3 } from "../assets/images";

const Banner = ({ text, buttonText, onButtonClick }) => {
  const images = [icon1, icon2, icon3];
  return (
    <div
      className="flex items-center justify-center w-full py-2 px-6 "
      style={{
        background: "linear-gradient(to right, #7C26FF, #FCA98D)", // Gradient background
      }}
    >
      {/* Images Section */}
      <div className="flex -space-x-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Avatar ${index}`}
            className="w-10 h-10 100 rounded-full border-4 border-black"
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="ml-6 text-white font-medium">
        Chat. Play. Engage. Your AI Server Mascot Awaits!
      </div>

      {/* Button Section */}
      <div className="ml-6">
        <Button text="TRY IT FOR FREE" variant="white" />
      </div>
    </div>
  );
};

export default Banner;
