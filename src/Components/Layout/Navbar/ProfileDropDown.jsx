import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, Settings2, LogOut, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import growVariants from "../../../Animations/growHeight";

const ProfileDropDown = ({
  userName = "Manpreet",
  userEmail = "not available",
  profilePic = "/src/assets/avatar.png",
  options = false,
}) => {
  const isDark = localStorage.getItem("darkTheme");
  const [theme, setTheme] = useState(isDark === "true");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

 useEffect(()=>{
   if (theme) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  localStorage.setItem(
    "darkTheme",
    document.body.classList.contains("dark-theme")
  );
 },[theme])

  // Show FIlters form on Hover using this function
  const timeref = useRef(null);
  const handleHoverStart = () => {
    clearTimeout(timeref.current);
    setIsDropDownOpen(true);
  };

  const handleHoverEnd = () => {
    timeref.current = setTimeout(() => {
      setIsDropDownOpen(false);
    }, 300);
  };

  return (
    // Profile Button
    <motion.div
      onClick={() => setIsDropDownOpen((prev) => !prev)}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="relative lg:w-xs  flex gap-2 items-center"
    >
      <img className="h-8 rounded-full" src={profilePic} alt="" />
      <div className="flex w-full justify-between pr-20">
        <div className="text-lg">{userName}</div>
        <div
          className={`transition ease-in-out duration-300 ${
            isDropDownOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <ChevronUp />
        </div>
      </div>

      {/* Dropdown Card */}
      <AnimatePresence>
        {isDropDownOpen && (
          <motion.div
            variants={growVariants}
            initial="hidden"
            animate="grow"
            transition="delay"
            exit="hidden"
            className={`origin-top p-4 absolute  rounded-2xl top-15 flex flex-col w-full ${
              options ? "min-h-65" : "min-h-fit"
            } z-[99]  profile-card`}
          >
            <div className="relative flex gap-2 items-center">
              {" "}
              <img className="h-13 rounded-full" src={profilePic} alt="" />
              <div className="flex  justify-center flex-col">
                <div className="text-lg">{userName}</div>
                <div className="max-w-max overflow-hidden   text-neutral-400">
                  {userEmail}
                </div>
              </div>
            </div>
            {options && (
              <>
                <div className="h-fit mt-3 border-t border-gray-400 w-full"></div>

                <div className="flex mt-1 h-full flex-col w-full justify-between items-start">
                  <button className="profile-card-buttons">
                    <Settings2 />
                    Profile Settings
                  </button>
                  <button
                    onClick={() => setTheme((prev) => !prev)}
                    className="profile-card-buttons"
                  >
                    <Sun />
                    Light Mode
                  </button>
                  <div className="h-fit mt-2 border-t border-gray-400 w-full"></div>
                  <button className=" mt-1 profile-card-buttons">
                    <LogOut />
                    Sign Out
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProfileDropDown;
