import React from "react";
import logoicon from "../assets/logoup.svg";
import footerdata from "../footerdata";
const Footer = () => {
  return (
    <footer className="w-full py-[50px] bg-primary">
      <div className="container">
        <div className="grid  md:grid-cols-2 gap-y-5">
          <div className="text-white">
            <a
              href=""
              className="nav-logo font-Merienda text-3xl font-bold relative"
            >
              FoodTime
              <img
                src={logoicon}
                alt="icon"
                className="absolute top-0 -right-3"
              />
            </a>
            <p className="text-lighttxt mt-6 !max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor
              convallis. Bibendum sapien suspendisse ipsum urna malesuada elit.
              Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-10">
            {footerdata.map((ele) => {
              const { name, links } = ele;
              return (
                <ul className="flex flex-col gap-y-2 text-lighttxt mt-8 md:mt-0">
                  <h1 className="text-white font-medium text-lg">{name}</h1>
                  {links.map((data) => {
                    return (
                      <li className="transition hover:text-secondary">
                        <a href="#">{data.link}</a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
