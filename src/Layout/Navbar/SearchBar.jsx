import React from "react";
import clickEvent from "../../Animations/onClick";
import { Search} from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import handleSearches from "../../Utilities/handleSearches";
import useDebounce from "../../Hooks/useDebounce"

const SearchBar = ({ ApiPath }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Creating Debounce Variable function
  const debounceSearch = useDebounce({
    callBack: handleSearches,
    delay: 500,
  });

  return (
    <form
      onSubmit={handleSubmit(handleSearches)}
      className="h-full w-full max-w-screen grow flex items-center gap-2"
    >
          <input
            autoComplete="off"
            {...register("searches", {
              required: "Search field cannot be empty",
            })}
            type="text"
            className={`w-full py-3  border-b lg:min-w-xl h-full sm:px-4 px-2 active:border-none`}
            placeholder="Search here.."
            onChange={(event) =>
              event.target.value.length > 2 &&
              debounceSearch({ searches: event.target.value })
            }
          />
        <motion.button
          disabled={isSubmitting ? true : false}
          type="submit"
          variants={clickEvent}
          initial="default"
          whileHover="hover"
          whileTap="click"
          className=" p-3 flex items-center gap-2 text-xl rounded-2xl"
        >
          <Search size={28} />
        </motion.button>
    </form>
  );
};

export default SearchBar;
