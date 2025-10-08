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
    <section className="w-full pb-36 scroll-smooth px-4 h-screen flex flex-col gap-4">
      {/* Contains Filtes and searchBar etc. buttons */}
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<Filters fieldArr={fieldArr} />}
      />

        <RenderUsers />
    </section>
  );
};

export default Users;
