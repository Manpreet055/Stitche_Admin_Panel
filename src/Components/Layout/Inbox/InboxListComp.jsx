import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ToggleStarred from "../../../Utilities/inbox/ToggleStarred";
import {
  EllipsisVertical,
  Reply,
  Eye,
  Trash2,
  Mail,
  MailOpen,
} from "lucide-react";
import axios from "axios";

const InboxListComp = ({ inbox, serial }) => {
  const [loadingState, setLoadingState] = React.useState();
  const {
    id,
    senderEmail,
    senderName,
    message,
    recipientName,
    subject,
    isRead,
    isStarred: initialStarred,
  } = inbox;

  const [starred, setStarred] = useState(initialStarred);

  const [options, showOptions] = React.useState(false);

  return (
    <ul
      className={`py-2 w-full ${
        serial % 2 == 0 && "bg-[#dacaa4]/40"
      }  grid grid-cols-[50px_150px_250px_300px_1fr_80px_100px_50px] px-6 place-items-center  cursor-pointer text-lg`}
    >
      <li>{serial}</li>
      <li>
        <input
          type="checkbox"
          checked={starred}
          className={`${loadingState ? "cursor-progress" : "cursor-pointer"} `}
          id="starred"
          onChange={(event) =>
            ToggleStarred(event.target.checked, id, setStarred, setLoadingState)
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
        {isRead ? (
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
        <button onClick={() => showOptions((prev) => !prev)}>
          <EllipsisVertical />
        </button>
        {options && (
          <ul className="absolute flex flex-col gap-3 right-10 top-10 bg-white text-black z-90 pr-6 pl-3 py-4">
            <li className=" flex gap-2 items-center">
              <button className=" flex gap-2 items-center">
                <Reply />
                Reply
              </button>
            </li>
            <li>
              <button className=" flex gap-2 items-center">
                {" "}
                <Trash2 />
                Delete
              </button>
            </li>
            <li className=" flex gap-2 items-center">
              <Eye />
              View
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default InboxListComp;
