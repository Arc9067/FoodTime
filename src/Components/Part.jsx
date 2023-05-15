import React from "react";
import cook from "../assets/cook.png";

const Part = () => {
  return (
    <section className="py-[50px] w-full bg-white">
      <div className="container flex justify-between items-center">
        <div className="img-div relative mx-auto flex justify-center">
          <img src={cook} alt="" className="lg:max-w-[35rem] w-full" />
          <div className="text-div flex flex-col gap-2 w-full absolute bottom-5">
            <h3 className="text-center font-medium text-2xl text-white">
              Want to be a part of Foodtime?
            </h3>
            <p className="text-[#EDEDED] text-center">
              Want to be a part of Foodtime?
            </p>
            <button className="px-8 w-max mx-auto capitalize py-3 rounded-full bg-secondary text-white font-medium hover:text-primary hover:shadow ">
              <a className="text-lg flex gap-3 items-center" href="">
                explore
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part;
