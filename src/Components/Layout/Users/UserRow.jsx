import React, { useState } from "react";
import { motion } from "framer-motion";
import { item, container } from "../../../Animations/ListStagger";
import { EllipsisVertical, Pen, Trash2, Eye } from "lucide-react";
const UserRow = ({ serial, user }) => {

  // Destructring User's Info
  const {
    Username,
    role,
    email,
    status,
    orders,
    phone,
    verified,
    dateJoined,
    lastLogin,
  } = user;


  const [fullDetails, showFullDetails] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  // Using Object Mapping for unique color according to the status of the user
  const statusColor = {
    active: "bg-green-500/40",
    pending: "bg-amber-400/40",
    suspended: "bg-red-500/40",
  };
  return (
    <div className="w-full">
      <motion.ul
        variants={item}
        className={`w-full cursor-pointer ${
          serial % 2 == 0 && "bg-[#dacaa4]/40"
        }  grid grid-cols-[60px_1fr_1fr_130px_120px_100px_150px_30px] px-3 md:text-lg items-center justify-items-start h-[60px] `}
      >
        <li>{serial}</li>
        <li className="lg:pl-14 max-w-[90px] md:max-w-max scrollbar-hidden overflow-x-scroll">
          {Username}
        </li>
        <li className="overflow-x-scroll max-w-[120px] md:max-w-max scrollbar-hidden">
          {email}
        </li>
        <li
          className={`px-2 py-2  rounded ${
            statusColor[status].toLowerCase() || "bg-gray-400"
          }`}
        >
          {status}
        </li>
        <li>{role}</li>
        <li>{orders}</li>
        <li className="text-nowrap">{lastLogin}</li>
        <li className="flex flex-col">
          <button
            onClick={(event) => {
              event.stopPropagation();
              setDropDown((prev) => !prev);
            }}
            className="relative z-30"
          >
            <EllipsisVertical />
          </button>
          {dropDown && (
            <div className="absolute p-4 w-[150px] top-12 right-5 theme   flex flex-col gap-3 items-start">
              <button className="flex gap-2 items-center z-[999]">
                <Trash2 />
                Delete
              </button>
              <button className="flex gap-2 items-center z-[999]">
                <Pen />
                Edit
              </button>
              <button
                onClick={() => showFullDetails((prev) => !prev)}
                className="flex gap-2 items-center z-[999]"
              >
                <Eye />
                Details
              </button>
            </div>
          )}
        </li>
      </motion.ul>

      {/* Full Details card */}
      {fullDetails && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-h-40 rounded-2xl flex-wrap flex flex-col gap-4 bg-gray-400/40 p-6 text-lg py-3 "
        >
          <motion.li variants={item}>Username : {Username}</motion.li>
          <motion.li variants={item}>Email Address : {email}</motion.li>
          <motion.li variants={item}>Phone Number : {phone}</motion.li>
          <motion.li variants={item}>Status : {status}</motion.li>
          <motion.li variants={item}>Role : {role}</motion.li>
          <motion.li variants={item}>Total Orders : {orders}</motion.li>
          <motion.li variants={item}>Joining Date : {dateJoined}</motion.li>
          <motion.li variants={item}>Last Login : {lastLogin}</motion.li>
          <motion.li variants={item}>
            Verified : {verified.toString()}
          </motion.li>
          <motion.li variants={item}>City : {user.address.city}</motion.li>
          <motion.li variants={item}>
            Country : {user.address.country}
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
};

export default UserRow;
