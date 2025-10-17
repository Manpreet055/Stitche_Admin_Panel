import React, { useContext } from "react";
import { Menu, X, Bell } from "lucide-react";
import ProfileDropDown from "./ProfileDropDown";
import SidebarContext from "../../Context/sidebar/SidebarContext";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // Check the current Path and set that path Name to the Navbar
  const location = useLocation();
  const path = location.pathname;

  const pathMap = {
    "/": "Dashboard",
    "/users": "Users",
    "/products": "Products",
    "/inbox": "Inbox",
    "/orders": "Orders",
    "/profile": "Profile",
  };

  const dynamicMap = {
    chats: "Chat",
    add: "Add  Product",
    edit: "Edit product",
    orders: "Order Details",
    products: "Product Details",
  };

  let title = pathMap[path];

  if (!title) {
    for (const key in dynamicMap) {
      if (path.includes(key)) {
        title = dynamicMap[key];
        break;
      }
    }
  }

  if (!title) title = "Unknown Page";
  const { sidebar, showSidebar } = useContext(SidebarContext);
  return (
    <div className="w-full md:h-20 flex justify-between items-center pl-3 lg:px-2 py-2">
      <h1 className="text-2xl md:text-4xl font-medium">{title} </h1>
      <div className=" flex items-center">
        <NavLink
          to="/inbox"
          className="border-r mr-5 w-fit px-2 hover:text-gray-300 transition duration-2  00 ease-in-out"
        >
          <Bell />{" "}
        </NavLink>
        <div className="hidden sm:block">
          <ProfileDropDown options={true} userEmail="manpreetuae4@gmail.com" />
        </div>
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
