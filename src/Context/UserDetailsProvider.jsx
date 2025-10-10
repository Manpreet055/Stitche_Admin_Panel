import React, { useState } from "react";
import UserDetailsContext from "./UserDetailsContext";

const UserDetailsProvider = ({ children }) => {
  const [details, showDetails] = useState({value:false,Info:{}});

  return (
    <UserDetailsContext.Provider value={{ details, showDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
