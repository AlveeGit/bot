import React from "react";
import { utilitiesData } from "../cms/utilities/utilitiesData";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import { utilitiesHeroBg, } from "../assets/images";
import Promo from "../components/Promo";
import { FaDiscord } from "react-icons/fa6";

const Utilities = () => {
  return (
    <div>
      <Hero
        title="All the tools you need in a single bot"
        paragraph="MEE6 offers multiple plugins. Our dashboard is simple to configure and you only use what you need, when you need it."
        showDiscordButton // show discord button
        // secondaryButtonText="See Features" //secondary button
        // alignment="right"   //left,rigth, default center
        backgroundImage={utilitiesHeroBg}
        // subImage={managementHeroBg} // optional secondary image
        // home    // gradient
      >
        {/* <div>
          <h1>Management</h1>
          <img src={managementHeroBg} alt="" />
        </div> */}
      </Hero>

      {/*  Add utilities img 1 */}
      <Hero
        title="Send Rich Embeds in your Discord server"
        paragraph="Create, design, edit & send embed messages in your server with our powerful and easy-to-use embed editor."
        showDiscordButton // show discord button
      >
        {/* <div className="">
          <h1>Management</h1>
          <img src={utilitiesImg1} alt="" />
        </div> */}
      </Hero>

      {utilitiesData.map((feature, index) => (
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

export default Utilities;
