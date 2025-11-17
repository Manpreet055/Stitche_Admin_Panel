import React from "react";
import CapitalizeFirstLetter from "../../Utilities/capitalizeLetter";
import BackButton from "../../ui/BackButton";
import deleteRequest from "../../services/deleteRequest";
import { Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
const OrderHeader = ({ orderId, createdAt, orderStatus }) => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        <div className="flex gap-2 items-center">
          <button
            className={`${
              statusColor[String(orderStatus).toLowerCase()]
            } py-4 px-6 h-fit rounded-2xl`}
          >
            {CapitalizeFirstLetter(orderStatus)}
          </button>
          <button
            onClick={() => {
              if (confirm("Do you really want to delete the Order ??")) {
                deleteRequest("orders", id).then(navigate(-1));
              }
            }}
            className={`flex gap-2 items-center md:text-lg hover:underline border border-gray-400 rounded-lg p-3`}
          >
            {" "}
            <Trash2 />
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderHeader;
