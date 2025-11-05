import React, { useEffect, useState } from "react";
import MessageRow from "./MessageRow";
import Paginate from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
import { fetchAllData } from "../../services/fetchData";
import AsyncBoundary from "../../ui/AsyncBoundary";

const AllMessages = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 15;
  useEffect(() => {
    const inbox = async () => {
      try {
        const data = await fetchAllData(
          "inbox",
          setLoadingState,
          setError,
          setAllMessages,
          page,
          limit,
        );
        setAllMessages((prev) => prev.messages);
        setTotalPages(data?.totalPages ?? 1);
      } catch (err) {
        setError(err?.message ?? "Failed to load Messages");
      }
    };
    inbox();
  }, [page]);

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
      <Paginate setPage={setPage} totalPages={totalPages} currentPage={page} />
    </motion.div>
  );
};

export default AllMessages;
