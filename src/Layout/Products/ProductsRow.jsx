import { useNavigate } from "react-router-dom";
// import capitalizeLetter from "../../Utilities/capitalizeLetter";
import { TableCell, TableRow } from "flowbite-react";

const ProductRow = ({ product }) => {
  //Destructring the product data from product prop
  const { _id, title, brand, price, category } = product;

  // navigate to the PDP
  const navigate = useNavigate();
  const navProduct = () => {
    navigate(`/products/${_id}`);
  };

  return (
    <TableRow onClick={navProduct} className="bg-white dark:border-gray-700 ">
      <TableCell className="whitespace-nowrap">{title}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{product?.quantity ?? product?.stock}</TableCell>
    </TableRow>
  );
};

export default ProductRow;
