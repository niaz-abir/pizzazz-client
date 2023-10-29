import React from "react";
import CountUp from "react-countup";
import image from "../assets/lip-jVcha8wHtg8-unsplash (1).jpg";
import Image from "next/image";

const Counting = () => {
  return (
    <div className="mt-8 mb-8 text-white">
      <h1 className="text-center text-[2rem] font-primary mt-14 mb-8 text-secondary-500 font-bold ">
        Our Members{" "}
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly">
        <div>
          <Image
            className="rounded-sm"
            src={image}
            alt=""
            height={500}
            width={500}
          ></Image>
        </div>
        <div className="grid grid-cols-2 pl-4 pr-4 gap-14">
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500">
            <h1 className="text-2xl font-bold text-secondary-500">Stafe</h1>
            <div style={{ fontSize: "70px" }}>
              <CountUp
                className="text-green-500"
                start={0}
                end={21}
                duration={8}
              />
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500">
            <h1 className="text-2xl font-bold text-secondary-500">Branch</h1>
            <div style={{ fontSize: "70px" }}>
              <CountUp
                className="text-green-500"
                start={0}
                end={3}
                duration={8}
              />
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500 ">
            <h1 className="text-2xl font-bold text-secondary-500">Members</h1>
            <div style={{ fontSize: "70px" }}>
              <CountUp
                className="text-green-500"
                start={0}
                end={12}
                duration={8}
              />
            </div>
          </div>
          <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500 ">
            <h1 className="text-2xl font-bold text-secondary-500">partner</h1>
            <div style={{ fontSize: "70px" }}>
              <CountUp
                className="text-green-500"
                start={0}
                end={8}
                duration={8}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
