import { useAuth } from "@/contexts/auth-context";
import { auth } from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";
import { GiChiliPepper } from "react-icons/gi";
import { FaJenkins } from "react-icons/fa";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Menu } from "antd";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    signOut(auth)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const [selectedOption, setSelectedOption] = useState("");

  const items = [
    {
      key: "1",
      label: "Orders",
      href: "/orders", // Define the route you want to navigate to
    },
  ];
  const menu = (
    <Menu className="border border-black">
      {items.map((item) => (
        <Menu.Item
          key={item.key}
          onClick={() => handleMenuItemClick(item)}
          style={{
            backgroundColor: "black",
            color: "green",
            border: "none",
            marginRight: "5px",
          }}
        >
          <span className="font-bold bg-black" style={{ background: "black" }}>
            {item.label}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  );

  const router = useRouter();

  const handleMenuItemClick = (item) => {
    router.push(item.href);
  };

  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-20 shadow top bg-primary-950/60 backdrop-blur-xl text-primary-50 ">
      <div className="container px-6 py-2 mx-auto md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a href="#">
            <Link href="/" className="text-[35px] font-bold text-secondary-600">
              <div className="flex gap-0">
                <div className="flex items-center justify-center gap-0">
                  Pizz
                  <GiChiliPepper className="text-ternary-500"></GiChiliPepper>
                </div>
                <div>
                  <span> azz</span>
                </div>
              </div>
            </Link>
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto md:space-x-6`}
        >
          <div className="flex flex-col mt-4 text-lg md:flex-row md:mt-0 gap-x-3">
            <Link
              href="gallery"
              className="px-3.5 py-1 hover:bg-primary-900/80 hover:text-white transition-colors duration-300 font-medium capitalize rounded-md"
            >
              Gallery
            </Link>
            <Link
              href="about-us"
              className="px-3.5 py-1 hover:bg-primary-900/80 hover:text-white transition-colors duration-300 font-medium capitalize rounded-md"
            >
              AboutUs
            </Link>
            <Link
              href="food"
              className="px-3.5 py-1 hover:bg-primary-900/80 hover:text-white transition-colors duration-300 font-medium capitalize rounded-md"
            >
              Food
            </Link>
            <Link
              href="add_to_cart"
              className="px-3.5 py-1 hover:bg-primary-900/80 hover:text-white transition-colors duration-300 font-medium capitalize rounded-md"
            >
              cart
            </Link>

            {user?.email ? (
              <Link
                onClick={handleLogout}
                href="#"
                className="px-3.5 py-1 hover:bg-primary-900/80 hover:text-white transition-colors duration-300 font-medium capitalize rounded-md"
              >
                logout
              </Link>
            ) : (
              <Link
                onClick={handleLogout}
                href="login"
                className="px-3.5 py-1 hover:bg-primary-900/80 hover:text-white transition-colors duration-300 font-medium capitalize rounded-md"
              >
                Login
              </Link>
            )}
            {/*
             */}

            <Space direction="vertical">
              <Space wrap>
                <Dropdown overlay={menu} placement="bottomLeft">
                  <button className="mt-2 ml-1 text-2xl ">
                    <FaJenkins
                      className={`${styles?.icon} text-secondary-500`}
                    ></FaJenkins>
                    <hr
                      className="w-6 mt-2 "
                      style={{ borderColor: "green" }}
                    ></hr>
                  </button>
                </Dropdown>
              </Space>
            </Space>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
