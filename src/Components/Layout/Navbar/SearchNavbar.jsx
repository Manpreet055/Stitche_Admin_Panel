import Reac, { useState, useRef } from "react";
import { ListFilter, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const SearchNavbar = ({ children, searchBar, filter }) => {
  const [filters, showFilters] = useState(false);

  // Show FIlters form on Hover using this function
  const timeref = useRef(null);
  const handleHoverStart = () => {
    clearTimeout(timeref.current);
    showFilters(true);
  };

  const handleHoverEnd = () => {
    timeref.current = setTimeout(() => {
      showFilters(false);
    }, 500);
  };

  return (
    <nav className="relative w-full h-auto min-w-full justify-between mx-5 items-center flex py-3">
      <div className="flex flex-col md:flex-row items-center gap-y-10">
        {searchBar} 
        <motion.button
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => showFilters((prev) => !prev)}
          className="flex items-center w-full gap-3 text-xl"
        >
          <ListFilter />
          Filters
          <div
            className={`${
              filters ? "rotate-0" : "rotate-180"
            } transition ease-in-out duration-300`}
          >
            <ChevronUp />
          </div>
        </motion.button>
        <AnimatePresence>
          {filters && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="min-w-2xl"
            >
              {filter}{" "}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {children}{" "}
    </nav>
  );
};

export default SearchNavbar;
