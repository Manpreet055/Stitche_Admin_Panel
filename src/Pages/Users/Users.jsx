import React from "react";
import { container } from "../../Animations/ListStagger";
import { motion } from "framer-motion";
import UserRow from "../../Layout/Users/UserRow";
import Paginate from "../../ui/Pagination";
import AsyncBoundary from "../../ui/AsyncBoundary";
import useUsers from "../../Hooks/useUsers";
import SortData from "../../ui/SortData";
const AllUsers = () => {
  const {
    loadingState,
    error,
    users,
    currentPage,
    totalPages,
    query,
    setQuery,
    setCurrentPage,
  } = useUsers();

  const sortOptions = [
    {
      title: "A to Z",
      field: "profile.fullName",
      order: "desc",
    },
    {
      title: "Z to A",
      field: "profile.fullName",
      order: "asc",
    },
    {
      title: "Verified",
      field: "isVerified",
      order: "desc",
    },
    {
      title: "Active",
      field: "isActive",
      order: "desc",
    },
  ];
  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (!Array.isArray(users) || users.length === 0) {
    return <AsyncBoundary customMessage="No User found." />;
  }

  return (
    <div className="overflow-auto h-screen  w-full scrollbar-hidden ">
      <SortData sortOptions={sortOptions} query={query} setQuery={setQuery} />
      <div className=" pt-10 w-full h-full pb-56 overflow-auto scrollbar-hidden ">
        <motion.ul
          initial="hidden"
          animate="show"
          variants={container}
          className="relative flex min-w-[1250px] flex-col"
        >
          <ul
            className={`py-5 primary-bg rounded-t-2xl px-4  grid grid-cols-[100px_300px_1fr_160px_120px_100px_150px] place-items-center text-xl font-medium border-b border-gray-400 `}
          >
            <li>Sr No.</li>
            <li>User</li>
            <li>Email</li>
            <li>Status</li>
            <li>Role</li>
            <li>Orders</li>
            <li>Last login</li>
          </ul>
          {users.map((user, index) => (
            <UserRow serial={index + 1} key={user.id} user={user} />
          ))}
          <Paginate
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </motion.ul>
      </div>
    </div>
  );
};

export default AllUsers;
