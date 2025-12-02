import React, { useEffect, useState } from "react";
import ProductRow from "../../Layout/Products/ProductsRow";
import Paginate from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
import AsyncBoundary from "../../ui/AsyncBoundary";
import SortData from "../../ui/SortData";
import useProducts from "../../Hooks/useProducts";
import { PRODUCTS_SORTING_OPTIONS } from "../../Utilities/sortingOptions";
import FilterData from "../../ui/FilterData";
import { PRODUCTS_FILTER_OPTIONS } from "../../Utilities/filtersOptions";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();
  const {
    products,
    loadingState,
    error,
    setQuery,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProducts();

  const header = {
    title: "Product Name",
    brand: "Brand",
    price: "Price",
    quantity: "Stock",
    category: "Category",
    rating: {
      average: "Ratings",
      count: "Reviews",
    },
  };

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
      <div className="w-full flex justify-around items-center">
        <SortData sortOptions={PRODUCTS_SORTING_OPTIONS} setQuery={setQuery} />
        <FilterData
          setQuery={setQuery}
          filterOptions={PRODUCTS_FILTER_OPTIONS}
        />
        <button
          onClick={() => navigate("/products/add")}
          className=" p-6 rounded-2xl"
        >
          + Add Product
        </button>
      </div>
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="h-screen min-w-fit pb-56 w-full overflow-scroll scrollbar-hidden "
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
