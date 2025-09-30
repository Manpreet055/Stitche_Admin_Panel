import React from "react";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";

const ContextProviderContainer = ({ children }) => {
  return (
      <SideBarContextProvider>{children}</SideBarContextProvider>
  );
};

export default ContextProviderContainer;
