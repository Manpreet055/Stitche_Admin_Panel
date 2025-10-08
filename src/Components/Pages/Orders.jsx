import React from "react";
import SearchNavbar from "../Layout/Navbar/SearchNavbar";
import SearchBar from "../Layout/Navbar/SearchBar";
import Filters from "../Layout/Navbar/Filters";
import RenderOrders from "../Layout/Orders/RenderOrders";
const Orders = () => {
  const filterOrders = [
    {
      name: "Status",
      fields: [
        {
          fieldName: "Shipped",
          keyname: "shipped",
        },
        {
          fieldName: "Confirmed",
          keyname: "confirmed",
        },
        {
          fieldName: "Pending",
          keyname: "pending",
        },
        {
          fieldName: "Delivered",
          keyname: "delivered",
        },
        {
          fieldName: "Cancelled",
          keyname: "cancelled",
        },
      ],
    },
  ];
  return (
    <div className="px-4 py-5">
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<Filters fieldArr={filterOrders} />}
      ></SearchNavbar>
      <RenderOrders></RenderOrders>
    </div>
  );
};

export default Orders;
