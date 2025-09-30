import React, { useState, useRef } from "react";
import toggleStarred from "../../../Utilities/inbox/ToggleStarred";
import deleteRequest from "../../../Utilities/DeleteRequest";
import readMessage from "../../../Utilities/inbox/ReadMessage";
import { Trash2, Mail, MailOpen, Eye, EllipsisVertical } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const InboxListComp = ({ inbox, serial }) => {
  const [loadingState, setLoadingState] = React.useState(false);
  const {
    id,
    senderEmail,
    senderName,
    message,
    recipientName,
    subject,
    isRead: initialState,
    isStarred: initialStarred,
  } = inbox;

  const [read, setRead] = useState(initialState);
  const [starred, setStarred] = useState(initialStarred);
  const [options, showOptions] = React.useState(false);

  // to show option on hiver
  const timeref = useRef(null);
  const handleHoverStart = () => {
    clearTimeout(timeref.current);
    showOptions(true);
  };

  const handleHoverEnd = () => {
    timeref.current = setTimeout(() => {
      showOptions(false);
    }, 500);
  };

  return (
    <ul
      className={`py-2 w-full ${
        serial % 2 == 0 && "bg-[#dacaa4]/40"
      }  grid grid-cols-[50px_150px_250px_300px_1fr_80px_100px_100px] px-6 place-items-center  cursor-pointer text-lg`}
    >
      <li>{serial}</li>
      <li>
        <input
          type="checkbox"
          checked={starred}
          className={`${loadingState ? "cursor-progress" : "cursor-pointer"} `}
          id="starred"
          onChange={(event) =>
            toggleStarred(event.target.checked, id, setStarred, setLoadingState)
          }
        />
      </li>
      <li>{senderName}</li>
      <li>{senderEmail}</li>

      <li className="w-full justify-self-start pl-10">
        <div className="w-full ">
          <h2 className="w-full">{subject}</h2>
          <p className={`text-neutral-300 max-w-lg truncate `}>{message}</p>
        </div>
      </li>

      <li>
        {read ? (
          <div className="flex flex-col place-items-center">
            <MailOpen />
            <p className="text-sm text-neutral-300">Read</p>
          </div>
        ) : (
          <div className="flex flex-col place-items-center">
            <Mail />
            <p className="text-sm text-neutral-300">Unread</p>
          </div>
        )}
      </li>
      <li>{recipientName}</li>
      <li className="relative">
        <motion.button
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onClick={() => showOptions((prev) => !prev)}
        >
          <EllipsisVertical />
        </motion.button>
        <AnimatePresence>
          {options && (
            <motion.ul
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="absolute flex flex-col  gap-3 right-3 top-8 rounded-2xl theme z-90 pr-6 pl-3 py-4"
            >
              <li>
                <button
                  onClick={() => deleteRequest(id, setLoadingState)}
                  className={`flex gap-2 items-center ${
                    loadingState ? "cursor-progress" : "cursor-pointer"
                  } `}
                >
                  {" "}
                  <Trash2 />
                  Delete
                </button>
              </li>
              <li>
                <button
                  className={`flex gap-2 items-center ${
                    loadingState ? "cursor-progress" : "cursor-pointer"
                  } `}
                  onClick={() =>
                    readMessage(read, id, setLoadingState, setRead)
                  }
                >
                  {" "}
                  <Eye />
                  View
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </ul>
  );
};

export default InboxListComp;
