import React, { useEffect } from "react";
import chefsImage1 from "../assets/chefs (1).png";
import chefsImage2 from "../assets/chefs (2).png";
import chefsImage3 from "../assets/chefs4.png";

import Image from "next/image";

const Chefs = () => {
  const chefs = [
    {
      id: 1,
      name: "Akhil Khan",
      image: chefsImage1,
      experience: "3years",
    },
    {
      id: 2,
      name: "Mahesh kumar",
      image: chefsImage2,
      experience: "1.5years",
    },
    {
      id: 3,
      name: "Tarek Rizwan",
      image: chefsImage3,
      experience: "2years",
    },
  ];

  return (
    <section className="mb-14">
      <h1 className="text-secondary-600 font-primary  mb-14 text-center  ml-4 lg:ml-8 font-bold text-[30px]">
        OUR CHEF
      </h1>
      <div className="grid grid-cols-1 mt-8 mb-6 ml-10 lg:ml-14 lg:grid-cols-3">
        {chefs?.map((chef) => (
          <div chef={chef} key={chef?.id}>
            <div className="w-full h-[300px] p-14 max-w-xs overflow-hidden rounded-lg shadow-lg shadow-primary-600">
              <Image
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="3000"
                src={chef?.image}
                alt=""
                width={300}
                height={300}
              ></Image>

              <div className="py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-ternary-600 "
                  role="link"
                >
                  {chef?.name}
                </a>
                <span className="text-sm font-bold text-secondary-600">
                  Experience in {chef?.experience}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
