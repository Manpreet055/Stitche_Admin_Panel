import React from "react";
import InboxListComp from "./InboxListComp";
import inboxData from "./inbox.json";
import Pagination from "../../../Utilities/Pagination";
import { motion } from "framer-motion";
import { container, item } from "../../../Animations/ListStagger";

const RenderInbox = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={container}
      className="h-screen pb-56 w-full overflow-scroll pt-10 scrollbar-hidden"
    >
      <header className="text-lg w-full ">
        <ul className="grid text-xl font-semibold border border-gray-500 px-4 py-6 rounded-t-2xl grid-cols-[100px_220px_250px_300px_1fr_100px_80px_100px] w-full">
          <li>Serial</li>
          <li>Favourites</li>
          <li>Name</li>
          <li>Email</li>
          <li>Message</li>
          <li>Status</li>
          <li>Role</li>
          <li></li>
        </ul>
      </header>
      <Pagination data={inboxData}>
        {inboxData.map((message, index) => (
          <motion.li variants={item} key={index}>
            <InboxListComp serial={index + 1} inbox={message} />
          </motion.li>
        ))}
      </Pagination>
    </motion.ul>
  );
};

export default RenderInbox;
