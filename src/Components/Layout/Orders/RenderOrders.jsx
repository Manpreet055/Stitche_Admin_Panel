import React from "react";
import Pagination from "../../../Utilities/Pagination";
import OrdersListComp from "./OrdersListComp";
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
  };
  return (
    <ul className="flex flex-col w-full h-screen pb-56 overflow-y-scroll scrollbar-hidden">
      <li className="text-2xl font-semibold">
        {" "}
        <OrdersListComp order={header}></OrdersListComp>
      </li>
      <Pagination data={OrdersData}>
        {OrdersData.map((order, index) => (
          <li key={index}>
            <OrdersListComp order={order}></OrdersListComp>
          </li>
        ))}
      </Pagination>
    </ul>
  );
};

export default RenderOrders;
