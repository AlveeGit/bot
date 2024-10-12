import React from "react";
import FacilityCard from "./FacilityCard";
import Button from "../common/Button";
import { FaDiscord } from "react-icons/fa6";

const Facility = ({ heading, facilitiesData }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row w-full  py-12 items-start gap-32 ">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center lg:items-start  ">
        <h2 className="text-3xl font-bold text-white mb-6 lg:text-left text-center ">{heading}</h2>
        <Button icon={FaDiscord} text="Add to Discord" />
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12 ">
        {facilitiesData.map((facility, index) => (
          <FacilityCard
            key={index}
            icon={facility.icon}
            title={facility.title}
            description={facility.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Facility;
