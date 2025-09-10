import React, {useState } from "react";
import { motion } from "framer-motion";
import { item, container } from "../Utilities/Animations/ListStagger";

const UserRow = ({
  serial,
  user
}) => {
  const {Username,role,email,status,orders,phone,verified,dateJoined,lastLogin} = user
  const [fullDetails, showFullDetails] = useState(false);
  const statusColor = {
    active: "bg-green-500/40",
    pending: "bg-amber-400/40",
    suspended: "bg-red-500/40",
  };
  return (
    <div>
      <motion.ul
        onClick={() => showFullDetails((prev) => !prev)}
        variants={item}
        className="w-full grid grid-cols-[60px_1fr_1fr_130px_120px_100px_150px] text-lg items-center justify-items-start h-[60px]"
      >
        <li>{serial}</li>
        <li className="lg:pl-14 max-w-[90px] md:max-w-max scrollbar-hidden overflow-x-scroll">{Username}</li>
        <li className="overflow-x-scroll max-w-[120px] md:max-w-max scrollbar-hidden">{email}</li>
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
      </motion.ul>
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
          <motion.li variants={item}>Verified : {verified.toString()}</motion.li>
          <motion.li variants={item}>City : {user.address.city}</motion.li>
          <motion.li variants={item}>Country : {user.address.country}</motion.li>
        </motion.ul>
      )}
    </div>
  );
};

export default UserRow;
