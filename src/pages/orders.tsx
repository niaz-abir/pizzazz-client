import { useAuth } from "@/contexts/auth-context";
import React, { useEffect, useState } from "react";
import * as dateFns from "date-fns"; // Import date-fns
import Link from "next/link";

const Orders = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState();
  useEffect(() => {
    fetch(`https://sercer-pizza.vercel.app/api/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  //  const res = await fetch(`http://localhost:8080/api/cart/${user?.email}`);
  //  const cart = await res.json();
  return (
    <div className="h-[100vh]">
      <section className="py-6 text-white dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto sm:p-10">
          <div className="mb-12 space-y-4 text-center">
            <h1 className="text-4xl font-bold text-secondary-500 font-primary">
              Show Your Order
            </h1>
            <p className="px-4 sm:px-8 lg:px-24">
              You can Show your All order from here!
            </p>
            <div>
              <button className="px-4 py-1 font-semibold border rounded-l-lg dark:bg-violet-400 dark:border-violet-400 dark:text-gray-900">
                Monthly
              </button>
              <button className="px-4 py-1 border rounded-r-lg dark:border-violet-400">
                Annually
              </button>
            </div>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
            {order?.map((singleOrder) => (
              <div key={singleOrder?.id} singleOrder={singleOrder}>
                <div className="flex flex-col overflow-hidden shadow shadow-primary-500 rounded-m">
                  <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:bg-gray-800">
                    <p className="text-lg text-25px] font-bold">Your Order</p>
                    <p className="text-5xl font-bold">
                      {singleOrder?.amount}€{" "}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
                    <ul className="self-stretch flex-1 space-y-2">
                      <li className="flex justify-center space-x-2 items-center font-semibold text-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2 text-secondary-500 dark:text-violet-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        Date :{" "}
                        {dateFns.format(
                          new Date(singleOrder?.date),
                          "dd MMMM yyyy",
                          { locale: dateFns.en }
                        )}
                      </li>
                      <li className="flex justify-center space-x-2 items-center font-semibold text-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2 text-secondary-500 dark:text-violet-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        <span>Address : {singleOrder?.address}</span>
                      </li>
                      <li className="flex justify-center space-x-2 items-center font-semibold text-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2 text-secondary-500 dark:text-violet-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          ></path>
                        </svg>
                        <span>Mobile :{singleOrder?.mobile}</span>
                      </li>
                    </ul>
                    <Link href="food">
                      <button className="px-8 py-3 mt-6  text-black font-bold text-[20px] bg-ternary-500 ">
                        Move To
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orders;
