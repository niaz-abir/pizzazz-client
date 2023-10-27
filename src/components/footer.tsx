import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <footer className="text-white shadow shadow-primary-800 dark:text-gray-50 mt-14">
        <div className="container flex flex-col p-4 mx-auto divide-gray-400 md:p-8 lg:flex-row">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <li className="text-[20px] text-ternary-500">Shop</li>
            <li className="text-[20px] text-ternary-500">About</li>
            <li className="text-[20px] text-ternary-500">Pricing</li>
            <li className="text-[20px] text-ternary-500">Contact</li>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
              >
                <FaInstagram className="text-[35px] text-pink-500"></FaInstagram>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Pinterest"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
              >
                <FaTelegram className="text-[32px] text-sky-600 "></FaTelegram>
              </a>

              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
              >
                <BsWhatsapp className="text-[32px]  text-green-500 "></BsWhatsapp>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Gmail"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
              >
                <ImFacebook2 className="text-[32px]  text-blue-700"></ImFacebook2>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
