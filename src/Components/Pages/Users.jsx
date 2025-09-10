import React, { lazy, Suspense, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchNavbar from "../Layout/Navbar/SearchNavbar"
const RenderUsers = lazy(() => import("../Layout/Users/RenderUsers"));
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import clickEvent from "../../Utilities/Animations/onClick";
import SearchContext from "../../Context/searches/SeachContext";
import SearchValueContext from "../../Context/searches/SearchValueContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Users = () => {
  const { searchItems, setSearchItems } = useContext(SearchContext);
  const { setSearchValue } = useContext(SearchValueContext);

  // Navigate back to the user on buttton click to exit searches
  // Button will only appear  when user search something
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/users");
    setSearchItems(null);
  };
  
  return (
    <section className="w-full p-4 h-screen overflow-y-auto scrollbar-hidden flex flex-col gap-4">
      <h2 className="text-4xl font-semibold">Users</h2>
      <SearchNavbar />
      {searchItems !== null && (
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="blur-bg text-start w-full text-lg items-center   px-3 py-2 flex "
        >
          <motion.button
            variants={clickEvent}
            initial="default"
            whileHover="hover"
            whileTap="click"
            onClick={() => {
              goBack();
              setSearchValue("");
            }}
            className="flex justify-self-start items-center"
          >
            <ChevronLeft></ChevronLeft>
            Back
          </motion.button>
          {typeof searchItems !== "string" && (
            <div className="w-full flex text-xl justify-center">{`Found ${searchItems.length} Results`}</div>
          )}
        </motion.div>
      )}
      <div className="blur-bg px-3 w-full min-w-[900px]">
        <ul
          className={`h-[60px] grid grid-cols-[60px_1fr_2fr_80px_160px_50px_240px] place-items-center text-xl font-medium border-b  border-gray-400`}
        >
          <li>Sr No.</li>
          <li>User</li>
          <li>Email</li>
          <li>Status</li>
          <li>Role</li>
          <li>Orders</li>
          <li>Last login</li>
        </ul>
        <Suspense
          fallback={
            <Skeleton
              height={60}
              count={15}
              baseColor="#29465b"
              highlightColor="#2b547e"
            ></Skeleton>
          }
        >
          <RenderUsers />
        </Suspense>
      </div>
    </section>
  );
};

export default Users;
