import React, { useContext } from "react";
import { container } from "../../../Animations/ListStagger"; 
import { motion } from "framer-motion";
import UserRow from "./UserRow" 
import UsersData from "./UsersData";
import SearchContext from "../../../Context/searches/SeachContext";
import Paginate from "../../../Utilities/Pagination";

const RenderUsers = () => {
  const { searchItems } = useContext(SearchContext); 
  // the searchItems variable contains data about searches and debounce suggestion if it is
  // null than all users will be shown otherwise searched items will be appear on the web page
  const dataProviderArray = searchItems ?? UsersData;

  return (
    <div className="blur-bg px-3 w-full min-w-[900px]">
      <motion.ul
        initial="hidden"
        animate="show"
        variants={container}
        className="relative flex flex-col"
      >
        <Paginate data={dataProviderArray} ItemsPerPage={15}>
          {typeof searchItems === "string" ? (
            <div className="top-[50%] flex flex-col w-full h-[660px] text-2xl font-medium justify-center items-center">
              {searchItems}
            </div>
          ) : (
            dataProviderArray.map((user, index) => (
              <UserRow serial={index + 1} key={user.id} user={user} />
            ))
          )}
        </Paginate>
      </motion.ul>
    </div>
  );
};

export default RenderUsers;
