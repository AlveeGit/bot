import React from "react";
import GuideCard from "./GuideCard";
import Button from "../common/Button";

const Guide = ({ heading, paragraph, cards, buttonText }) => {
  return (
    <section className=" py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-4xl max-w-md  font-semibold text-white mb-4">
          {heading}
        </h2>
        <p className="text-blue-100 max-w-2xl opacity-70 mt-6 mb-16">
          {paragraph}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <GuideCard
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>

        <Button text={buttonText} variant="secondary" />
      </div>
    </section>
  );
};

export default Guide;
