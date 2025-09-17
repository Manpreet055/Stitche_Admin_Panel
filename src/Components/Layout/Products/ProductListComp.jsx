import { EllipsisVertical } from "lucide-react";
const ProductList = ({ product, serial = "Serial No.", isHeader = false }) => {
  const { title, brand, price, stock, category, rating } = product;
  return (
    <ul className="grid grid-cols-[100px_1fr__200px_150px_160px_200px_160px_180px_40px] place-items-center w-full p-4 ">
      <li>{serial}</li>
      <li className={`place-self-start pl-10`} >{title}</li>
      <li>{brand}</li>
      <li>{typeof price != "string" ? Math.floor(price) : price}</li>
      <li>{stock}</li>
      <li>{category}</li>
      <li>{rating.average}</li>
      <li>{rating.count}</li>
      <li>{isHeader && <EllipsisVertical />}</li>
    </ul>
  );
};

export default ProductList;
