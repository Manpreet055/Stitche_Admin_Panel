import React from "react";
import orders from "../../../Utilities/OrdersData.js";
import ListComp from "./ListComp";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { container, item } from "../../../Animations/ListStagger.js";

const Orders = () => {
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
      <div className="overflow-x-scroll scrollbar-hidden">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          className="min-w-[800px]"
        >
          <ListComp
            orderId="Order ID"
            customer="Customer"
            product="Product"
            date="Date"
            amount="Amount"
            status="Status"
            headings={true}
          />
          {orders.map((order, index) => (
            <motion.li variants={item} key={index}>
              <ListComp
                orderId={order.orderId}
                customer={order.customer}
                product={order.product}
                date={order.date}
                amount={order.amount}
                status={order.status}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Orders;
