import React from "react";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";
import LoadingStateProvider from "./LoadingStates/LoadingStateProvider";

const ContextProviderContainer = ({ children }) => {
  return (
    <LoadingStateProvider>
      <SideBarContextProvider>{children}</SideBarContextProvider>
    </LoadingStateProvider>
  );
};

export default ContextProviderContainer;
