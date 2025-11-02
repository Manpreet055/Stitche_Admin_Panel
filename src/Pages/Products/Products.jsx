import React from "react";
import RenderProducts from "../../Layout/Products/AllProducts";
import SearchNavbar from "../../Layout/Navbar/SearchNavbar";
import { NavLink} from "react-router-dom";
import SearchBar from "../../Layout/Navbar/SearchBar";
import FilterItems from "../../Layout/Navbar/FilterItems";
const Products = () => {

   // Filters options array for "Filters" componenet 
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
    <section className="overlflow-scroll h-screen p-4 w-full scrollbar-hidden">
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<FilterItems fieldArr={filterUsers} />}
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
