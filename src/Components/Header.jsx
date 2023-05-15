import React from "react";
import logoicon from "../assets/logoup.svg";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="border-b-[#3F3F3F] border-opacity-20 border-b absolute top-0 w-full py-[8px]">
      <nav className="container flex justify-between items-center">
        <a
          href=""
          className="nav-logo font-Merienda text-3xl text-primary font-bold relative"
        >
          FoodTime
          <img src={logoicon} alt="icon" className="absolute top-0 -right-3" />
        </a>
        <ul className="nav-ul hidden md:flex items-center capitalize gap-8 font-medium text-black text-sm">
          <li>
            <a href="" className="transition hover:text-primary">
              home
            </a>
          </li>
          <li>
            <a href="" className="transition hover:text-primary">
              blog
            </a>
          </li>
          <li>
            <a href="" className="transition hover:text-primary">
              about us
            </a>
          </li>
          <li>
            <a href="" className="transition hover:text-primary">
              en
            </a>
          </li>
          <li className="px-8 py-3  rounded-full bg-primary text-white font-medium change">
            <a className="text-lg" href="">
              login
            </a>
          </li>
          <li
            className={`p-4   rounded-full bg-primary text-white before:p-3 font-medium relative before:content-['12'] before:rounded-full before:absolute before:-top-2 before:right-0 before:z-40 before:bg-secondary before:h-5 before:w-5 before:flex before:items-center before:justify-center before:text-center change`}
          >
            <a className="text-lg font-bold" href="">
              <FiShoppingCart fill="#fff" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
