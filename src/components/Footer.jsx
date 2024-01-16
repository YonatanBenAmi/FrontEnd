import React from "react";
import "../App.css";
import CostumerComments from "./CostumerComments";
import ItemTag from "./ItemTag";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" w-full flex justify-center">
        <div className="w-4/5  ">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2  text-center lg:text-left">
              <div className="font-bold text-xl">
                <span>Colman</span>
                <span className="color-yellow">Dev</span>
                <span>Cluc</span>
              </div>

              <div className=" flex justify-center lg:justify-start mt-5 pb-3 ">
                <img
                  className=" w-28"
                  src="./aikon_footer.png"
                  alt="icon footer"
                  title="icon footer"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end lg:justify-center  lg:w-1/2">
              <div className="lg:flex lg:justify-end">
                <ul className="flex flex-col lg:flex-row text-center space-x-6">
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
              <div className="lg:text-right text-center h-full mt-5 pb-3">
                <h3>© copyright | All Rights Reserved</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
