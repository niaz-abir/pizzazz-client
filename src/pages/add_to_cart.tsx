import { useCart } from "@/contexts/cartContext";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import { useAuth } from "@/contexts/auth-context";
import axios from "axios";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaFirstOrderAlt } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillIdcard } from "react-icons/ai";
import { FaIdeal } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";

const AddToCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const { cart, removeFromCart } = useCart();
  const { user } = useAuth();

  const remove = () => {
    toast.success("deleted order");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/food");
  };
  const totalPrice = cart?.reduce((sum, product) => sum + product.price, 0);

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const address = event.target.address.value;
    const mobile = event.target.mobile?.value;

    const orderDetails = {
      email: user?.email,
      address,
      mobile,
      amount: totalPrice,
      date: new Date(),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/order/",
        orderDetails
      );
      //  if (response?.acknowledged) {
      //    toast.success("booking successfully");
      //    navigate("/book");
      //  }

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-72">
      <div className="flex flex-col max-w-3xl p-6 ml-1 space-y-4 text-white lg:ml-8 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-center">
          <h2 className="text-xl gap-4 flex justify-center  font-semibold font-primary text-ternary-500 text-[35px]">
            Your Checkout cart
          </h2>
          <MdOutlineShoppingCartCheckout className="text-secondary-500 text-[30px]"></MdOutlineShoppingCartCheckout>
        </div>
        <hr className="flex w-56 ml-20" style={{ borderColor: "red" }}></hr>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart?.map((singleCart) => (
            <div key={singleCart?._id} singleCart={singleCart}>
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <Image
                    className="flex-shrink-0 object-cover rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={singleCart?.image}
                    alt=""
                    height={600}
                    width={600}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold font-primary leadi sm:pr-8">
                          {singleCart?.name}
                        </h3>
                        <p className="text-sm dark:text-gray-400">
                          {singleCart?.type}
                        </p>
                        <p className="block text-lg font-semibold lg:hidden">
                          {singleCart?.price}€
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="hidden text-lg font-semibold lg:block">
                          {singleCart?.price}€
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-4 py-2 pl-0 space-x-1 "
                      >
                        <RiDeleteBin5Fill className="text-[16px] text-ternary-500"></RiDeleteBin5Fill>
                        <span
                          className="text-[16px] text-ternary-500 font-bold font-primary"
                          onClick={() => removeFromCart(singleCart?._id)}
                        >
                          Remove
                        </span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span className="hidden lg:block">
                          Add to favorites
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p className="text-[25px]">
            Total amount:
            <span className="font-semibold"> {totalPrice}€</span>
          </p>
          <p className="text-sm">Not including taxes and shipping costs</p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link href="food">
            <button
              type="button"
              className="px-8 py-4 border rounded-md dark:border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
          </Link>

          {/* checkout button  */}
          <>
            <button
              className="p-4 font-bold text-black bg-green-500 rounded-md btn "
              onClick={showModal}
            >
              Continue to checkout
            </button>
            <Modal
              open={isModalOpen}
              // onOk={handleOk}
              onCancel={handleCancel}
              className="bg-green-600"
            >
              <div className="flex items-center gap-4">
                <FaFirstOrderAlt className="text-[20px] text-ternary-500"></FaFirstOrderAlt>
                <h1 className="text-[25px] font-bold font-primary text-secondary-500">
                  Your Order
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="mr-4 mt-4 font-primary text-[20px]  font-bold">
                  Total Price: {totalPrice}€
                </label>
                <div>
                  <label className="mr-4 mt-6 front-primary font-bold text-[15px]">
                    Your Address
                  </label>
                  <Space direction="horizontal">
                    <Input.Password
                      placeholder="Your Address"
                      visibilityToggle={{
                        visible: passwordVisible,
                        onVisibleChange: setPasswordVisible,
                      }}
                      name="address"
                    />
                  </Space>
                </div>
                <div>
                  <label className="mr-4  front-primary font-bold  text-[15px]">
                    Your Mobile
                  </label>

                  <Space className="mt-4" direction="horizontal">
                    <Input.Password
                      placeholder="Mobile Number"
                      visibilityToggle={{
                        visible: passwordVisible,
                        onVisibleChange: setPasswordVisible,
                      }}
                      name="mobile"
                    />
                    {/* <Button
                  style={{ width: 80 }}
                  onClick={() => setPasswordVisible((prevState) => !prevState)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </Button> */}
                  </Space>
                </div>
                <div className="flex justify-start mt-4 ">
                  <button
                    className="w-56 px-4 py-2 text-white rounded-sm bg-ternary-500 font-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </>
        </div>
      </div>

      {/* payment section start here */}
      <div className="mt-14 ml-14 lg:ml-0">
        <div className="flex flex-col">
          {/* first row */}
          <div className="flex gap-1">
            <div className="px-10 py-3 font-bold font-primary bg-ternary-500">
              <AiFillIdcard className="text-white text-[20px]"></AiFillIdcard>
              <h1>Card</h1>
            </div>
            <div className="px-10 py-3 font-bold text-white bg-primary-600 font-primary">
              <FaFirstOrderAlt className=" text-sky-600 text-[20px]"></FaFirstOrderAlt>
              <h1>Ideal</h1>
            </div>
            <div className="px-10 py-3 font-bold text-white bg bg-primary-600 font-primary">
              <RiBankLine className="text-ternary-500 text-[20px]"></RiBankLine>
              <h1>Bancontact</h1>
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-col mt-6 ">
            <label className="text-white font-bold text-[20px] font-primary">
              Card Number
            </label>
            <input
              className="px-10 py-3 bg-primary-600 "
              placeholder="93892828"
            ></input>
          </div>
          {/* third row */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col mt-6 ">
              <label className="text-white font-bold text-[20px] font-primary">
                Expiration
              </label>
              <input
                className="px-6 py-3 lg:px-8 bg-primary-600"
                placeholder="93892828"
                type="date"
              ></input>
            </div>
            <div className="flex flex-col mt-6 ">
              <label className="text-white font-bold text-[20px] font-primary">
                Security Code
              </label>
              <input className="px-6 py-3 lg:px-8 bg-primary-600"></input>
            </div>
          </div>
          {/* button */}
          <div className="mt-4">
            <button className="w-full px-8 py-3 text-white font-bold text-[20px] bg-ternary-500 ">
              pay$ {totalPrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
