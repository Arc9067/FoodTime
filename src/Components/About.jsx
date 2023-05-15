import React from "react";
import ride from "../assets/ride.png";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-secondary  bg-opacity-[0.05]">
      <div className="container z-10 grid lg:grid-cols-2 gap-6 items-center gap-y-20">
        <div className="text-div flex flex-col gap-3">
          <h1 className="text-4xl  md:text-6xl text-primary font-Merienda leading-tight">
            Explore your favourite city’s food.
          </h1>
          <p className="text-para ">
            Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
            tristique. Non ligula tristique ut ut libero sit convallis maecenas.
            At egestas auctor porta mattis.
          </p>
          <button className="px-8 w-max change capitalize py-3 rounded-full bg-primary text-white font-medium ">
            <a className="text-lg flex gap-3 items-center" href="">
              explore <BsArrowRight />
            </a>
          </button>
        </div>
        <div className="img-div">
          <img src={ride} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
