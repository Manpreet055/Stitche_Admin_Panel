import React from "react";
import Products from "./products.json";
import ProductList from "./ProductListComp";
import Paginate from "../../../Utilities/Pagination";

const RenderProducts = () => {
  const header = {
    title: "Product Name",
    brand: "Brand",
    price: "Price",
    stock: "Stock",
    category: "Category",
    rating: {
      average: "Ratings",
      count: "Reviews",
    },
  };
  return (
    <ul className="h-screen pb-56 w-full overflow-scroll pt-10 scrollbar-hidden ">
      <li className="text-xl font-semibold">
        {" "}
        <ProductList isHeader={true} product={header}></ProductList>
      </li>
      <Paginate data={Products} ItemsPerPage={15}>
        {Products.map((product, index) => (
          <li className="text-lg" key={index}>
            <ProductList product={product} serial={index + 1} />
          </li>
        ))}
      </Paginate>
    </ul>
  );
};

export default RenderProducts;
