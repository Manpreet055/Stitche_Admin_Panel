import React, { useContext} from "react";
import clickEvent from "../../../Animations/onClick";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import SearchContext from "../../../Context/searches/SeachContext";
import useDebounce from "../../../Hooks/useDebounce";
import useDebounceSuggestions from "../../../Hooks/Searches/DebounceSuggestions";
import DebounceContext from "../../../Context/searches/DebounceContext";
import SearchUsers from "../../../Hooks/Searches/SearchUsers";
import growVariants from "../../../Animations/growHeight";

const SearchBar = () => {
  const { setSearchItems } = useContext(SearchContext);
  const debounceSuggestions = useDebounceSuggestions();
  const { suggestions, setSuggestions } = useContext(DebounceContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const searchData = SearchUsers();

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

      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div
          variants={growVariants}
            initial="hidden"
            exit="hidden"
            animate="grow"
            transition="delay"
            className="origin-top absolute border border-gray-600 rounded-lg w-full top-20 min-h-96 max-h-96 text-white bg-black z-20 p-4 lg:text-xl tracking-wide flex flex-col items-center justify-between "
          >
            <ul className="overflow-y-scroll scrollbar-hidden  w-full  ">
              {suggestions.length > 0 ? (
                suggestions.map((user, index) => (
                  <li
                    className="cursor-pointer w-full overflow-x-auto scrollbar-hidden py-3 rounded transtions duration-300 ease-in-out hover:bg-neutral-800"
                    onClick={() => {
                      setSearchItems([user]);
                      setSuggestions([]);
                    }}
                    key={index}
                  >
                    {user.Username}
                  </li>
                ))
              ) : (
                <p>No Results Found</p>
              )}
            </ul>
            <button
              onClick={() => {
                setSearchItems(suggestions);
                setSuggestions([]);
              }}
              className="w-[80%] rounded-2xl py-3 primary-bg text-center"
            >
              Show All{" "}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default SearchBar;
