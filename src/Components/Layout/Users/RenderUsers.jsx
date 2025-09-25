import React, { useContext } from "react";
import { container } from "../../../Animations/ListStagger";
import { motion } from "framer-motion";
import UserRow from "./UserRow";
import UsersData from "./UsersData";
import Paginate from "../../../Utilities/Pagination";

const RenderUsers = () => {
  return (
    <div className="blur-bg px-3 w-full min-w-[900px]">
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="relative flex flex-col"
      >
        <Paginate data={UsersData} ItemsPerPage={15}>
          {UsersData.map((user, index) => (
            <UserRow serial={index + 1} key={user.id} user={user} />
          ))}
        </Paginate>
      </motion.ul>
    </div>
  );
};

export default RenderUsers;
