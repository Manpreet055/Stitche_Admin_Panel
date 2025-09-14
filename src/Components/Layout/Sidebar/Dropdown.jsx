import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { container,item } from "../../../Animations/ListStagger";
const Dropdown = ({
  textSize,
  children,
  buttonName = "Menu",
  buttonIcon = null,
  abso = false,
  buttonBg = null,
  fullWidth = false,
  listBg
}) => {

  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <section className={` ${fullWidth && "w-full"} max-w-xl h-fit`}>
      <button
        className={`flex  justify-between items-center w-full gap-2 ${buttonBg}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={`flex gap-2 items-center ${textSize}`}>
          {buttonIcon}
          {buttonName}
        </div>
        <div
          className={`${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-all duration-500 ease-in-out`}
        >
          <ChevronUp />
        </div>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className={`origin-top overflow-hidden p-4 gap-6 transition-all duration-300 ${abso && "absolute"} ease-in-out flex flex-col justify-between text-xl ${listBg}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.ul 
  variants={container}
            initial="hidden"
            animate="show"
            >
              {React.Children.map(children, (child, index) => (
                <motion.li className="w-full text-nowrap " variants={item} key={index}>{child}</motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Dropdown;
