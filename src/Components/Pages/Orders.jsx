import React from "react";
import SearchNavbar from "../Layout/Navbar/SearchNavbar";
import SearchBar from "../Layout/Navbar/SearchBar";
import Filters from "../Layout/Navbar/Filters";
import RenderOrders from "../Layout/Orders/RenderOrders";
const Orders = () => {
  
  return (
    <div>
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<Filters />}
      ></SearchNavbar>
      <RenderOrders></RenderOrders>
    </div>
  );
};

export default Orders;
