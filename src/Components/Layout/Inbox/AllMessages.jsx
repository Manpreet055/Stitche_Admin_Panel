import React from "react";
import MessageRow from "./MessageRow";
import inboxData from "./inbox.json";
import Pagination from "../../../ui/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../../Animations/ListStagger";

const AllMessages = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={container}
      className="h-screen pb-56 w-full min-w-fit overflow-x-scroll pt-11 scrollbar-hidden"
    >
      {/* Table headings */}
        <ul className="grid text-xl min-w-fit font-semibold primary-bg px-4 py-5 rounded-t-2xl grid-cols-[100px_250px_340px_1fr_230px] w-full">
          <li>Serial</li>
          <li>From</li>
          <li>Email</li>
          <li>Message</li>
          <li>Notifications</li>
          <li></li>
        </ul>
      <Pagination data={inboxData}>
        {inboxData.map((message, index) => (
          <motion.li variants={item} key={index}>
            <MessageRow serial={index + 1} inbox={message} />
          </motion.li>
        ))}
      </Pagination>
    </motion.ul>
  );
};

export default AllMessages;
