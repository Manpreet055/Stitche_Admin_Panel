import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrdersData from "./OrdersData.json";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const order = OrdersData.find((o) => String(id) === String(o.orderId));

  let totalCost = 0;
  const {
    orderId,
    userId,
    user,
    products,
    totalAmount,
    discount,
    payment,
    shipping,
    status,
    createdAt,
  } = order;
  const { firstName, lastName, email, phone, address } = user;
  const { trackingId, city, country } = shipping;
  const { orderStatus } = status;
  const { method, transactionId } = payment;

  products.forEach((p) => {
    totalCost += p.price;
  });

  const totalPriceAfterDiscount = totalCost - (discount * totalCost) / 100;

  return (
    <div className="h-screen md:px-12 p-3 w-full flex flex-col gap-10">
      <div className="flex justify-start">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="flex justify-between w-full ">
        <h2 className="text-3xl flex gap-3 flex-col">
          Order #{orderId}{" "}
          <span className="text-lg text-neutral-300">
            Placed on: {createdAt}
          </span>{" "}
        </h2>
        <div className={``}>{orderStatus}</div>
      </div>

      <div className="w-full flex gap-y-5 justify-evenly">
        {/* Customer Info */}
        <div className="flex flex-col text-lg gap-2 w-full max-w-xl ">
          <h3 className="title">Customer Info</h3>
          <div className="text-lg font-medium">
            Name : {firstName} {lastName}
          </div>
          <div className="text-lg font-medium">Email : {email}</div>
          <div className="text-lg font-medium">Phone : {phone}</div>
          <div className="text-lg font-medium">
            Address : {city}, {country}
          </div>
        </div>

        {/* Payement Info */}
        <div className="flex flex-col text-lg gap-2 w-full max-w-xl ">
          <h3 className="title">Payment Info</h3>
          <div className="text-lg font-medium"> Payment Method : {method}</div>
          <div className="text-lg font-medium">
            Transaction Id : {transactionId}
          </div>
          <div className="text-lg font-medium">Status : {payment.status}</div>
        </div>

        {/* Shipping Info */}
        <div className="flex flex-col text-lg gap-2 w-full max-w-xl ">
          <h3 className="title">Payment Info</h3>
          <div className="text-lg font-medium">Tracking Id : {trackingId}</div>
          <div className="text-lg font-medium">City : {city}</div>
          <div className="text-lg font-medium">Country : {country}</div>
        </div>
      </div>
      {/* Product Details */}
      <div className="flex flex-col">
        <h3 className="title">Products Orderded</h3>
        <ul className="text-lg flex flex-col gap-3">
          <li className=" text-xl border border-gray-400 rounded-xl py-4 mb-5 font-semibold grid grid-cols-5 w-full place-items-center">
            <div>Images</div>
            <div>Product Id</div>
            <div>Product Name</div>
            <div>Price</div>
            <div>Quantity</div>
          </li>
          {products.map((product, index) => (
            <li
              key={index}
              className="grid grid-cols-5 w-full place-items-center"
            >
              <img src={product.image} alt="" className="h-12" />
              <div>{product.productId}</div>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.quantity}</div>
            </li>
          ))}
        </ul>
        <hr className=" md:mx-10 text-gray-300 my-6" />
        <div className="flex justify-between md:px-10">
          <h6 className="text-xl font-semibold">Sub Total </h6>
          <div>{totalPriceAfterDiscount.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
