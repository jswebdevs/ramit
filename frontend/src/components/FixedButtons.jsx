import React from "react";
import { Link } from "react-router-dom";

const FixedButtons = () => {
  return (
    <div>
      {/* Left Button */}
      <Link to="/left">
        <button className="fixed top-1/2 left-0 transform -translate-y-1/2 rotate-270 px-4 py-1 bg-red-500 text-white rounded-full hidden lg:block ms-[-55px] cursor-pointer">
          Discount Offers
        </button>
      </Link>

      {/* Right Button */}
      <Link to="/right">
        <button className="fixed top-1/2 right-0 transform -translate-y-1/2 rotate-90 px-4 py-1 bg-red-500 text-white rounded-full hidden lg:block me-[-50px] cursor-pointer">
          Free Seminars
        </button>
      </Link>
    </div>
  );
};

export default FixedButtons;
