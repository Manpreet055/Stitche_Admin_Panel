import { useNavigate } from "react-router-dom";

const ProductList = ({ product, serial = "Serial No." }) => {
  //Destructring the product data from product prop
  const { id, title, brand, price, stock, category, rating } = product;

  // navigate to the PDP
  const navigate = useNavigate();
  const navProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <ul
      onClick={navProduct}
      className="px-4 py-5 grid grid-cols-[100px_1fr__200px_150px_160px_200px_160px_180px] place-items-center w-full p-4 border-b border-gray-300 relative"
    >
      <li>{serial}</li>
      <li className={`place-self-start pl-10`}>{title}</li>
      <li>{brand}</li>
      <li>{typeof price != "string" ? Math.floor(price) : price}</li>
      <li>{stock}</li>
      <li>{category}</li>
      <li>{rating.average}</li>
      <li>{rating.count}</li>
    </ul>
  );
};

export default ProductList;
