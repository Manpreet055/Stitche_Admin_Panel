import Reac, { useState, useRef } from "react";
import { ListFilter, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

const SearchNavbar = () => {
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
    <nav className="w-full flex gap-10 py-3">
      <SearchBar ></SearchBar>
      <div className="flex items-center relative">
        <motion.button
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => showFilters((prev) => !prev)}
          className="flex items-center gap-3 text-xl"
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
              <Filters></Filters>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default SearchNavbar;
