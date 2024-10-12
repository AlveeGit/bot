import React from "react";

const FooterLink = ({ href, text }) => {
  return (
    <div>
      <a
        href={href}
        className="link text-gray-400 no-underline hover:text-[#0076FF] transition text-sm"
      >
        {text}
      </a>
    </div>
  );
};

export default FooterLink;
