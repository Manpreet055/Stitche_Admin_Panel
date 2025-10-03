import React from "react";

const OrdersListComp = ({ order }) => {
  // const order = {
  //   orderId: "ORD-1079",
  //   userId: "USER-25",
  //   products: [
  //     {
  //       productId: "PROD-104",
  //       name: "Sneakers",
  //       price: 79.99,
  //       quantity: 1,
  //       image: "https://picsum.photos/id/104/300/300",
  //     },
  //     {
  //       productId: "PROD-105",
  //       name: "Leather Jacket",
  //       price: 149.99,
  //       quantity: 1,
  //       image: "https://picsum.photos/id/105/300/300",
  //     },
  //   ],
  //   totalAmount: 214.98,
  //   discount: 15,
  //   payment: {
  //     method: "cod",
  //     transactionId: "TXN-674232",
  //     status: "refunded",
  //   },
  //   shipping: {
  //     address: "12480 Savannah Common",
  //     city: "Brownland",
  //     postalCode: "52496",
  //     country: "Taiwan",
  //     phone: "226-226-4231",
  //     trackingId: "TRK-363555",
  //   },
  //   status: {
  //     orderStatus: "cancelled",
  //     updatedAt: 1759490009973,
  //   },
  //   createdAt: 1759480562908,
  //   updatedAt: 1759490009973,
  // };

  const { orderId, userId, products, totalAmount, payment, shipping, status } =
    order;
  const { orderStatus } = status;
  const { method } = payment;
  const { city, country } = shipping;
  return (
    <ul
      className={`h-[70px] grid grid-cols-[200px_200px_250px_200px_200px_100px_1fr] place-items-center text-lg border-b border-neutral-600 `}
    >
      <li>{orderId}</li>
      <li>{userId}</li>
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
