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
      <div className="flex justify-between w-full ">
        <h2 className="text-3xl flex gap-3 flex-col">
          Order #{orderId}{" "}
          <span className="text-lg text-neutral-500">
            Placed on: {createdAt}
          </span>{" "}
        </h2>
        <div
          className={`${
            statusColor[orderStatus.toLowerCase()]
          } place-content-center w-[150px] h-[70%] rounded-2xl text-center`}
        >
          {CapitalizeFirstLetter(orderStatus)}
        </div>
      </div>
    </>
  );
};

export default OrderHeader;
