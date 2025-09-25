import React, { lazy, Suspense, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchNavbar from "../Layout/Navbar/SearchNavbar";
const RenderUsers = lazy(() => import("../Layout/Users/RenderUsers"));
import { motion } from "framer-motion";
import clickEvent from "../../Animations/onClick";
import { ChevronLeft } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchBar from "../Layout/Navbar/SearchBar";
import Filters from "../Layout/Navbar/Filters";
const Users = () => {
  const fieldArr = [
    {
      name: "Status",
      fields: [
        {
          fieldName: "Active",
          keyname: "active",
        },
        {
          fieldName: "Pending",
          keyname: "pending",
        },
        {
          fieldName: "Suspended",
          keyname: "suspended",
        },
      ],
    },
    {
      name: "Role",
      fields: [
        {
          fieldName: "Admin",
          keyname: "admin",
        },
        {
          fieldName: "User",
          keyname: "user",
        },
        {
          fieldName: "Moderator",
          keyname: "moderator",
        },
      ],
    },
  ];
    
  return (
    <section className="w-full pb-36 scroll-smooth p-4 h-screen overflow-y-auto scrollbar-hidden flex flex-col gap-4">
      {/* Contains Filtes and searchBar etc. buttons */}
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<Filters fieldArr={fieldArr} />}
      />

      {/* Table Starts from here */}
      <div className="blur-bg px-3 w-full  scrollbar-hidden">
        <ul
          className={`min-w-[900px] h-[60px] bg-[#dacaa4] rounded-t-2xl text-neutral-800 px-3 mt-5 grid grid-cols-[60px_1fr_2fr_80px_160px_60px_190px_60px] place-items-center text-xl font-medium border-b border-gray-400 `}
        >
          <li>Sr No.</li>
          <li>User</li>
          <li>Email</li>
          <li>Status</li>
          <li>Role</li>
          <li>Orders</li>
          <li>Last login</li>
          <li>Action</li>
        </ul>
        <Suspense
          fallback={
            <Skeleton height={60} count={15} baseColor="#818181"></Skeleton>
          }
        >
          <RenderUsers />
        </Suspense>
      </div>
    </section>
  );
};

export default Users;
