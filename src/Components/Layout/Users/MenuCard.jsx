import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EllipsisVertical, Trash2, Eye } from "lucide-react";
import deleteRequest from "../../../Utilities/DeleteRequest";

const MenuCard = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [options, showOptions] = useState(false);
  // to show option on hiver
  const timeref = useRef(null);
  const handleHoverStart = () => {
    clearTimeout(timeref.current);
    showOptions(true);
  };

  const handleHoverEnd = () => {
    timeref.current = setTimeout(() => {
      showOptions(false);
    }, 500);
  };
  return (
    <div>
      <li className="flex flex-col">
        <motion.button
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => showOptions((prev) => !prev)}
          className="relative z-30"
        >
          <EllipsisVertical />
        </motion.button>
        <AnimatePresence>
          {options && (
            <motion.div
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="absolute rounded-2xl theme p-4 w-[150px] top-10 right-5  theme   flex flex-col gap-3 items-start"
            >
              <button
                onClick={() => deleteRequest(id, setLoadingState)}
                className={`${
                  loadingState ? "cursor-progress" : "cursor-pointer"
                } flex gap-2 items-center z-[999]`}
              >
                <Trash2 />
                Delete
              </button>
              <button
                onClick={() => showFullDetails((prev) => !prev)}
                className="flex gap-2 items-center z-[999]"
              >
                <Eye />
                Details
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </div>
  );
};

export default MenuCard;
