import React from "react";

const ListComp = ({
  headings = false,
  orderId,
  customer,
  product,
  date,
  amount,
  status,
}) => {
  const statusColor = {
    pending:"bg-amber-400/50",
    delivered:"bg-green-400/50",
    shipped:"bg-blue-400/50",
    cancelled:"bg-gray-400/50",
    processing:"bg-indigo-400/50",
  }
  return (
    <ul
      className={`h-[70px] grid grid-cols-6 place-items-center text-lg border-b border-neutral-600 ${
        headings && "text-xl font-medium"
      }`}
    >
      <li>{orderId}</li>
      <li>{customer}</li>
      <li>{product}</li>
      <li>{date}</li>
      <li>{amount}</li>
      <li
        className={`px-4 py-2 rounded-2xl ${statusColor[status.toLowerCase()]}`}
      >
        {status}
      </li>
    </ul>
  );
};

export default ListComp;
