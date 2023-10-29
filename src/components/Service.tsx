import React from "react";
import { GiCookingPot } from "react-icons/gi";
import { FaFirstOrderAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Online Ordering",
      icon: FaFirstOrderAlt,
      text: "A user can order her food in our website and if want he can clear payment in online and also we provide cash on delivery",
    },
    {
      id: 2,
      name: "Delivery in Thirty Minutes",
      icon: TbTruckDelivery,
      text: "A user can order her food in our website and if want he can clear payment in online and also we provide cash on delivery",
    },
    {
      id: 3,
      name: "Hunting Pizza",
      icon: GiCookingPot,
      text: "A user can order her food in our website and if want he can clear payment in online and also we provide cash on delivery",
    },
  ];
  return (
    <section className="mb-8 mt-14">
      <h1 className="mt-12 mb-8 font-bold text-center font-primary text-[2rem] text-secondary-500">
        Our Services
      </h1>
      <div className="grid grid-cols-1 gap-8 ml-10 mr-8 lg:ml-8 lg:mr-8 lg:grid-cols-3">
        {services?.map((service) => (
          <div
            service={service}
            key={service?.id}
            className="p-3 text-center shadow shadow-primary-500"
          >
            <div className="flex justify-center">
              <h1 className="text-secondary-500 text-[6rem]">
                {" "}
                {<service.icon />}
              </h1>
            </div>
            <h1 className="mt-3 text-ternary-500 text-[1.5rem] font-bold">
              {service?.name}
            </h1>
            <h1 className="mt-4 text-white text-[18px] pb-6">
              {service?.text}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
