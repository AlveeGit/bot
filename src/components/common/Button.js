import React from "react";

const Button = ({ icon: Icon, text, variant }) => {
  // Define a mapping for the button styles based on the 'variant' prop
  const variantStyles = {
    white: "bg-white text-black hover:bg-gray-300",
    secondary: "bg-gray-500 bg-opacity-50 text-white hover:bg-gray-600",
    yellow: "bg-yellow-300 bg-opacity-20 text-yellow-500 hover:bg-yellow-800",
    default: "bg-sky-600 text-white hover:bg-sky-700",
  };

  // Select the appropriate style or fallback to 'default'
  const buttonClass = `${
    variantStyles[variant] || variantStyles.default
  } py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition`;

  return (
    <button className={buttonClass}>
      {Icon && <Icon size={24} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
