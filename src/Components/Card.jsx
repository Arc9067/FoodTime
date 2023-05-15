import React from "react";
import data from "../data";

const Card = () => {
  return (
    <section className="py-[50px] bg-white">
      <div className="container">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
          {data.map((ele, index) => {
            const { img, text, header, bg } = ele;
            return (
              <div
                className={`cd py-8 px-4 gap-6 flex transition hover:bg-[#396C03] hover:bg-opacity-5  flex-col items-start ${bg} bg-opacity-5`}
                key={index}
              >
                <img src={img} alt="ff" className="mx-0 w-[3rem]" />
                <h2 className="font-medium text-para text-3xl">{header}</h2>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Card;
