import React, { useEffect, useState } from "react";
import axios from "axios";
import handleApiError from "../services/handleApiError";
const uri = import.meta.env.VITE_BASE_URI;

const useProducts = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState({
    limit: 10,
    sort: {
      sortField: "name",
      sortingOrder: "asc",
    },
    filters: {},
  });

  const fetchProducts = async () => {
    const { limit, sort, filters } = query;
    try {
      setLoadingState(true);
      const response = await axios.get(`${uri}/api/products`, {
        params: {
          page: currentPage,
          limit,
          sortField: sort.sortField,
          sortingOrder: sort.sortingOrder,
          ...filters,
        },
      });
      const data = response.data;
      setProducts(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      handleApiError(error);
      setError(error.message);
      throw error;
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [query, currentPage]);

  return {
    limit: query.limit,
    currentPage,
    setCurrentPage,
    loadingState,
    error,
    products,
    setQuery,
    query,
    totalPages,
  };
};

export default useProducts;
