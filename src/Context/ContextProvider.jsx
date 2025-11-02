import React from "react";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";
import UserDetailsProvider from "./UserDetailsProvider";
import ProductProvider from "./products/ProductProvider";

const ContextProvider = ({ children }) => {
  return (
    <SideBarContextProvider>
      <UserDetailsProvider>
        <ProductProvider>{children}</ProductProvider>
      </UserDetailsProvider>
    </SideBarContextProvider>
  );
};

export default ContextProvider;
