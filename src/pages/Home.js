import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Brands from "../components/Brands";
import Facility from "../components/facilities/Facility";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  homeHeroBg,
  homeHeroSub,
} from "../assets/images";
import Guide from "../components/guides/Guide";
import Promo from "../components/Promo";
import { FaDiscord } from "react-icons/fa6";
import Server from "../components/servers/server";

import {
  facilitiesData,
  guideCardsData,
  serverCardsData,
  featureData,
} from "../cms/home/HomeData.js";

const Home = () => {
  const brandLogos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <div>
      <Hero
        title="The best Tic-Tac-Toe Game bot for Discord"
        paragraph="DikTac is a complete Discord bot, easy-to-use, that millions of Discord servers worldwide trust to manage, entertain, and grow their community."
        showDiscordButton
        secondaryButtonText="See Features"
        alignment="left"
        backgroundImage={homeHeroBg}
        subImage={homeHeroSub}
        gradient
      />

      <Brands
        title="More than 21 million Discord servers use Bot-Pro"
        logos={brandLogos}
      />

      {featureData.map((feature, index) => (
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

      <Server
        heading="Bot-Pro is trusted and used by more than 21 Million servers"
        serverCardsData={serverCardsData}
      />

      <Facility
        heading="Bot-Pro: The Best All-in-One Discord Bot"
        facilitiesData={facilitiesData}
      />
      <Guide
        heading="Discover Bot-Pro Tutorials, Documents and Guides"
        paragraph="Whether you're new to Discord or have plenty of experience, the Bot-Pro team creates tutorials and resources to help you get rolling on your server. Check out our tutorials and get started today!"
        cards={guideCardsData}
        buttonText="Learn More"
      />
      <Promo
        heading="Build the best Discord server for free"
        buttonText="Add to Discord"
        icon={FaDiscord}
      />
    </div>
  );
};

export default Home;
