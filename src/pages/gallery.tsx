import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/fans (1).jpg";
import image2 from "../assets/fans (2).jpg";
import image3 from "../assets/fans (3).jpg";
import image4 from "../assets/fans (4).jpg";
import image5 from "../assets/fans (5).jpg";
import image6 from "../assets/fans (6).jpg";
import image7 from "../assets/fans (7).jpg";
import image8 from "../assets/fans (8).jpg";
import image9 from "../assets/fans (9).jpg";
import image10 from "../assets/l (1).jpeg";
import image11 from "../assets/l (2).jpeg";
import image12 from "../assets/l (3).jpeg";
import image13 from "../assets/l (4).jpeg";
import image14 from "../assets/l (7).jpeg";
import image15 from "../assets/l (10).jpg";
import image16 from "../assets/l (11).jpg";
import image17 from "../assets/l(13).jpg";
import image18 from "../assets/l(5).jpeg";
import Image from "next/image";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <h1 className="mt-6 mb-6 font-bold text-center  font-primary text-secondary-500 text-[2rem]">
          Captured Moments
        </h1>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4"
        >
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
          {/* <Image
              src="https://source.unsplash.com/random/302x302/"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            /> */}
        </div>
      </section>
      <section>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4"
        >
          <Image
            src={image10}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow shadow-primary-500 min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image11}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image12}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image13}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image14}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image15}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image16}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image17}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image18}
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
