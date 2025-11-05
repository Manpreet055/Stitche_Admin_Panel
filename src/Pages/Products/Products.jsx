import React from "react";
import RenderProducts from "../../Layout/Products/AllProducts";
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
      <RenderProducts />
    </section>
  );
};

export default Products;
