import React from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownNavItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className="flex items-center space-x-2 text-white hover:text-gray-300 focus:outline-none"
      >
        <span>{title}</span>
        <FaChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div
          className="absolute left-0  w-[99vw] bg-[#1F2129] mt-9 overflow-hidden border-t   "
          style={{ zIndex: 1000 }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownNavItem;
