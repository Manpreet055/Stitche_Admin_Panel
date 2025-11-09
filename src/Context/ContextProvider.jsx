import React from "react";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";
import ProductProvider from "./products/ProductProvider";
import SearchValueProvider from "./searches/SearchValueProvider";

const ContextProvider = ({ children }) => {
  return (
    <SideBarContextProvider>
      <ProductProvider>
        <SearchValueProvider>{children}</SearchValueProvider>
      </ProductProvider>
    </SideBarContextProvider>
  );
};

export default ContextProvider;
