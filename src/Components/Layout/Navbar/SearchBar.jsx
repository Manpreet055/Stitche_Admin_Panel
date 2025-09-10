import React, { useContext, useState } from "react";
import clickEvent from "../../../Utilities/Animations/onClick";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import UsersData from "../Users/UsersData";
import SearchContext from "../../../Context/searches/SeachContext";
import SearchValueContext from "../../../Context/searches/SearchValueContext";

const SearchBar = () => {
  const [showErr, setShowErr] = useState(false);
  const { setSearchItems } = useContext(SearchContext);
  const { searchValue } = useContext(SearchValueContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

    searchValue == "" && reset();
  };
  

  return (
    <form
      onSubmit={handleSubmit(searchData)}
      className="h-full w-fit flex items-center gap-2"
    >
      <div className="relative h-full flex flex-col gap-2">
        <input
          onFocus={() => setShowErr(true)}
          onBlur={() => setShowErr(false)}
          {...register("searches", {
            required: "Search field cannot be empty",
            minLength: { value: 4, message: "Minimum 4 letters required " },
          })}
          type="text"
          className={`border-b ${
            errors.searches ? " outline-red-600" : "border-gray-400"
          } h-full  px-6 focus:border-none`}
          placeholder="Search Name, Email etc.."
        />
        {errors.searches && showErr ? (
          <p className=" absolute top-14 left-2 l text-lg text-red-600">
            *{errors.searches.message}
          </p>
        ) : (
          ""
        )}
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
    </form>
  );
};

export default SearchBar;
