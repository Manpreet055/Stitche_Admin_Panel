import React, { useContext } from "react";
import { Menu, X,Bell } from "lucide-react";
import SidebarContext from "../../../Context/sidebar/SidebarContext";
import ProfileDropDown from "./ProfileDropDown";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  // Check the current Path and set that path Name to the Navbar
  const location = useLocation();
  const pathName = {
    "/": "Dashboard",
    "/users": "Users",
    "/products": "Products",
    "/products/add": "Add  Product",
    "/inbox" : "Inbox",
    "orders" : "Orders"

  };
  const { sidebar, showSidebar } = useContext(SidebarContext);
  return (
    <div className="w-full md:h-20 flex justify-between items-center lg:px-2 py-2">
      <h1 className="text-2xl md:text-4xl font-medium">{pathName[location.pathname]} </h1>
      <div className=" flex items-center"> 
        <div className="border-r mr-5 w-fit px-2 hover:text-gray-300 transition duration-2  00 ease-in-out"><Bell /> </div>
        <ProfileDropDown></ProfileDropDown>
        <button
          onClick={() => showSidebar((prev) => !prev)}
          className="p-4 transition duration-300 ease-in-out lg:hidden "
        >
          {sidebar ? <X /> : <Menu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
