import React from "react";
import { NavLink } from "react-router-dom";
import ProductDropdown from "./ProductDropdown";
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
  return (
    <div
      className={`bg-black/20 hidden  backdrop-blur-2xl lg:flex z-50 h-screen  flex-col justify-between w-72 max-w-[80vw] md:w-[300px] `}
    >
      <div>
        <div className="flex py-6 px-4 items-center gap-3 text-3xl font-medium">
          <span className="p-3 bg-rose-700 rounded-full">
            <User size={28} />
          </span>
          Admin
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

          <li>
            <NavLink
              className={({ isActive }) => {
                return ` w-full flex sidebar-links   ${
                  isActive ? "bg-rose-800/20 text-rose-600" : ""
                }`;
              }}
              to="/settings"
            >
              <Cog />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="flex mb-6 flex-col gap-2 text-xl font-medium px-4 ">
        <li>
          <NavLink
            className={({ isActive }) => {
              return ` w-full flex sidebar-links   ${
                isActive ? "bg-rose-800/20 text-rose-600" : ""
              }`;
            }}
            to="/profile"
          >
            <UserPen />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return ` w-full flex sidebar-links   ${
                isActive ? "bg-rose-800/20 text-rose-600" : ""
              }`;
            }}
            to="/logout"
          >
            <Power />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
