import React from "react";
import DebounceContextProvider from "./searches/DebounceContextProvider";
import SideBarContextProvider from "./sidebar/SideBarContextProvider";
import SearchContextProvider from "./searches/SearchContextProvider";
import LoadingStateProvider from "./LoadingStates/LoadingStateProvider";

const ContextProviderContainer = ({ children }) => {
  return (
    <LoadingStateProvider>
      <DebounceContextProvider>
        <SearchContextProvider>
          <SideBarContextProvider>{children}</SideBarContextProvider>
        </SearchContextProvider>
      </DebounceContextProvider>
    </LoadingStateProvider>
  );
};

export default ContextProviderContainer;
