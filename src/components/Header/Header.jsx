import React from "react";
import { NavLink, Link } from "react-router-dom";
import userImage from "../../assets/images/avator.png";
import logo from "../../assets/images/logo.webp";
// import { BiAddToQueue } from "react-icons/bi";
// import { CiMenuBurger } from "react-icons/ci";
import {BiAddToQueue} from "react-icons/bi"
import {CiMenuBurger} from "react-icons/ci"
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img
              src={logo}
              style={{ height: "60px", width: "100px" }}
              alt="logo"
            />
          </div>
          {/* header items */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}

          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImage} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className=" bg-primaryColor py-2 px-6 flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <>
            <BiAddToQueue />
        <CiMenuBurger />
            </>

            <span className="md: hidden">
          
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
