import React, { useEffect, useState } from "react";
import OrderHeader from "../../Layout/OrderDetails/OrderHeader";
import { useParams } from "react-router-dom";
import CustomerInfo from "../../Layout/OrderDetails/CustomerInfo";
import OrderGallery from "../../Layout/OrderDetails/OrderGallery";
import { fetchAllDataById } from "../../services/fetchData";
import AsyncBoundary from "../../ui/AsyncBoundary";

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

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (typeof order !== "object" || Object.keys(order).length === 0) {
    return <AsyncBoundary customMessage="No order found." />;
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
