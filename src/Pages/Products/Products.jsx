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
import { customTableTheme } from "../../Utilities/theme";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

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
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="h-screen min-w-fit pb-56 w-full overflow-auto scrollbar-hidden px-2 "
      >
        <Table striped theme={customTableTheme}>
          <TableHead>
            <TableRow>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell>Brand</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Stock</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <ProductRow key={index} product={product} />
            ))}
          </TableBody>
        </Table>
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </motion.div>
    </div>
  );
};

export default AllProducts;
