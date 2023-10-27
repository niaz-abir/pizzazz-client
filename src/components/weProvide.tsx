import Image from "next/image";
import React from "react";
import image1 from "../assets/delivery.png";
import { TiStopwatch } from "react-icons/ti";
import { FaCarSide } from "react-icons/fa";
import { GiSteelDoor } from "react-icons/gi";

const WeProvide = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mb-6 mt-28 lg:flex-row">
      <div>
        <Image
          className="p-4 shadow-md shadow-primary-500"
          src={image1}
          alt=""
          height={500}
          width={500}
        ></Image>
      </div>
      <div className="p-4 ml-3 text-white">
        <h1 className="text-secondary-600 text-[25px] font-bold pb-6">
          Your Favorite Pizza On Way
        </h1>
        <p className="text-[18px] pb-4 font-semibold">
          Here are first motivation is our customer review .We always
          <br /> provide a great customer which is help us very nicely .Thank
          you
        </p>
        <div className="flex gap-6 mt-3">
          <div>
            <TiStopwatch className="text-[3.5rem] text-blue-400 pb-2"></TiStopwatch>
            <h1 className="font-semibold">Delivery In</h1>
          </div>
          <div>
            <FaCarSide className="text-[3.5rem] text-green-400 pb-2"></FaCarSide>
            <h1 className="font-semibold">Free Shipping</h1>
          </div>
          <div>
            <GiSteelDoor className="text-[3.5rem] text-pink-400 pb-2"></GiSteelDoor>
            <h1 className="font-semibold">Delivery On</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeProvide;
