import React, { useEffect, useState } from "react";
import MessageRow from "../../Layout/Inbox/MessageRow";
import Paginate from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
import AsyncBoundary from "../../ui/AsyncBoundary";
import useInbox from "../../Hooks/useInbox";
import SortData from "../../ui/SortData";
const AllMessages = () => {
  const {
    loadingState,
    error,
    allMessages,
    currentPage,
    query,
    setQuery,
    totalPages,
    setCurrentPage,
  } = useInbox();

  const sortOptions = [
    {
      title: "Starred",
      field: "isStarred",
      order: "desc",
    },
  ];
  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (!Array.isArray(allMessages) || allMessages.length === 0) {
    return <AsyncBoundary customMessage="No message found." />;
  }
  return (
    <div className="w-full h-full">
      <SortData sortOptions={sortOptions} query={query} setQuery={setQuery} />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="h-screen min-w-fit pb-56 w-full overflow-scroll pt-10 scrollbar-hidden "
      >
        {/* Table headings */}
        <ul className="grid w-full text-xl font-semibold primary-bg px-4 py-5 rounded-t-2xl grid-cols-[300px_340px_1fr_230px]">
          <li className="text-center">From</li>
          <li>Email</li>
          <li>Message</li>
          <li className="text-center">Notifications</li>
        </ul>
        {allMessages.map((message, index) => (
          <motion.li variants={item} key={index}>
            <MessageRow inbox={message} />
          </motion.li>
        ))}
        <Paginate
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </motion.div>
    </div>
  );
};

export default AllMessages;
