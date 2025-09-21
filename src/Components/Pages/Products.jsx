import React from "react";
import RenderProducts from "../Layout/Products/RenderProducts";
import SearchNavbar from "../Layout/Navbar/SearchNavbar";
import { NavLink } from "react-router-dom";
import SearchBar from "../Layout/Navbar/SearchBar";
import Filters from "../Layout/Navbar/Filters";
const Products = () => {
  const filterUsers = [
    {
      name: "Category",
      fields: [
        {
          fieldName: "Appliances",
          keyname: "appliances",
        },
        {
          fieldName: "Accessories",
          keyname: "accessories",
        },
        { 
          fieldName: "Electronics",
          keyname: "electronics",
        },
      ],
    },
    {
      name: "Brand",
      fields: [
        {
          fieldName: "Sony",
          keyname: "sony",
        },
        {
          fieldName: "HP",
          keyname: "hp",
        },
        {
          fieldName: "Samsung",
          keyname: "samsung",
        },
        {
          fieldName: "Lenovo",
          keyname: "lenovo",
        },
        {
          fieldName: "Apple",
          keyname: "apple",
        },
      ],
    },
  ];
  return (
    <section className="overlflow-scroll h-screen w-full scrollbar-hidden">
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<Filters fieldArr={filterUsers} />}
      >
        {
          <NavLink to="/products/add" className="button-style">
            Add Product +
          </NavLink>
        }
      </SearchNavbar>
      <RenderProducts />
    </section>
  );
};

export default Products;
