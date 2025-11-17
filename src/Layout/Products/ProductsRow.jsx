import { useNavigate } from "react-router-dom";

const ProductRow = ({ product,isHeader = false, serial = "Sr. No." }) => {
  //Destructring the product data from product prop
  const { _id, title, brand, price, stock, category, rating } = product;

  // navigate to the PDP
  const navigate = useNavigate();
  const navProduct = () => {
    navigate(`/products/${_id}`);
  };

  return (
    <ul
      onClick={()=> !isHeader && (navProduct())}
      className="px-4 py-5 grid grid-cols-[100px_1fr__200px_150px_160px_200px_160px_230px] place-items-center w-full p-4 border-b border-gray-300 relative"
    >
      <li>{serial}</li>
      <li className={`place-self-start  text-nowrap`}>{title}</li>
      <li>{brand}</li>
      <li>{typeof price != "string" ? Math.floor(price) : price}</li>
      <li>{stock}</li>
      <li>{category}</li>
      <li>{rating.average}</li>
      <li>{rating.count}</li>
    </ul>
  );
};

export default ProductRow;
