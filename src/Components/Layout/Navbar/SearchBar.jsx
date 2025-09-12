import React, { useContext, useState } from "react";
import clickEvent from "../../../Utilities/Animations/onClick";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import UsersData from "../Users/UsersData";
import SearchContext from "../../../Context/searches/SeachContext";
import SearchValueContext from "../../../Context/searches/SearchValueContext";
import useDebounce from "../../../Hooks/useDebounce";

const SearchBar = () => {
  const { setSearchItems } = useContext(SearchContext);

  // Handling Search queries in future these types of function will be passed as a prop in products and inbox etc. pages for resuability
  const searchData = (data) => {
    const searchterm = data.searches.trim().toLowerCase();

    let searchResults = UsersData.filter((user) => {
      return (
        user.Username.toLowerCase().includes(searchterm) ||
        user.email.toLowerCase().includes(searchterm) ||
        user.dateJoined.includes(searchterm) ||
        user.lastLogin.toLowerCase().includes(searchterm) ||
        user.phone.includes(searchterm) ||
        user.role.toLowerCase().includes(searchterm) ||
        user.address.city.toLowerCase().includes(searchterm) ||
        user.address.country.toLowerCase().includes(searchterm) ||
        user.status.toLowerCase().includes(searchterm)
      );
    });
    searchResults.length != 0
      ? setSearchItems(searchResults)
      : setSearchItems("No results found");
  };
  const debounceSearch = useDebounce({ callBack: searchData, delay: 1000 });
  return (
    <div className="h-full w-fit flex items-center gap-2">
      <div className="relative h-full flex flex-col gap-2">
        <input
          type="text"
          className={`border-b h-full  px-6 focus:border-none`}
          placeholder="Search Name, Email etc.."
          onChange={(event)=>debounceSearch({searches:event.target.value})}
        />
      </div>
      <motion.button
        type="submit"
        variants={clickEvent}
        initial="default"
        whileHover="hover"
        whileTap="click"
        className=" p-3 flex items-center gap-2 text-xl rounded-2xl"
      >
        <Search size={28} />
        Search
      </motion.button>
    </div>
  );
};

export default SearchBar;
