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
    <nav className="relative w-full sm:mx-5  flex py-3">
      <div className="flex flex-col md:flex-row items-start justify-between sm:items-center gap-y-10">
        {searchBar}
        <div className="w-full flex justify-between">
          <motion.button
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={() => showFilters((prev) => !prev)}
            className="flex items-center w-fit gap-3 text-xl"
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
          {children}{" "}
        </div>
        <AnimatePresence>
          {filters && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="w-auto"
            >
              {filter}{" "}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default SearchNavbar;
