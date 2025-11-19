import React, { useState, useEffect } from "react";
import handleApiError from "../services/handleApiError";
import axios from "axios";
const uri = import.meta.env.VITE_BASE_URI;

const useInbox = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState({
    limit: 10,
    sort: {
      sortField: "user.name",
      sortingOrder: "asc",
    },
    filters: {},
  });

  const fetchMessages = async () => {
    const { limit, sort, filters } = query;
    try {
      setLoadingState(true);
      const response = await axios.get(`${uri}/api/inbox`, {
        params: {
          page: currentPage,
          limit,
          sortField: sort.sortField,
          sortingOrder: sort.sortingOrder,
          filters,
        },
      });
      const data = response.data;
      setAllMessages(data.data);
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
    fetchMessages();
  }, [query, currentPage]);

  return {
    limit: query.limit,
    currentPage,
    setCurrentPage,
    loadingState,
    error,
    allMessages,
    setQuery,
    query,
    totalPages,
  };
};

export default useInbox;
