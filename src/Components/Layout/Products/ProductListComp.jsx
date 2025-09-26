import axios from "axios";
import { EllipsisVertical, Eye, Trash2, Pen } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingStateContext from "../../../Context/LoadingStates/LoadingStateContext";

const ProductList = ({ product, serial = "Serial No.", isHeader = false }) => {
  const { setLoadingState } = useContext(LoadingStateContext);
  //Destructring the product data from product prop
  const { id, title, brand, price, stock, category, rating } = product;

  // navigate to the edit product page by sending the product id to the url
  const navigate = useNavigate();
  const navProduct = () => {
    navigate(`product/${id}/edit`);
  };

  //Delete Product function
  const deleteProduct = async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          data: { id },
        }
      );
      setLoadingState(true); // for loading spinner

      const data = response.data;
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.log("Server Error : ", error.response);
      } else if (error.request) {
        console.log("Network Error :", error.request);
      } else {
        console.log(error.message);
      }
    } finally {
      setLoadingState(false);
    }
  };

  const [options, showOptions] = useState(false);
  return (
    <ul
      onClick={() => showOptions((prev) => !prev)}
      className="grid grid-cols-[100px_1fr__200px_150px_160px_200px_160px_180px_40px] place-items-center w-full p-4 relative"
    >
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
        {!isHeader && options && (
          <ul className="absolute flex flex-col gap-3 right-10 top-10 bg-white text-black z-90 pr-6 pl-3 py-4">
            <li className=" flex gap-2 items-center">
              <button onClick={navProduct} className=" flex gap-2 items-center">
                <Pen />
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={deleteProduct}
                className=" flex gap-2 items-center"
              >
                {" "}
                <Trash2 />
                Delete
              </button>
            </li>
            <li className=" flex gap-2 items-center">
              <Eye />
              View
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default ProductList;
