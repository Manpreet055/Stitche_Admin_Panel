import React from "react";
import clickEvent from "../../../Animations/onClick";
import { Search, User } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useDebounce from "../../../Hooks/useDebounce";
import axios from "axios";

const SearchBar = ({ ApiPath }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSearches = async (formData) => {
    try {
      const response = await axios.post(
        ApiPath || "https://jsonplaceholder.typicode.com/posts",
        {
          search: formData.searches,
        }
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.log("Server Error : ", error.response);
      } else if (error.request) {
        console.log("Network Error : ", error.request);
      } else {
        console.log(error.message);
      }
    }
  };
  // Creating Debounce Variable function
  const debounceSearch = useDebounce({
    callBack: handleSearches,
    delay: 500,
  });

  return (
    <form
      onSubmit={handleSubmit(handleSearches)}
      className="relative h-full w-fit flex items-center gap-2"
    >
      <div className=" h-full flex gap-2">
        <div>
          <input
            autoComplete="off"
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
              event.target.value.length > 2 &&
              debounceSearch({ searches: event.target.value })
            }
          />
          {errors.searches && (
            <p className="text-red-600 absolute top-15">
              *{errors.searches.message}
            </p>
          )}
        </div>
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
      </div>
    </form>
  );
};

export default SearchBar;
