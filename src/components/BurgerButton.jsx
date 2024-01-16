import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`lg:hidden sticky cursor-pointer z-[3] transition-transform transform ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
        onClick={handleButtonClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <header className="w-full h-[100vh] absolute inset-0">
          <div className="absolute inset-0 ">
            <ul className="h-full grid place-items-center py-20">
              <li className="hover:color-yellow">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:color-yellow">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:color-yellow">
                <Link to="/managers">Managers</Link>
              </li>
              <li className="hover:color-yellow">
                <Link to="/price">Price</Link>
              </li>
              <li className="hover:color-yellow">
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className="hover:color-yellow">
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
        </header>
      )}
    </div>
  );
};

export default BurgerButton;
