import React from "react";
import { ArrowRight } from "lucide-react";
import OrdersData from "../Orders/OrdersData.json";
import OrderRow from "../Orders/OrderRow";
import { NavLink } from "react-router-dom";

const Orders = () => {
  const header = {
    orderId: "Order Id",
    userId: "User Id",
    products: [
      {
        name: "Product",
      },
    ],
    status: {
      orderStatus: "Status",
    },
    totalAmount: "Amount",
    payment: {
      method: "Method",
    },
    shipping: {
      city: "Address",
      country: "",
    },
    user: {
      firstName: "User",
      lastName: "",
    },
  };
  const slicedOrders = OrdersData.slice(1, 10);
  return (
    <div className="blur-bg w-full input-section rounded-xl my-5">
      <div className=" mb-2 text-3xl font-semibold w-full flex justify-between">
        <h2>Today's Orders</h2>
        <NavLink
          to="/orders"
          className="text-lg flex items-center group hover:scale-[1.02] hover:text-neutral-300 transition duration-300 ease-in-out gap-2"
        >
          {" "}
          Last Months Orders
          <div className="group-hover:translate-x-1.5 transition duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </NavLink>
      </div>
      <ul className="overflow-x-auto w-fit min-w-full  scrollbar-hidden">
        <li className="text-2xl md:text-3xl font-semibold primary-bg rounded-t-2xl">
          {" "}
          <OrderRow order={header} />
        </li>
        {slicedOrders.map((order, index) => (
          <li key={index}>{<OrderRow order={order} />}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
