import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SidebarContext from "../../../Context/sidebar/SidebarContext";
import ProductDropdown from "./ProductDropdown";
import { AnimatePresence, motion } from "framer-motion";
import {
  House,
  User,
  Truck,
  Cog,
  Users,
  Power,
  UserPen,
  Mail,
} from "lucide-react";

const Sidebar = () => {
  const { sidebar } = useContext(SidebarContext);
  return (
    <AnimatePresence>
      <motion.div
        // initial={{ width: 0, opacity: 0 }}
        // animate={{ width: "auto", opacity: 1 }}
        // exit={{ width:0, opacity: 0 }}
        // transition={{ duration: 0.4 }}
        className={`blur-bg origin-left bg-black fixed lg:relative text-white z-90 ${
          sidebar ? "flex" : "hidden"
        } z-50 h-screen max-h-[100%] lg:flex  flex-col justify-between w-72 max-w-[80vw] md:w-[300px]`}
      >
        <div>
          <div className="flex py-6 px-4 md:justify-center items-center gap-3 ">
            <img
              className=" w-[45%] md:w-[70%]"
              src="/src/assets/CompanyLogo.webp"
              alt="Componylogo"
            />
          </div>
          <ul className="flex flex-col gap-2 text-xl font-medium px-4 ">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `w-full flex sidebar-links    ${
                    isActive ? "bg-rose-800/20 text-rose-600" : ""
                  }`;
                }}
                to="/"
              >
                <House />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => {
                  return ` w-full flex sidebar-links   ${
                    isActive ? "bg-rose-800/20 text-rose-600" : ""
                  }`;
                }}
                to="/inbox"
              >
                <Mail />
                Inbox
              </NavLink>
            </li>

            <li>
              <ProductDropdown />
            </li>

            <li>
              <NavLink
                className={({ isActive }) => {
                  return ` w-full flex sidebar-links   ${
                    isActive ? "bg-rose-800/20 text-rose-600" : ""
                  }`;
                }}
                to="/orders"
              >
                <Truck />
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => {
                  return ` w-full flex sidebar-links   ${
                    isActive ? "bg-rose-800/20 text-rose-600" : ""
                  }`;
                }}
                to="/users"
              >
                <Users />
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
  