import React, { useEffect, useState } from "react";
import ProductRow from "./ProductsRow";
import Paginate from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
import { fetchAllData } from "../../services/fetchData";
import AsyncBoundary from "../../ui/AsyncBoundary";

const AllProducts = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 15;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchAllData(
        "products",
        setLoadingState,
        setError,
        setProducts,
        page,
        limit
      );
      setProducts((prev) => prev.products);
      setTotalPages(data.totalPages);
    };
    fetchProducts();
  }, [page]);

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
          setPage={setPage}
          totalPages={totalPages}
          currentPage={page}
        />
      </motion.ul>
    </div>
  );
};

export default AllProducts;
