import React, { useState } from "react";
import LoadingStateContext from "./LoadingStateContext";

const LoadingStateProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState(true);
  return (
    <LoadingStateContext.Provider value={{ loadingState, setLoadingState }}>
      {children}
    </LoadingStateContext.Provider>
  );
};

export default LoadingStateProvider;
