import axios from "axios";
import { EllipsisVertical, Eye, Trash2, Pen } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteRequest from "../../../Utilities/DeleteRequest";
import { AnimatePresence, motion } from "framer-motion";

const ProductList = ({ product, serial = "Serial No.", isHeader = false }) => {
  //Destructring the product data from product prop
  const [loadingState, setLoadingState] = useState(false);
  const { id, title, brand, price, stock, category, rating } = product;

  const [options, showOptions] = useState(false);

  // to show option on hiver
  const timeref = useRef(null);
  const handleHoverStart = () => {
    clearTimeout(timeref.current);
    showOptions(true);
  };

  const handleHoverEnd = () => {
    timeref.current = setTimeout(() => {
      showOptions(false);
    }, 500);
  };

  // navigate to the edit product page by sending the product id to the url
  const navigate = useNavigate();
  const navProduct = () => {
    navigate(`product/${id}/edit`);
  };

  return (
    <ul className="px-4 py-5 grid grid-cols-[100px_1fr__200px_150px_160px_200px_160px_180px] place-items-center w-full p-4 border-b border-gray-300 relative">
      <li>{serial}</li>
      <li className={`place-self-start pl-10`}>{title}</li>
      <li>{brand}</li>
      <li>{typeof price != "string" ? Math.floor(price) : price}</li>
      <li>{stock}</li>
      <li>{category}</li>
      <li>{rating.average}</li>
      <li>{rating.count}</li>
      {/* <li className="">
        {!isHeader && (
          <motion.button
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={() => showOptions((prev) => !prev)}
          >
            <EllipsisVertical />
          </motion.button>
        )}{" "}
        <AnimatePresence>
          {!isHeader && options && (
            <motion.ul
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="absolute flex flex-col gap-3 right-10 top-10 bg-white text-black z-90 pr-6 pl-3 py-4"
            >
              <li className=" flex gap-2 items-center">
                <button
                  onClick={navProduct}
                  className=" flex gap-2 items-center"
                >
                  <Pen />
                  Edit
                </button>
              </li>
              <li>
                <button
                  onClick={() => deleteRequest(id, setLoadingState)}
                  className={`flex gap-2 items-center ${
                    loadingState ? "cursor-progress" : "cursor-pointer"
                  }`}
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
            </motion.ul>
          )}
        </AnimatePresence>
      </li> */}
    </ul>
  );
};

export default ProductList;
