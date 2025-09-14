import { useContext } from "react";
import UsersData from "../../Components/Layout/Users/UsersData";
import DebounceContext from "../../Context/searches/DebounceContext";

const useDebounceSuggestions = () => {
  const { setSuggestions } = useContext(DebounceContext);

  return (data) => {
    const searchterm = data.trim().toLowerCase();
    const foundUsers = UsersData.filter((user) =>
      [
        user.Username,
        user.email,
        user.address.city,
        user.address.country,
        user.phone,
        user.dateJoined,
        user.lastLogin,
        user.role,
        user.status,
      ].some((field) => field.toLowerCase().includes(searchterm))
    );
    setSuggestions(foundUsers);
    return foundUsers;
  };
};

export default useDebounceSuggestions;