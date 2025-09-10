import React from "react";
import SidebarContext from "./SidebarContext";

const SideBarContextProvider = ({ children }) => {
  const [sidebar, showSidebar] = React.useState(false);
  return (
    <SidebarContext.Provider value={{ sidebar, showSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SideBarContextProvider;
