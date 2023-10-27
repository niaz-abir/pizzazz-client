import Image from "next/image";
import React from "react";

const Prepare = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 ml-6 lg:ml-14 lg:flex-row gap-14">
        <div className="w-full ml-6 lg:w-1/2">
          <h1 className="text-white text-[2.2rem] font-bold font-primary ">
            How Do we Prepare <span className="text-secondary-600">pizza?</span>
          </h1>
          <p className="mt-4 text-white text-[22px]">
            We always try to make good pizza for our customer .There are lot
            people who check our product and constain support us .we believe in
            customer and we always check review from customer.
          </p>
          <p className="mt-4 text-white text-[20px]">
            There are 1000 people works with us
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            height={400}
            width={400}
            src="/assets/banner-5.png"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
