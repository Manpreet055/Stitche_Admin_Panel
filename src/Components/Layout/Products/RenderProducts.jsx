import React from "react";
import Products from "./products.json";
import ProductList from "./ProductListComp";
import Paginate from "../../../Utilities/Pagination";
import {motion} from "framer-motion"
import {container,item} from "../../../Animations/ListStagger"
const RenderProducts = () => {
  const header = {
    title: "Product Name",
    brand: "Brand",
    price: "Price",
    stock: "Stock",
    category: "Category",
    rating: {
      average: "Ratings",
      count: "Reviews",
    },
  };
  return (
    <motion.ul initial="hidden" animate="show" variants={container} className="h-screen pb-56 w-full overflow-scroll pt-10 scrollbar-hidden ">
      <li className="text-xl font-semibold">
        {" "}
        <ProductList isHeader={true} product={header}></ProductList>
      </li>
      <Paginate data={Products} ItemsPerPage={15}>
        {Products.map((product, index) => (
          <motion.li variants={item} className="text-lg" key={index}>
            <ProductList product={product} serial={index + 1} />
          </motion.li>
        ))}
      </Paginate>
    </motion.ul>
  );
};

export default RenderProducts;
