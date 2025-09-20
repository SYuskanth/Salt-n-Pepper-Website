import React from "react";
const LandingPageButton = ({ text = "Learn More" }) => {
  return (
    <div className="border-2 border-black w-32 h-12 flex justify-center items-center rounded-lg hover:bg-black hover:text-white transition duration-300">
      <a href="/contact">{text}</a>
    </div>
  );
};

export default LandingPageButton;
