import React, { useContext } from "react";
import AllUsers from "../Layout/Users/AllUsers";
import UserDetailsContext from "../Context/UserDetailsContext";
import UserDetailsCard from "../Layout/Users/UserDetailsCard";

const Users = () => {
  const { details } = useContext(UserDetailsContext);
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
    <section className="w-full pb-36 scroll-smooth px-4 h-screen py-5  flex flex-col gap-4">
      <AllUsers />
      {details.value && (
        <div className="fixed z-[299] flex user-card flex-col h-screen w-screen   lg:items-start lg:pl-120 bg-white/30 backdrop-blur-lg">
          <UserDetailsCard user={details.Info} />
        </div>
      )}
    </section>
  );
};

export default Users;
