import { EllipsisVertical, Eye, Trash2, Pen } from "lucide-react";
import { useState } from "react";
const ProductList = ({ product, serial = "Serial No.", isHeader = false }) => {
  const { title, brand, price, stock, category, rating } = product;
  const [options, showOptions] = useState(false);
  return (
    <ul className="grid grid-cols-[100px_1fr__200px_150px_160px_200px_160px_180px_40px] place-items-center w-full p-4 relative">
      <li>{serial}</li>
      <li className={`place-self-start pl-10`}>{title}</li>
      <li>{brand}</li>
      <li>{typeof price != "string" ? Math.floor(price) : price}</li>
      <li>{stock}</li>
      <li>{category}</li>
      <li>{rating.average}</li>
      <li>{rating.count}</li>
      <li className="" onClick={() => showOptions((prev) => !prev)}>
        {!isHeader && <EllipsisVertical />}{" "}
        {options && (
          <ul className="absolute flex flex-col gap-3 right-10 top-10 bg-white text-black z-90 pr-6 pl-3 py-4">
            <li className=" flex gap-2 items-center">
              <Pen />
              Edit
            </li>
            <li className=" flex gap-2 items-center">
              <Trash2 />
              Delete
            </li>
            <li className=" flex gap-2 items-center"><Eye />View</li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default ProductList;
