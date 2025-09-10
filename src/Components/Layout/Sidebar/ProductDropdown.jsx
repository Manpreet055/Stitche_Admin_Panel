import React from "react";
import Dropdown from "./Dropdown";
import { ShoppingBag, ChartBarStacked, Grid, PackagePlus } from "lucide-react";
import { NavLink } from "react-router-dom";

// This is the Product Dropdown in sideBar
const ProductDropdown = () => {
  return (
    <div className="w-full sidebar-links">
      <Dropdown fullWidth={true} buttonName="Products" buttonIcon={<ShoppingBag />}>
        <NavLink to="products" className={({ isActive }) => {
                        return `w-full flex sidebar-links    ${
                          isActive ? "active-tabs" : ""
                        }`;
                      }}>
          {<Grid />}All Products{" "}
        </NavLink>
        <NavLink to="product/add" className={({ isActive }) => {
                return `w-full flex sidebar-links    ${
                  isActive ? "active-tabs" : ""
                }`;
              }}>
          {<PackagePlus />}Add Product
        </NavLink>
        <NavLink to="products/categories" className={({ isActive }) => {
                return `w-full flex sidebar-links    ${
                  isActive ? "active-tabs" : ""
                }`;
              }}>
          {<ChartBarStacked />}Categories
        </NavLink>
      </Dropdown>
    </div>
  );
};

export default ProductDropdown;
