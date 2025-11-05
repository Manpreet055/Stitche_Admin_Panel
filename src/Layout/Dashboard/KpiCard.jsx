import React from "react";
import CountUp from "react-countup";

const KpiCard = ({ cash = false, icon, number, title }) => {
  return (
    <div className=" bg-rose-100/10 backdrop-blur-2xl p-5 gap-3 transition duration-300 ease-in-out hover:shadow-md flex flex-col rounded-lg w-full">
      <div className="flex w-full items-center gap-4 ">
        <div className="w-fit p-3  rounded-full primary-bg">{icon}</div>
        <div className="text-2xl lg:text-3xl font-medium">
          {cash && "$"}
          <CountUp end={number} />
        </div>
      </div>
      <div className="pl-16  font-medium text-nowrap md:text-xl">{title}</div>
    </div>
  );
};

export default KpiCard;
