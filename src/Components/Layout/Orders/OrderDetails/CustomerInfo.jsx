import React from "react";

const CustomerInfo = ({ order }) => {
  const { user, shipping, payment, products, discount } = order;
  const { firstName, lastName, email, phone } = user;
  const { trackingId, city, country } = shipping;

  let totalCost = 0;
  products.forEach((p) => {
    totalCost += p.price;
  });
  const totalPriceAfterDiscount = totalCost - (discount * totalCost) / 100;
  return (
    <>
      <div className="w-full flex min-h-64 gap-y-5 flex-wrap py-4 items-end justify-between ">
        {/* Customer Info */}
        <div className="flex flex-col text-lg gap-2 w-fit ">
          <h3 className="title border-b py-2">Customer Info</h3>
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
        <div className="flex flex-col text-lg gap-2 w-fit ">
          <h3 className="title border-b py-2">Order Info</h3>
          <div className="text-lg font-medium">Tracking Id : {trackingId}</div>
          <div className="text-lg font-medium">City : {city}</div>
          <div className="text-lg font-medium">Country : {country}</div>
        </div>

        <div className="flex flex-col text-lg gap-2 w-fit ">
          <h3 className="title border-b py-2">Payment  Info</h3>

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
    </>
  );
};

export default CustomerInfo;
