import React, { useContext } from "react";
import clickEvent from "../Animations/onClick";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useDebounce from "../Hooks/useDebounce";
import useDebounceSuggestions from "../Hooks/Searches/DebounceSuggestions";
import DebounceContext from "../Context/searches/DebounceContext";
import SearchUsers from "../Hooks/Searches/SearchUsers";
import Suggestions from "./Suggestions";

const SearchBar = () => {
  const debounceSuggestions = useDebounceSuggestions();
  const { setSuggestions } = useContext(DebounceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchData = SearchUsers();

  // Creating Debounce Variable function
  const debounceSearch = useDebounce({
    callBack: debounceSuggestions,
    delay: 500,
  });

  return (
    <form
      onSubmit={handleSubmit(searchData)}
      className="relative h-full w-fit flex items-center gap-2"
    >
      <div className=" h-full flex gap-2">
        <div>
          <input
            autoComplete="off"
            onBlur={() => setSuggestions([])}
            {...register("searches", {
              required: "Search field cannot be empty",
              minLength: {
                value: 4,
                message: "Minimum length of 4 is required",
              },
            })}
            type="text"
            className={`w-[200px] md:w-full border-b h-full z-[99]  ${
              errors.searches && "focus:outline-red-600 focus:border-red-600"
            }  px-6 active:border-none`}
            placeholder="Search here.."
            onChange={(event) =>
              event.target.value.length > 2
                ? debounceSearch(event.target.value)
                : setSuggestions([])
            }
          />
          {errors.searches && (
            <p className="text-red-600 absolute top-15">
              *{errors.searches.message}
            </p>
          )}
        </div>
        <motion.button
          onClick={() => setSuggestions([])}
          type="submit"
          variants={clickEvent}
          initial="default"
          whileHover="hover"
          whileTap="click"
          className=" p-3 flex items-center gap-2 text-xl rounded-2xl"
        >
          <Search size={28} />
        </motion.button>
      </div>
      <Suggestions></Suggestions>
    </form>
  );
};

export default SearchBar;
