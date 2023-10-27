import React from "react";
import image1 from "../assets/fans (1).jpg";
import image2 from "../assets/fans (2).jpg";
import image3 from "../assets/fans (3).jpg";
import image4 from "../assets/fans (4).jpg";
import image5 from "../assets/fans (5).jpg";
import image6 from "../assets/fans (6).jpg";
import image7 from "../assets/fans (7).jpg";
import image8 from "../assets/fans (8).jpg";
import image9 from "../assets/fans (9).jpg";

import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <h1 className="mt-6 mb-6 font-bold text-center text-secondary-500 text-[2rem]">
          Our Fans Box
        </h1>
        {/* <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            src={image1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow shadow-primary-500 min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image2}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image3}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image4}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image5}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image6}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image8}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image7}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image9}
          />
          
        </div> */}
      </section>
    </div>
  );
};

export default Gallery;
