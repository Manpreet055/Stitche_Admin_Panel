import React, { useState } from "react";
import SearchValueContext from "./SearchValueContext";

const SearchValueProvider = ({ children }) => {
  const [SearchItems, setSearchItems] = useState({});
  return (
    <SearchValueContext.Provider value={{ SearchItems, setSearchItems }}>
      {children}
    </SearchValueContext.Provider>
  );
};

export default SearchValueProvider;
