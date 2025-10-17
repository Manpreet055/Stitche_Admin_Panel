import React from "react";
import Products from "./products.json";
import ProductRow from "./ProductsRow";
import Paginate from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
const AllProducts = () => {
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
    <div className="w-full overflow-auto">
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="h-screen min-w-fit pb-56 w-full overflow-scroll pt-10 scrollbar-hidden "
      >
        <li className="text-xl font-semibold primary-bg rounded-t-2xl">
          {" "}
          <ProductRow isHeader={true} product={header} />
        </li>
        <Paginate data={Products} ItemsPerPage={15}>
          {Products.map((product, index) => (
            <motion.li variants={item} className="text-lg" key={index}>
              <ProductRow product={product} serial={index + 1} />
            </motion.li>
          ))}
        </Paginate>
      </motion.ul>
    </div>
  );
};

export default AllProducts;
