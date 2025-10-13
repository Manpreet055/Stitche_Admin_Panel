import React from "react";
import { ArrowRight } from "lucide-react";
import OrdersData from "../Orders/OrdersData.json";
import OrdersListComp from "../Orders/OrderRow";

const Orders = () => {
  const slicedOrders = OrdersData.slice(1, 10);
  return (
    <div className="blur-bg w-full input-section rounded-xl my-5">
      <div className=" mb-2 text-3xl font-semibold w-full flex justify-between">
        <h2>Today's Orders</h2>
        <div className="text-lg flex items-center group hover:scale-[1.02] hover:text-neutral-300 transition duration-300 ease-in-out gap-2">
          {" "}
          Last Months Orders
          <div className="group-hover:translate-x-1.5 transition duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </div>
      </div>
      <ul className="overflow-x-scroll scrollbar-hidden">
        {slicedOrders.map((order, index) => (
          <li key={index}>{<OrdersListComp order={order} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
