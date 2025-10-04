import React from "react";
import { useNavigate } from "react-router-dom";

const OrdersListComp = ({ order }) => {
  const { orderId, products, totalAmount, payment, shipping, status,user } =
  order;
  const { orderStatus } = status;
  const { method } = payment;
  const { city, country } = shipping;
  const { firstName,lastName } = user;
  const navigate = useNavigate();
  const goToProduct = () =>{
    navigate(`order/${orderId}`)
  }
  return (
    <ul
    onClick={goToProduct}
      className={`h-[70px] grid grid-cols-[200px_200px_250px_200px_200px_100px_1fr] place-items-center text-lg border-b border-neutral-600 `}
    >
      <li>{orderId}</li>
      <li>{firstName} {lastName}</li>
      <li>{products.at(-1).name}</li>
      <li>{orderStatus}</li>
      <li>{totalAmount}</li>
      <li>{method}</li>
      <li>
        {city} {country}
      </li>
    </ul>
  );
};

export default OrdersListComp;
