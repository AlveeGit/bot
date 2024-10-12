import React from "react";
import Hero from "../components/Hero";
import { featureManagementData } from "../cms/management/ManagementData";
import { managementHeroBg } from "../assets/images";
import Feature from "../components/Feature";

const Management = () => {
  return (
    <div>
      <Hero
        title="The best moderation bot for Discord"
        paragraph="Keep your Discord server safe and organized with Bot-Pro's advanced auto-moderation filters. Set up rules and filters for bad behavior, track server activity, and welcome new members with ease."
        showDiscordButton
        backgroundImage={managementHeroBg}
      />

      {featureManagementData.map((feature, index) => (
        <div key={index} className="relative flex flex-col items-center">
          <Feature
            icon={feature.icon}
            title={feature.title}
            paragraph={feature.paragraph}
            showDiscordButton={feature.showDiscordButton}
            secondaryButtonText={feature.secondaryButtonText}
            image={feature.image}
            imagePosition={feature.imagePosition}
          />
          {index < featureManagementData.length - 1 && (
            <div className="hidden lg:flex relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full  justify-start mt-4">
              <div className="border-l-2 border-dashed border-gray-400 h-48 -mt-28 -mb-28 ms-6 "></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Management;
