import React from "react";
import img from "../assets/hero-img.png";
import herot from "../assets/herotop-r.png";
import heror from "../assets/herotop-r.png";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import CountUp from "react-countup";
import { useRef } from "react";

const Hero = () => {
  const inputRef = useRef();
  return (
    <section className="m w-full relative bgopa py-[100px] flex justify-center items-center overflow-hidden">
      <img
        src={herot}
        className="absolute top-8 left-0 w-[10rem] hidden md:block"
        alt=""
      />
      <div className="container z-10 grid lg:grid-cols-2 gap-6 items-center gap-y-20">
        <div className="text-div flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-Merienda !leading-tight text-primary">
            Order food online from your favourite local restaurants
            <span className="text-secondary">.</span>
          </h1>
          <p className="text-para font-medium">
            Freshly made food delivered to your door.
          </p>
          <div
            className="input-div bg-white border bg-opacity-[0.3] flex-wrap border-primary rounded-full flex justify-between items-center  gap-3"
            onClick={() => inputRef.current.focus()}
          >
            <div className="in px-2 flex items-center gap-3">
              <BiCurrentLocation
                className="text-4xl bg-secondary rounded-full small:hidden md:block
              "
                fill="#fff"
              />
              <input
                type="text"
                placeholder="enter ur name"
                className="placeholder:font-Poppins tracking-wide font-medium capitalize  focus:outline-none focus:border-none bg-transparent  w-[120px] text-primary"
                maxLength={10}
                ref={inputRef}
              />
            </div>
            <button className="px-8 py-3 rounded-full bg-primary change  capitalize text-white font-medium ">
              <a className="text-lg flex gap-3 items-center" href="">
                <BiSearch /> search
              </a>
            </button>
          </div>
        </div>
        <div className="img-div  relative">
          <img
            src={heror}
            alt=""
            className="absolute -top-10 w-[10rem] md:w-[15rem] -right-20 -z-10"
          />
          <img src={img} alt="" className="z-10" />
          <div className="number-count flex flex-col justify-center items-center absolute top-10 l-0 py-3 px-5 rounded-lg">
            <h1 className="flex capitalize font-bold items-center text-3xl md:text-4xl  text-secondary">
              <GoVerified className="mr-3" />
              <CountUp start={10} end={200} duration={5} />k
            </h1>
            <p className="font-medium text-para text-xl">People Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
