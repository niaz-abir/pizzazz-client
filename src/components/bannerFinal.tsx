import Image from "next/image";
import React from "react";
import image1 from "../assets/banner-1.png";
import Link from "next/link";

const BannerFinal = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row justify-evenly">
      <div>
        <h1 className="pl-4 mt-20 font-serif text-4xl font-bold text-white capitalize lg:pl-2 lg:mt-4 lg:text-6xl opacity-90">
          It's not just<br className="hidden lg:block"></br> food, it's an
          <br className="hidden lg:block"></br>
          experience.
        </h1>
        <p className="pt-6 pl-4 text-white lg:pt-8 lg:pl-2">
          we are helping you get fresh and delicious food in few minutes by
          <br className="hidden lg:block"></br>
          using our nice <strong>web</strong> & <strong>app</strong>
        </p>
        <div className="space-x-2.5 pt-10 pl-4 lg:pl-2">
          <Link
            className="px-5 py-3 font-medium leading-none transition-colors border border-transparent rounded-sm shadow-sm hover:bg-secondary-600/90 bg-secondary-600"
            href="about-us"
          >
            About Us
          </Link>
          <Link
            className="px-5 py-3 font-medium leading-none transition-colors bg-transparent border rounded-sm shadow-sm hover:bg-primary-50 border-primary-50 text-primary-50 hover:text-primary-900"
            href="food"
          >
            Food
          </Link>
        </div>
      </div>
      <div className="pl-4 mt-8 lg:mt-0">
        <Image src={image1} alt="" height={400} width={400}></Image>
      </div>
    </div>
  );
};

export default BannerFinal;
