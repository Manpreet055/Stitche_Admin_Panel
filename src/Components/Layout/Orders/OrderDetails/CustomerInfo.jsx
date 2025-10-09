import React from "react";

const CustomerInfo = ({ order }) => {
  const { user, payment, shipping } = order;
  const { firstName, lastName, email, phone } = user;
  const { trackingId, city, country } = shipping;
  const { method, transactionId } = payment;
  return (
    <>
      <div className="w-full flex gap-y-5 flex-wrap py-4 border border-gray-300 rounded-lg  ">
        {/* Customer Info */}
        <div className="flex flex-col text-lg gap-2 w-full max-w-3xl ">
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

        {/* Shipping Info */}
        <div className="flex flex-col text-lg gap-2 w-full max-w-3xl ">
          <h3 className="title">Order Info</h3>
          <div className="text-lg font-medium">Tracking Id : {trackingId}</div>
          <div className="text-lg font-medium">City : {city}</div>
          <div className="text-lg font-medium">Country : {country}</div>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
