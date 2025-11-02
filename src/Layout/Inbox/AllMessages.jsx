import React, { useEffect, useState } from "react";
import MessageRow from "./MessageRow";
import Pagination from "../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../Animations/ListStagger";
import { fetchAllData } from "../../services/fetchData";
const AllMessages = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  useEffect(() => {
    const inbox = async () => {
      try{
        await fetchAllData("inbox", setLoadingState, setError, setAllMessages);
      setAllMessages((prev) => prev.messages);
      }catch(err){
        setError(err?.message ?? "Failed to load Messages")
      }
    };
    inbox();
  }, []);
  return (
    <div className="w-full overflow-x-auto">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="h-full min-w-[1350px] overflow-auto pt-3 sm:pt-11 scrollbar-hidden"
      >
        {/* Table headings */}
        <ul className="grid w-full text-xl font-semibold primary-bg px-4 py-5 rounded-t-2xl grid-cols-[100px_250px_340px_1fr_230px]">
          <li>Serial</li>
          <li>From</li>
          <li>Email</li>
          <li>Message</li>
          <li className="text-center">Notifications</li>
        </ul>
        <Pagination data={allMessages}>
          {allMessages.map((message, index) => (
            <motion.li variants={item} key={index}>
              <MessageRow serial={index + 1} inbox={message} />
            </motion.li>
          ))}
        </Pagination>
      </motion.div>
    </div>
  );
};

export default AllMessages;
