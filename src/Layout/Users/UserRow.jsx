import React, { useContext } from "react";
import { item } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import capitalizeFirstLetter from "../../Utilities/capitalizeLetter";
const UserRow = ({ user, serial }) => {
  const { _id, role, email, profile } = user;
  const navigate = useNavigate();
  return (
    <motion.ul
      onClick={() => navigate(`/users/${_id}`)}
      variants={item}
      className={`w-full min-w-fit cursor-pointer border-b border-gray-300 grid grid-cols-[100px_300px_1fr_160px_120px_100px_150px] px-3 md:text-lg place-items-center h-[70px] `}
    >
      <li>{serial}</li>
      <li className="lg:pl-14 scrollbar-hidden overflow-x-scroll">
        {profile?.fullName}
      </li>
      <li className="overflow-x-scroll text-center scrollbar-hidden">
        {email}
      </li>
      <li className={`px-2 py-2 w-[90%] text-center  rounded`}>
        {profile?.address?.city}
      </li>
      <li>{capitalizeFirstLetter()}</li>
      <li>{profile?.phone}</li>
    </motion.ul>
  );
};

export default UserRow;
