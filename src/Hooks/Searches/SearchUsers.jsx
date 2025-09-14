import { useContext } from "react";
import UsersData from "../../Components/Layout/Users/UsersData";
import SearchContext from "../../Context/searches/SeachContext";
import React from "react";

const SearchUsers = () => {
  const { setSearchItems } = useContext(SearchContext);
  return (data) => {
    const searchterm = data.searches.trim().toLowerCase();

    let searchResults = UsersData.filter((user) => {
      return [
        user.Username,
        user.email,
        user.address.city,
        user.address.country,
        user.phone,
        user.dateJoined,
        user.lastLogin,
        user.role,
        user.status,
      ].some((field) => field.toLowerCase().includes(searchterm));
    });
    searchResults.length != 0
      ? setSearchItems(searchResults)
      : setSearchItems("No results found");
  };
};

export default SearchUsers;
