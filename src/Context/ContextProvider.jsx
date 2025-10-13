import React from "react";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";
import UserDetailsProvider from "./UserDetailsProvider";

const ContextProvider = ({ children }) => {
  return (
    <SideBarContextProvider>
      <UserDetailsProvider>{children}</UserDetailsProvider>
    </SideBarContextProvider>
  );
};

export default ContextProvider;
