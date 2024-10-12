import React from "react";
import { subIcon1, subIcon2 } from "../../assets/images";

const ServerCard = ({ logo, title, subTitle }) => {
  return (
    <a
      href="https://discord.com/invite/roblox"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#17181E] p-3 sm:p-4 rounded-lg flex items-center space-x-4 h-24 sm:h-28 cursor-pointer transition-transform transform hover:translate-y-[-5px] hover:shadow-lg"
    >
      {/* Circle Image */}
      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden">
        <img src={logo} alt="Server" className="object-cover w-full h-full" />
      </div>

      {/* Card Content */}
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1 sm:mb-2">
          <img src={subIcon1} alt="Logo" className="w-3 sm:w-4 h-3 sm:h-4" />
          <h3 className="text-sm sm:text-base font-semibold text-white">
            {title}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <img src={subIcon2} alt="Logo" className="w-3 sm:w-4 h-3 sm:h-4" />
          <p className="text-xs sm:text-sm text-blue-100 opacity-70">
            {subTitle}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ServerCard;
