import React from "react";
import convertDate from "../../Utilities/convertDate";
const MetaData = ({ id, sku, createdAt, updatedAt }) => {
  return (
    <div className="p-4 border border-gray-300 w-full flex flex-col gap-2 rounded-lg md:max-w-3xl">
      <h3 className="title">Meta Data</h3>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-6">
          <span className="text-lg font-medium">Product ID</span>
          {id}
        </li>
        <li className="flex gap-6">
          <span className="text-lg font-medium">SKU</span>
          {sku}
        </li>
        <li className="flex gap-6">
          <span className="text-lg font font-medium">Created</span>
          {convertDate(updatedAt)}
        </li>
        <li className="flex gap-6">
          <span className="text-lg font font-medium">Updated</span>
          {convertDate(updatedAt)}
        </li>
      </ul>
    </div>
  );
};

export default MetaData;
