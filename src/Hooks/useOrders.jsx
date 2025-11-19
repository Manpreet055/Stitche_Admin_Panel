import React, { useState, useEffect } from "react";
import handleApiError from "../services/handleApiError";
import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;

const useOrders = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState({
    limit: 10,
    sort: {
      sortField: "user.firstName",
      sortingOrder: "desc",
    },
    filters: {},
  });

  const fetchOrders = async () => {
    const { limit, sort, filters } = query;
    try {
      setLoadingState(true);
      const response = await axios.get(`${uri}/api/orders`, {
        params: {
          page: currentPage,
          limit,
          sortField: sort.sortField,
          sortingOrder: sort.sortingOrder,
          filters,
        },
      });
      const data = response.data;
      setOrders(data.data);
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
    fetchOrders();
  }, [query, currentPage]);

  return {
    limit: query.limit,
    currentPage,
    setCurrentPage,
    loadingState,
    error,
    orders,
    setQuery,
    query,
    totalPages,
  };
};

export default useOrders;
