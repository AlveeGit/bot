import React, { useState } from "react";
import Flag from "react-flagkit";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import DropdownNavItem from "./navbar/DropdownNavItem";
import DropdownContent from "./navbar/DropdownContent";
import { navItems } from "../cms/nav/NavData";
import { FaCrown } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("US");

  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  const handleLanguageChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedLanguage(selectedValue);
  };

  return (
    <nav className="bg-[#151621] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-white text-xl font-bold"
            onClick={handleLinkClick}
          >
            Bot-Pro
          </Link>

          {navItems.map(
            ({ title, dropdownName, linkCardsData, spotlightData }) => (
              <DropdownNavItem
                key={dropdownName}
                title={title}
                isOpen={openDropdown === dropdownName}
                onClick={() => handleDropdownClick(dropdownName)}
              >
                <DropdownContent
                  linkCardsData={linkCardsData}
                  spotlightData={spotlightData}
                  handleLinkClick={handleLinkClick}
                />
              </DropdownNavItem>
            )
          )}
        </div>
        <div className="flex items-center space-x-4">
          {/* Flag Icon */}
          <Flag country={selectedLanguage} className="-mr-2" />

          {/* Dropdown Language Selector */}
          <select
            className="bg-[#151621] text-white "
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="US">EN</option>
            <option value="ES">ES</option>
            <option value="FR">FR</option>
            {/* Add more languages as needed */}
          </select>
          <Button icon={FaCrown} text="Premium" variant="yellow" />
          <Button text="Login with Discord" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
