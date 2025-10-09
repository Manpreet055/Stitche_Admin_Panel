import React from "react";

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
          {createdAt.slice(0,10)} {createdAt.slice(11,16)}
        </li>
        <li className="flex gap-6">
          <span className="text-lg font font-medium">Updated</span>
          {updatedAt.slice(0,10)} {updatedAt.slice(11,16)}
        </li>
      </ul>
    </div>
  );
};

export default MetaData;
