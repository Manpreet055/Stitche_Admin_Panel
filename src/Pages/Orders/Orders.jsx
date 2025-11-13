import React, { useEffect, useState } from "react";
import Paginate from "../../ui/Pagination";
import OrderRow from "../../Layout/Orders/OrderRow";
import { container, item } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
import { fetchAllData } from "../../services/fetchData";
import AsyncBoundary from "../../ui/AsyncBoundary";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 15;
  useEffect(() => {
    try {
      fetchAllData(
        "orders",
        setLoadingState,
        setError,
        setOrders,
        page,
        limit,
      ).then((data) => setTotalPages(data.totalPages));
    } catch (err) {
      setError(err?.message ?? "Failed to load Orders");
    }
  }, [page]);

  const header = {
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

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (!Array.isArray(orders) || orders.length === 0) {
    return <AsyncBoundary customMessage="No Order found." />;
  }

  return (
    <div className="overflow-auto h-screen  w-full scrollbar-hidden">
      <div className="w-full overflow-auto h-full pb-56 scrollbar-hidden ">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col min-w-[1350px] h-screen pt-10 overflow-y-auto scrollbar-hidden"
        >
          <li className="text-2xl md:text-3xl w-full font-semibold primary-bg rounded-t-2xl">
            {" "}
            <OrderRow order={header} />
          </li>
          {orders.map((order, index) => (
            <motion.li variants={item} key={index}>
              <OrderRow order={order} />
            </motion.li>
          ))}
          <Paginate
            setPage={setPage}
            totalPages={totalPages}
            currentPage={page}
          />
        </motion.ul>
      </div>
    </div>
  );
};

export default AllOrders;
