import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BurgerButton from "./BurgerButton";

export default function Nav() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveLink(1);
        break;
      case "/about":
        setActiveLink(2);
        break;
      case "/managers":
        setActiveLink(3);
        break;
      case "/price":
        setActiveLink(4);
        break;
      case "/payments":
        setActiveLink(4);
        break;
      case "/contactus":
        setActiveLink(5);
        break;
      case "/careers":
        setActiveLink(6);
        break;
      default:
        setActiveLink(1);
    }
  }, [location.pathname]);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const getLinkClassName = (linkId) => {
    return linkId === activeLink ? "color-yellow" : "hover:color-yellow";
  };

  return (
    <header className="sticky top-0 w-full flex justify-center z-[3]">
      <div className="flex flex-row items-center justify-center py-6 space-x-6 w-4/5">
        <div className="w-3/4 hidden lg:flex justify-end">
          <ul className="flex text-right space-x-6">
            <li className="hover:color-yellow">
              <Link
                to="/"
                onClick={() => handleLinkClick(1)}
                className={getLinkClassName(1)}
              >
                Home
              </Link>
            </li>
            <li className="hover:color-yellow">
              <Link
                to="/about"
                onClick={() => handleLinkClick(2)}
                className={getLinkClassName(2)}
              >
                About Us
              </Link>
            </li>
            <li className="hover:color-yellow">
              <Link
                to="/managers"
                onClick={() => handleLinkClick(3)}
                className={getLinkClassName(3)}
              >
                Managers
              </Link>
            </li>
            <li className="hover:color-yellow">
              <Link
                to="/price"
                onClick={() => handleLinkClick(4)}
                className={getLinkClassName(4)}
              >
                Price
              </Link>
            </li>
            <li className="hover:color-yellow">
              <Link
                to="/contactus"
                onClick={() => handleLinkClick(5)}
                className={getLinkClassName(5)}
              >
                Contact Us
              </Link>
            </li>
            <li className="hover:color-yellow">
              <Link
                to="/careers"
                onClick={() => handleLinkClick(6)}
                className={getLinkClassName(6)}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/4 flex justify-end items-end">
          <ul className="flex text-right space-x-6">
            <li className=" w-32 hover:color-yellow items-end">
              <a
                href="https://infra-bneibrak-five.vercel.app/login"
                onClick={() => handleLinkClick(7)}
                className={getLinkClassName(7)}
              >
                Sign In
              </a>
            </li>
            <li className="color-yellow b-yellow rounded-md hover:text-neutral-50">
            <a className="" href="https://infra-bneibrak-five.vercel.app/register"><button className="btn">Sign Up</button></a>
              
            </li>
          </ul>
        </div>
      </div>

      <BurgerButton />
    </header>
  );
}
