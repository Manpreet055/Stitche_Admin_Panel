import React from "react";
import Pagination from "../../../Utilities/Pagination";
import OrdersListComp from "./OrdersListComp";
import { container, item } from "../../../Animations/ListStagger";
import { motion } from "framer-motion";
import OrdersData from "./OrdersData.json";

const RenderOrders = () => {
  // <li>#{orderId}</li>
  //   <li>{userId}</li>
  //   <li>{products.at(-1).name}</li>
  //   <li>{status.orderStatus}</li>
  //   <li>{totalAmount}</li>
  //   <li>{payment.method}</li>
  //   <li>{shipping.city}, {shipping.country}</li>
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
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full h-screen pb-56 pt-10 overflow-y-scroll scrollbar-hidden"
    >
      <li className="text-2xl md:text-3xl font-semibold primary-bg rounded-t-2xl">
        {" "}
        <OrdersListComp order={header}></OrdersListComp>
      </li>
      <Pagination data={OrdersData}>
        {OrdersData.map((order, index) => (
          <motion.li variants={item} key={index}>
            <OrdersListComp order={order}></OrdersListComp>
          </motion.li>
        ))}
      </Pagination>
    </motion.ul>
  );
};

export default RenderOrders;
