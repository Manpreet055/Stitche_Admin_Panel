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

  const productsHeader = {
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

  const ordersHeader = {
    orderId: "Order Id",
    userId: "User Id",
    products: [
      {
        name: "Product",
      },
    ],
    status: {
      orderStatus: "Status",
    },
    totalAmount: "Amount",
    payment: {
      method: "Method",
    },
    shipping: {
      city: "Address",
      country: "",
    },
    user: {
      firstName: "User",
      lastName: "",
    },
  };

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
    <div className="h-screen w-full flex flex-col overflow-auto scrollbar-hidden gap-8  ">
      {results.products.length !== 0 && (
        <div>
          <h2 className="w-full text-2xl font-semibold mb-6 text-center">
            Products
          </h2>
          <div className="text-xl font-semibold primary-bg rounded-t-2xl">
            {" "}
            <ProductRow isHeader={true} product={productsHeader} />
          </div>
          {results.products?.map((product, index) => (
            <ProductRow
              key={product._id}
              product={product}
              serial={index + 1}
            />
          ))}
        </div>
      )}

      {results.orders.length !== 0 && (
        <div>
          <h2 className="w-full text-2xl font-semibold text-center mb-6">
            Orders
          </h2>
          <div className="text-2xl md:text-3xl w-full font-semibold primary-bg rounded-t-2xl">
            {" "}
            <OrderRow order={ordersHeader} />
          </div>
          {results.orders?.map((order, index) => (
            <OrderRow key={order._id} serial={index} order={order} />
          ))}
        </div>
      )}

      {results.users.length !== 0 && (
        <div>
          <h2 className="w-full text-2xl font-semibold text-center mb-6 ">
            Users
          </h2>
          <ul
            className={`py-5 primary-bg rounded-t-2xl px-4  grid grid-cols-[100px_300px_1fr_160px_120px_100px_150px] place-items-center text-xl font-medium border-b border-gray-400 `}
          >
            <li>Sr No.</li>
            <li>User</li>
            <li>Email</li>
            <li>Status</li>
            <li>Role</li>
            <li>Orders</li>
            <li>Last login</li>
          </ul>
          {results.users?.map((user, index) => (
            <UserRow key={user._id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchItems;
