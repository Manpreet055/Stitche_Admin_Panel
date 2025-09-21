import { useContext } from "react";
import DebounceContext from "../../Context/searches/DebounceContext";
import UsersData from "../../Components/Layout/Users/UsersData";

const useDebounceSuggestions = () => {
  const { setSuggestions } = useContext(DebounceContext);

  // these are the fields we want to suggest on
  const searchFields = [
    "Username",
    "email",
    "address.city",
    "address.country",
    "phone",
    "dateJoined",
    "lastLogin",
    "role",
    "status",
  ];

  return (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    const results = UsersData.filter((item) =>
      searchFields.some((field) => {
        const value = field.split(".").reduce((acc, key) => acc?.[key], item);
        return String(value).toLowerCase().includes(lowerQuery);
      })
    ).slice(0, 5); // limit suggestions (optional)

    setSuggestions(results);
  };
};

export default useDebounceSuggestions;
