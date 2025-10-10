import React, { useContext } from "react";
import SearchNavbar from "../Layout/Navbar/SearchNavbar";
import RenderUsers from "../Layout/Users/RenderUsers";
import "react-loading-skeleton/dist/skeleton.css";
import SearchBar from "../Layout/Navbar/SearchBar";
import Filters from "../Layout/Navbar/Filters";
import UserDetailsContext from "../../Context/UserDetailsContext";
import UserDetailsCard from "../Layout/Users/UserDetailsCard";
import { X } from "lucide-react";

const Users = () => {
  const {details,showDetails} = useContext(UserDetailsContext)
  console.log(details)
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
      {details.value && (<div className="fixed z-[999] flex flex-col h-screen w-screen justify-center items-center lg:items-start lg:pl-120 bg-white/30 backdrop-blur-lg">
  <button
    onClick={() => showDetails({ value: false, Info: {} })}
    className="absolute top-0 right-100"
  >
    <X size={28} />
  </button>
  <UserDetailsCard user={details.Info} />
</div>)}
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<Filters fieldArr={fieldArr} />}
      />

      <RenderUsers />
    </section>
  );
};

export default Users;
