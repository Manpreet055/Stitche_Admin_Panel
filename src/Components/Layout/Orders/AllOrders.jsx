import React from "react";
import Pagination from "../../../ui/Pagination";
import OrderRow from "./OrderRow";
import { container, item } from "../../../Animations/ListStagger";
import { motion } from "framer-motion";
import OrdersData from "./OrdersData.json";

const AllOrders = () => {
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
        <OrderRow order={header} />
      </li>
      <Pagination data={OrdersData}>
        {OrdersData.map((order, index) => (
          <motion.li variants={item} key={index}>
            <OrderRow order={order} />
          </motion.li>
        ))}
      </Pagination>
    </motion.ul>
  );
};

export default AllOrders;
