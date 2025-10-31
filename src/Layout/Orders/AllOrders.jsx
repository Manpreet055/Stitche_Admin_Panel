import React, { useEffect, useState } from "react";
import Pagination from "../../ui/Pagination";
import OrderRow from "./OrderRow";
import { container, item } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
import {fetchOrders} from "../../services/orders"

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      setOrders(await fetchOrders());
    };
    getOrders();
  }, []);
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
    <div className="w-full overflow-x-auto scrollbar-hidden ">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col min-w-[1350px] h-screen pt-10 overflow-y-auto scrollbar-hidden"
      >
        <li className="text-2xl md:text-3xl w-full font-semibold primary-bg rounded-t-2xl">
          {" "}
          <OrderRow order={header} />
        </li>
        <Pagination data={orders}>
          {orders.map((order, index) => (
            <motion.li variants={item} key={index}>
              <OrderRow order={order} />
            </motion.li>
          ))}
        </Pagination>
      </motion.ul>
    </div>
  );
};

export default AllOrders;
