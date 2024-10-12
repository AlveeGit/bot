import React from "react";

const Brands = ({ title, logos }) => {
  return (
    <section className="w-full bg-[#1F2129] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 flex justify-between items-center flex-col  lg:flex-row gap-8 ">
        <h2 className="text-3xl font-bold max-w-sm text-white text-center lg:text-left ">{title}</h2>
        <div className="flex gap-4 flex-wrap items-center justify-center ">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brands logo ${index + 1}`}
              className="h-16 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
