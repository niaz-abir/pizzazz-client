import React from "react";
import image1 from "../assets/banner-5.png";
import image2 from "../assets/menu (1).png";
import image3 from "../assets/menu (2).png";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";

const Menu = () => {
  const menus = [
    {
      id: 1,
      name: "Fresh pizza",
      image: image1,
      text: "People wants that they can take it",
    },
    {
      id: 1,
      name: "Dashing dessert",
      image: image2,
      text: "People wants that they can take it",
    },
    {
      id: 1,
      name: "Cheer drinks",
      image: image3,
      text: "People wants that they can take it",
    },
  ];
  return (
    <div className="mt-8 mb-8">
      <h1 className="mb-8 ml-4 font-primary text-[2rem] font-bold text-center mt-14 text-secondary-500 lg:ml-8">
        Our Delivery Product
      </h1>
      <div className="grid grid-cols-1 gap-8 ml-12 mr-2 lg:ml-8 lg:grid-cols-3">
        {menus?.map((menu) => (
          <div menu={menu} key={menu?.id}>
            <div className="w-full max-w-xs p-4 overflow-hidden border-b-2 border-ternary-500">
              <Image
                height={500}
                width={500}
                className="object-cover w-full h-56"
                src={menu?.image}
                alt="avatar"
              />

              <div className="py-5 text-center">
                <p
                  className="block text-xl font-bold text-[2.2rem] text-secondary-500"
                  role="link"
                >
                  {menu?.name}
                </p>
                <div className="flex justify-center">
                  <MdStarRate className="text-ternary-500 text-[20px]"></MdStarRate>
                  <MdStarRate className="text-ternary-500 text-[20px]"></MdStarRate>
                  <MdStarRate className="text-ternary-500 text-[20px]"></MdStarRate>
                  <MdStarRate className="text-ternary-500 text-[20px]"></MdStarRate>
                  <MdStarRate className="text-ternary-500 text-[20px]"></MdStarRate>
                </div>

                <p className="text-[18px]  text-white pt-2">{menu?.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
