import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import growVariants from "../Animations/growHeight";
import SearchContext from "../Context/searches/SeachContext";
import DebounceContext from "../Context/searches/DebounceContext";

const Suggestions = () => {
  const { setSearchItems } = useContext(SearchContext);
  const { suggestions, setSuggestions } = useContext(DebounceContext);

  return (
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
  );
};

export default Suggestions;
