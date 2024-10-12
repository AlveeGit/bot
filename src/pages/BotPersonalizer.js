import React from "react";
import { botPersonalizerData } from "../cms/botPersonalizer/botPersonalizerData";
import Feature from "../components/Feature";
import Promo from "../components/Promo";
import { FaDiscord } from "react-icons/fa6";


const BotPersonalizer = () => {
  return (
    <div>
      {botPersonalizerData.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          paragraph={feature.paragraph}
          showDiscordButton={feature.showDiscordButton}
          secondaryButtonText={feature.secondaryButtonText}
          image={feature.image}
          imagePosition={feature.imagePosition}
        />
      ))}

      <Promo
        heading="Build the best Discord server for free"
        buttonText="Add to Discord"
        icon={FaDiscord}
      />
    </div>
  );
};

export default BotPersonalizer;
