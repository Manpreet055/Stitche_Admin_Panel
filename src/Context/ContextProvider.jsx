import React from "react";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";
import SearchValueProvider from "./searches/SearchValueProvider";

const ContextProvider = ({ children }) => {
  return (
    <SideBarContextProvider>
      <SearchValueProvider>{children}</SearchValueProvider>
    </SideBarContextProvider>
  );
};

export default ContextProvider;
