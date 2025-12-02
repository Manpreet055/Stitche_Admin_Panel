import React, { useEffect, useState } from "react";
import MessageRow from "../../Layout/Inbox/MessageRow";
import Paginate from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
import AsyncBoundary from "../../ui/AsyncBoundary";
import useInbox from "../../Hooks/useInbox";
import SortData from "../../ui/SortData";
import FilterData from "../../ui/FilterData";
import { INBOX_SORTING_OPTIONS } from "../../Utilities/sortingOptions";
import { INBOX_FILTER_OPTIONS } from "../../Utilities/filtersOptions";
const AllMessages = () => {
  const {
    loadingState,
    error,
    allMessages,
    currentPage,
    setQuery,
    totalPages,
    setCurrentPage,
  } = useInbox();

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
      <div className="w-full flex justify-around items-center py-3">
        <SortData sortOptions={INBOX_SORTING_OPTIONS} setQuery={setQuery} />
        <FilterData setQuery={setQuery} filterOptions={INBOX_FILTER_OPTIONS} />
        <button disabled></button>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="h-screen min-w-fit pb-56 w-full overflow-scroll scrollbar-hidden "
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
