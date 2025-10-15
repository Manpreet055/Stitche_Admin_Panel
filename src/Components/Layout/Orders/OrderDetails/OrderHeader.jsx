import React from "react";
import CapitalizeFirstLetter from "../../../../Utilities/capitalizeLetter";
import BackButton from "../../../../ui/BackButton";
const OrderHeader = ({ orderId, createdAt, orderStatus }) => {
  const statusColor = {
    cancelled: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800",
    delivered: "bg-green-100 text-green-800",
    confirmed: "bg-indigo-100 text-indigo-800",
    shipped: "bg-purple-100 text-purple-800",
  };
  return (
    <>
      <BackButton />
      <div className="flex justify-between flex-wrap gap-y-6 w-full ">
        <h2 className="text-3xl flex gap-3 flex-col">
          Order #{orderId}{" "}
          <span className="text-lg text-neutral-500">
            Placed on: {createdAt}
          </span>{" "}
        </h2>
        <button
          className={`${
            statusColor[orderStatus.toLowerCase()]
          } py-4 px-6 h-fit rounded-2xl`}
        >
          {CapitalizeFirstLetter(orderStatus)}
        </button>
      </div>
    </>
  );
};

export default OrderHeader;
