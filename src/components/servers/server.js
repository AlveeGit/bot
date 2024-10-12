import React from "react";
import ServerCard from "./serverCard";

const Server = ({ heading, serverCardsData }) => {
  return (
    <section className="bg-[#1F2129]/80">
      {" "}
      {/* 80% opacity for the background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-3xl md:text-4xl max-w-xl font-bold text-white text-center">
            {heading}
          </h2>
        </div>

        {/* Server Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ">
          {serverCardsData.map((card, index) => (
            <ServerCard
              key={index}
              logo={card.logo}
              title={card.title}
              subTitle={card.subTitle}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Server;
