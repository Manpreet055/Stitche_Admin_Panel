import React from "react";

const PaymentInfo = ({ payment, discount, products }) => {
  return (
    <div className=" flex  w-full  justify-between items-end flex-wrap">
      {" "}
      {/* Payement Info */}
      <div className="flex flex-col text-lg gap-4  border border-gray-300 rounded-lg p-4 min-h-64 w-full max-w-3xl  ">
        <h3 className="title">Payment Info</h3>
        <div className="text-lg font-medium">
          {" "}
          Payment Method : {payment.method}
        </div>
        <div className="text-lg font-medium">
          Transaction Id : {payment.transactionId}
        </div>
        <div className="text-lg font-medium">Status : {payment.status}</div>
      </div>
      <div className="flex justify-between md:px-10 p-4 border items-center gap-6 border-gray-300 rounded-lg">
        <h6 className="text-xl font-semibold">Sub Total </h6>
        <div>AED : {totalPriceAfterDiscount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default PaymentInfo;
