import { useCart } from "@/contexts/cartContext";
import Image from "next/image";
import React from "react";
import { MdFastfood } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";
import toast, { Toast } from "react-hot-toast";

const FoodCard = ({ data }) => {
  const { addToCart } = useCart();

  const { _id, name, image, price, type, discount } = data;

  const handleWish = () => {
    addToCart(data);
    toast.success("wish Added Successfully");
  };

  return (
    <div>
      <div className="w-full max-w-xs p-4 overflow-hidden rounded-lg ">
        <Image
          height={200}
          width={400}
          alt=""
          className="object-cover w-full p-4 rounded-full shadow shadow-md h-60 shadow-primary-800"
          src={image}
        />

        <div className="flex justify-center mt-4 shadow shadow-md shadow-primary-800 ">
          <div className="pt-5 pb-5 text-center">
            <div className="flex gap-4 text-[20px] items-center">
              <MdFastfood className="text-ternary-600 text-[30px]"></MdFastfood>
              <h1 className="block font-bold text-secondary-600 dark:text-white">
                {name}
              </h1>
            </div>
            <div className="flex gap-4 text-[20px] items-center pt-2">
              <h1>Price:</h1>
              <div className="flex items-center">
                <MdAttachMoney className="text-[20px] text-ternary-600"></MdAttachMoney>
                <h1 className="block font-bold text-secondary-600 dark:text-white">
                  {price}
                </h1>
              </div>
            </div>
            <div className="flex gap-4 text-[20px] pt-2 items-center">
              <h1>Discount:</h1>
              <div className="flex items-center ">
                <MdOutlineDiscount className="text-[20px] text-ternary-600"></MdOutlineDiscount>
                <h1 className="block font-bold text-secondary-600 dark:text-white">
                  {discount}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <button className="text-white">AddTO Cart</button>
        
      </div> */}

      <div className="flex justify-center mt-4">
        <button
          onClick={() => addToCart(data)}
          className="relative px-5 py-2 font-bold text-black hover:text-white group"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-secondary-500 group-hover:bg-ternary-500 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-ternary-500 group-hover:bg-secondary-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-ternary-500 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-ternary-500 -rotate-12"></span>
          <span className="relative" onClick={handleWish}>
            Order Now
          </span>
        </button>
        {/* <a
          href="#_"
          className="relative px-6 py-3 font-bold text-white rounded-lg group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-secondary-600 ease opacity-30 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-ternary-600 ease opacity-40 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Order Now</span>
        </a> */}
      </div>
    </div>
  );
};

export default FoodCard;
