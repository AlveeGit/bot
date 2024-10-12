import React from "react";
import { FaDiscord } from "react-icons/fa6";
import Button from "./common/Button";

const Feature = ({
  title,
  paragraph,
  showDiscordButton,
  secondaryButtonText,
  image,
  imagePosition,
  icon: Icon,
}) => {
  // Layout classes based on imagePosition
  const layoutClass = {
    left: "flex-col lg:flex-row",
    right: "flex-col lg:flex-row-reverse",
    top: "flex-col-reverse lg:flex-col",
    bottom: "flex-col lg:flex-col-reverse",
  }[imagePosition];

  // Margin classes based on imagePosition
  const marginClass = {
    left: "ml-0  lg:ml-20 xl:ml-48", // 6rem left margin
    right: "mr-0  lg:mr-20 xl:mr-48", // 6rem right margin
    top: "", // No additional margin for top
    bottom: "", // No additional margin for bottom
  }[imagePosition];

  const imageColumn = (
    <div
      className={`flex  justify-center items-center w-full ${
        imagePosition === "left" || imagePosition === "right"
          ? "md:w-1/2 "
          : "w-full"
      }`}
    >
      <img src={image} alt={title} className="max-w-full h-auto" />
    </div>
  );

  const contentColumn = (
    <div
      className={`flex flex-col justify-center   mt-10 lg:mt-0 w-full text-center lg:text-left ${
        imagePosition === "left" || imagePosition === "right"
          ? "lg:w-1/2"
          : "w-full"
      } ${marginClass}`}
    >
      <div
        className={` ${
          Icon ? "flex items-center flex-col lg:flex-row lg:items-start  " : ""
        }`}
      >
        {Icon && (
          <div className="mr-4 ">
            <Icon size={50} /> {/* Adjust the size as needed */}
          </div>
        )}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="mb-8 text-blue-100 opacity-70">{paragraph}</p>
          <div className="flex gap-4 flex-col lg:flex-row">
            {showDiscordButton && (
              <Button icon={FaDiscord} text="Add to Discord" />
            )}
            {secondaryButtonText && (
              <Button text={secondaryButtonText} variant="secondary" />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="flex justify-center w-full py-20">
      <div
        className={`flex ${layoutClass} items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        {imageColumn}
        {contentColumn}
      </div>
    </section>
  );
};

export default Feature;
