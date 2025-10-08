import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchOrder from "../../../Utilities/Orders/FetchOrder";
import CapitalizeFirstLetter from "../../../Utilities/CapitalizeLetter";
const OrdersListComp = ({ order }) => {
  const [loadingState, setLoadingState] = useState(false);

  const { orderId, products, totalAmount, payment, shipping, status, user } =
    order;
  const { orderStatus } = status;
  const { method } = payment;
  const { city, country } = shipping;
  const { firstName, lastName } = user;
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(`/order/${orderId}`);
  };

  const statusColor = {
    cancelled: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800",
    delivered: "bg-green-100 text-green-800",
    confirmed: "bg-indigo-100 text-indigo-800",
    shipped: "bg-purple-100 text-purple-800",
  };

  return (
    <ul
      onClick={async () => {
        if (!loadingState) {
          await fetchOrder(orderId, setLoadingState);
          goToProduct();
        }
      }}
      className={`h-[70px]  grid grid-cols-[200px_200px_250px_200px_200px_100px_1fr] place-items-center text-lg border-b ${
        loadingState ? "cursor-progress" : "cursor-pointer"
      } border-gray-300 `}
    >
      <li>{orderId}</li>
      <li>
        {firstName} {lastName}
      </li>
      <li>{products.at(-1).name}</li>
      <li
        className={`${
          statusColor[orderStatus.toLowerCase()]
        } p-2 rounded-2xl w-[60%] text-center`}
      >
        {CapitalizeFirstLetter(orderStatus)}
      </li>
      <li>{totalAmount}</li>
      <li>{method}</li>
      <li>
        {city} {country}
      </li>
    </ul>
  );
};

export default OrdersListComp;
