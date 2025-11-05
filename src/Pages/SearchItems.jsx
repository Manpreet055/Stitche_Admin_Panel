import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import searchData from "../services/searchData";
import AsyncBoundary from "../ui/AsyncBoundary";
import OrderRow from "../Layout/Orders/OrderRow";
import ProductRow from "../Layout/Products/ProductsRow";
import UserRow from "../Layout/Users/UserRow";

const SearchItems = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search); // will return our query/q
  const query = params.get("q");
  const [results, setresults] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await searchData(query, setLoadingState, setError);
        setresults(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchResults();
  }, [query]);

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }
  if (typeof results !== "object" || Object.keys(results).length === 0) {
    return <AsyncBoundary customMessage="No Results found." />;
  }
  return (
    <div className="h-screen w-full overflow-auto scrollbar-hidden  ">
      <h2 className="w-full text-2xl font-semibold text-center">Products</h2>
      {results.products?.map((product, index) => (
        <ProductRow key={product._id} product={product} serial={index + 1} />
      ))}

      <h2 className="w-full text-2xl font-semibold text-center">Orders</h2>

      {results.orders?.map((order, index) => (
        <OrderRow key={order._id} serial={index} order={order} />
      ))}
      <h2 className="w-full text-2xl font-semibold text-center">Users</h2>

      {results.users?.map((user, index) => (
        <UserRow key={user._id} user={user} />
      ))}
    </div>
  );
};

export default SearchItems;
