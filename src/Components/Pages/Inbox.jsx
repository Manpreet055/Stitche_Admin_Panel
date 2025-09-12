import React from "react";
import UsersData from "../Layout/Users/UsersData";
import useDebounce from "../../Hooks/useDebounce";

const Inbox = () => {
  function searchData(data) {
    const searchterm = data.searches.trim().toLowerCase();

    let searchResults = UsersData.filter((user) => {
      return (
        user.Username.toLowerCase().includes(searchterm)
||
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
    console.log(searchResults);
    return searchResults
  }

  const debounceSearch = useDebounce({ callBack: searchData, delay: 1000 });
  return (
    <div>
      <input
        type="text"
        onChange={(e)=>e.target.value.length > 2 && debounceSearch({searches:e.target.value}) }
        className="form-input-sections"
      />
      <input type="text" value={searchData} name="" id="" />
    </div>
  );
};  

export default Inbox;
