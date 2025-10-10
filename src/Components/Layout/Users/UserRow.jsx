import React, { useContext, useState } from "react";
import { item } from "../../../Animations/ListStagger";
import { motion } from "framer-motion";
import CapitalizeFirstLetter from "../../../Utilities/CapitalizeLetter";
import UserDetailsContext from "../../../Context/UserDetailsContext";

const UserRow = ({ serial, user }) => {
  const { showDetails } = useContext(UserDetailsContext);
  const { Username, role, email, status, orders, lastLogin } = user;

  // Using Object Mapping for unique color according to the status of the user
  const statusColor = {
    active: "bg-green-100 text-green-800",
    pending: "bg-amber-100 text-amber-800",
    suspended: "bg-red-100 text-red-800",
  };
  return (
    <motion.ul
      onClick={() => showDetails({ value: true, Info: user })}
      variants={item}
      className={`w-full cursor-pointer border-b border-gray-300 grid grid-cols-[100px_300px_1fr_160px_120px_100px_150px] px-3 md:text-lg place-items-center h-[70px] `}
    >
      <li>{serial}</li>
      <li className="lg:pl-14 max-w-[90px] md:max-w-max scrollbar-hidden overflow-x-scroll">
        {Username}
      </li>
      <li className="overflow-x-scroll max-w-[120px] md:max-w-max scrollbar-hidden">
        {email}
      </li>
      <li
        className={`px-2 py-2 w-[90%] text-center  rounded ${
          statusColor[status].toLowerCase() || "bg-gray-400"
        }`}
      >
        {CapitalizeFirstLetter(status)}
      </li>
      <li>{role}</li>
      <li>{orders}</li>
      <li className="text-nowrap">{lastLogin}</li>
    </motion.ul>
  );
};

export default UserRow;
