import React from "react";

const UserContactInfo = ({ phone, address }) => {
  return (
    <div className="flex flex-col w-full rounded-2xl shadow-md gap-4 max-w-[50vw]  p-4">
      <h3 className="text-3xl font-medium">Contact Info</h3>
      <>
        <div className="text-lg">
          <span className="font-medium text-xl">Phone</span> : {phone}
        </div>
        <div className="text-lg">
          <span className="font-medium text-xl">Address</span> : {address}
        </div>
      </>
    </div>
  );
};

export default UserContactInfo;
