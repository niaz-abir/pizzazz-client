import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import FoodCard from "@/components/foodCard";
import { FcClearFilters } from "react-icons/fc";
import { useQuery } from "@tanstack/react-query";

const Food = () => {
  const [isFiltering, setIsFiltering] = useState(false);

  const [packageFilter, setPackageFilter] = useState();

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [allData, setAllData] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = allData?.filter((item) =>
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/api/products");
      const products = await response.json();
      return products;
    },
  });

  console.log({ products });

  // useEffect(() => {
  //   const filteredData = products.filter((item) => item?.type === checkbox);
  //   setPackageFilter(filteredData);
  // }, []);

  return (
    <section>
      <div className="grid grid-cols-10 ml-8 mr-8 mt-14">
        <form
          className={`w-full mt-20 ml-2 transition-all duration-300 overflow-hidden text-white col-span-full md:col-span-3 md:block lg:ml-4 md:h-auto ${
            isFiltering ? "h-56" : "h-16"
          }`}
        >
          {/* search input */}
          <div className="relative flex items-center w-full gap-x-2">
            <input
              type="text"
              className="px-4 py-2 pl-10 text-black bg-blue-200 border rounded-md w-52 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-8 h-8 text-ternary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-5.2-5.2"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <button
              type="button"
              onClick={() => setIsFiltering((prev) => !prev)}
              className="md:hidden"
            >
              <FcClearFilters className="text-3xl" />
            </button>
          </div>

          {/* end search Input */}
          {/* start checkbox */}

          <div>
            <div className="flex mt-4 text-blue-200 text-[20px]">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
              <h1 className="-ml-14 font-primary">Family Pack</h1>
              <hr className="w-6 mt-8"></hr>
            </div>
            <div className="flex mt-2 text-blue-200 text-[20px]">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
              <h1 className="-ml-14 font-primary">with desert</h1>
              <hr className="w-6 mt-8"></hr>
            </div>
            <div className="flex mt-2 text-blue-200 text-[20px]">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
              <h1 className="-ml-14 font-primary">with cold drinks</h1>
              <hr className="w-6 mt-8"></hr>
            </div>
            <div className="flex mt-2 text-blue-200 text-[20px]">
              <Checkbox onChange={onChange}>Checkbox</Checkbox>
              <h1 className="-ml-14 font-primary">package offer</h1>
              <hr className="w-6 mt-8"></hr>
            </div>
          </div>
        </form>
        <div className="text-white col-span-full md:col-span-7">
          <div className="grid grid-cols-1 gap-6 mb-2 md:grid-cols-3">
            {products?.map((data) => (
              <FoodCard data={data} key={data?.id}></FoodCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
