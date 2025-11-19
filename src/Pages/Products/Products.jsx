import React, { useEffect, useState } from "react";
import ProductRow from "../../Layout/Products/ProductsRow";
import Paginate from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
import AsyncBoundary from "../../ui/AsyncBoundary";
import SortData from "../../ui/SortData";
import useProducts from "../../Hooks/useProducts";

const AllProducts = () => {
  const {
    products,
    loadingState,
    error,
    query,
    setQuery,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProducts();

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

  const sortOptions = [
    {
      title: "Price High to Low",
      field: "price",
      order: "desc",
    },
    {
      title: "Price Low to High",
      field: "price",
      order: "asc",
    },
    {
      title: "Stock High to Low",
      field: "stock",
      order: "desc",
    },
    {
      title: "Stock Low to High",
      field: "stock",
      order: "asc",
    },
  ];

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <AsyncBoundary customMessage="No product found." />;
  }

  return (
    <div className="w-full overflow-auto">
      <SortData sortOptions={sortOptions} query={query} setQuery={setQuery} />
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

        {products.map((product, index) => (
          <motion.li variants={item} className="text-lg" key={index}>
            <ProductRow product={product} serial={index + 1} />
          </motion.li>
        ))}

        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </motion.ul>
    </div>
  );
};

export default AllProducts;
