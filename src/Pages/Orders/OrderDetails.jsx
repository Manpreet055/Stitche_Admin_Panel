import React from "react";
import OrderHeader from "../../Layout/Orders/OrderDetails/OrderHeader";
import OrdersData from "../../Layout/Orders/OrdersData.json";
import { useParams } from "react-router-dom";
import CustomerInfo from "../../Layout/Orders/OrderDetails/CustomerInfo";
import OrderGallery from "../../Layout/Orders/OrderDetails/OrderGallery";

const OrderDetails = () => {
  const { id } = useParams();
  const order = OrdersData.find((o) => String(id) === String(o.orderId));
  if (!order) {
    console.log("Order details not found..");
    return;
  }

  const { orderId, products, status, createdAt } = order;
  const { orderStatus } = status;

  return (
    <section className="max-h-screen overflow-y-scroll scrollbar-hidden pb-56 p-4 w-full flex flex-col gap-10">
      <OrderHeader
        orderId={orderId}
        createdAt={createdAt}
        orderStatus={orderStatus}
      />
      <OrderGallery products={products} />
      <CustomerInfo order={order} />
    </section>
  );
};

export default OrderDetails;
