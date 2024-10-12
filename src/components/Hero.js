import React from "react";
import { FaDiscord } from "react-icons/fa6";
import Button from "./common/Button";

const Hero = ({
  title,
  paragraph,
  showDiscordButton,
  secondaryButtonText,
  alignment,
  backgroundImage,
  gradient,
  subImage,
  children,
}) => {
  const alignmentClass =
    alignment === "left"
      ? "items-start text-left"
      : alignment === "right"
      ? "items-end text-right"
      : "items-center text-center";

  // Determine the background styles
  const backgroundStyles = {
    backgroundImage: gradient
      ? `url(${backgroundImage}),linear-gradient(to top, #57384E, #141621)`
      : `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  };

  // SubImage styles
  const subImageStyles = subImage
    ? {
        backgroundImage: `url(${subImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right bottom",
        width: "60%",
        height: "60%",
        position: "absolute",
        bottom: "0",
        right: "0",
        zIndex: "1",
      }
    : {};

  return (
    <section
      className={`relative flex flex-col justify-center h-[85vh] w-full`}
      style={backgroundStyles}
    >
      {/* SubImage div */}
      {subImage && <div style={subImageStyles} />}

      <div className="w-full">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col ${alignmentClass}`}
        >
          <h1 className="max-w-xl text-6xl font-bold mb-4">{title}</h1>
          <p className="max-w-xl text-blue-100 opacity-70 mb-8">{paragraph}</p>
          {children}
          <div className="flex space-x-4">
            {showDiscordButton && (
              <Button icon={FaDiscord} text="Add to Discord" />
            )}
            {secondaryButtonText && (
              <Button text={secondaryButtonText} variant="secondary" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
