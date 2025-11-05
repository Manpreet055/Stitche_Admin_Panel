import React from "react";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";
import UserDetailsProvider from "./UserDetailsProvider";
import ProductProvider from "./products/ProductProvider";
import SearchValueProvider from "./searches/SearchValueProvider";

const ContextProvider = ({ children }) => {
  return (
    <SideBarContextProvider>
      <UserDetailsProvider>
        <ProductProvider>
          <SearchValueProvider>{children}</SearchValueProvider>
        </ProductProvider>
      </UserDetailsProvider>
    </SideBarContextProvider>
  );
};

export default ContextProvider;
