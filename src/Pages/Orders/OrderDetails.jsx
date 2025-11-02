import React, { useEffect, useState } from "react";
import OrderHeader from "../../Layout/Orders/OrderDetails/OrderHeader";
import { useParams } from "react-router-dom";
import CustomerInfo from "../../Layout/Orders/OrderDetails/CustomerInfo";
import OrderGallery from "../../Layout/Orders/OrderDetails/OrderGallery";
import { fetchAllDataById } from "../../services/fetchData";
import { Spinner } from "flowbite-react";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const data = await fetchAllDataById(
          "orders",
          id,
          setLoadingState,
          setError
        );
        setOrder(data?.order ?? {});
      } catch (err) {
        setError(err?.message ?? "Failed to load Order Details");
      }
    };

    if (id) fetchOrderData();
  }, [id]);

  if (loadingState || !order || Object.keys(order).length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  const { orderId, products, status, createdAt } = order ?? {};
  return (
    <section className="max-h-screen overflow-y-scroll scrollbar-hidden pb-56 p-4 w-full flex flex-col gap-10">
      <OrderHeader
        orderId={orderId}
        createdAt={createdAt}
        orderStatus={status?.orderStatus}
      />
      <OrderGallery products={products} />
      <CustomerInfo order={order} />
    </section>
  );
};

export default OrderDetails;
