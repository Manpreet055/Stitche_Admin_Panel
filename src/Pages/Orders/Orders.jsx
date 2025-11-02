import React from "react";
import SearchNavbar from "../../Layout/Navbar/SearchNavbar";
import SearchBar from "../../Layout/Navbar/SearchBar";
import FilterItems from "../../Layout/Navbar/FilterItems";
import AllOrders from "../../Layout/Orders/AllOrders";
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
    <section className="px-4 py-5">
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<FilterItems fieldArr={filterOrders}  />}
      />
      <div className="sm:overflow-scroll h-screen scrollbar-hidden sm:pb-56">
        <AllOrders />
      </div>
    </section>
  );
};

export default Orders;
