import React from "react";
import RenderProducts from "../Layout/Products/RenderProducts";
import SearchNavbar from "../Layout/Navbar/SearchNavbar";
import { NavLink } from "react-router-dom";
const Products = () => {
  return (
    <section className="overlflow-scroll h-screen w-full scrollbar-hidden">
      <SearchNavbar>{<NavLink to="/products/add" className="button-style">Add Product +</NavLink>}</SearchNavbar>
      <RenderProducts />
    </section>
  );
};

export default Products;
