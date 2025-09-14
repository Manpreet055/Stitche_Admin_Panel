import React, { useState } from "react";
import DebounceContext from "./DebounceContext";

const DebounceContextProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);
  return (
    <DebounceContext.Provider value={{ suggestions, setSuggestions }}>
      {children}
    </DebounceContext.Provider>
  );
};

export default DebounceContextProvider;
