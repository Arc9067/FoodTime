import React from "react";
import img from "../assets/sushibar.png";
import AppleStore from "../assets/App Store Black.png";
import PlayStore from "../assets/Google Play Black.png";

const Download = () => {
  return (
    <section className="py-[50px] w-full bg-secondary bg-opacity-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center justify-between gap-y-20">
          <div className="">
            <h1 className="text-primary font-bold text-4xl">
              Put us in your pocket
            </h1>
            <p className="!max-w-[400px] mt-2">
              Download our app from google play or app store and you don’t have
              to be worry about your food anymore.{" "}
            </p>
            <div className="flex mt-6 max-w-max gap-3 flex-wrap">
              <img src={AppleStore} alt="" className="mx-0 w-[10rem]" />
              <img src={PlayStore} alt="" className="mx-0 w-[10rem]" />
            </div>
          </div>
          <div className="">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
