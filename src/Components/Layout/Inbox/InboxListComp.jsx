import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EllipsisVertical, Reply, Eye, Trash2 } from "lucide-react";

const InboxListComp = ({ inbox,serial }) => {
  const {
    senderEmail,
    senderName,
    message,
    recipientName,
    subject,
    isStarred,
  } = inbox;

  const [options, showOptions] = React.useState(false);

  return (
    <ul className=" py-4 w-full cursor-pointer px-10 grid grid-cols-[50px_150px_250px_300px_1fr_100px_50px]  text-lg">
      <li>{serial}</li>
      <li className="justify-self-center">
        <input
          type="checkbox"
          checked={isStarred ? true : false}
          name=""
          id=""
          readOnly
        />
      </li>
      <li className="justify-self-center">{senderName}</li>
      <li>{senderEmail}</li>

      <li>
        <div className="w-full flex flex-col -start">
          <h2 className="w-full">{subject}</h2>
          <p className={`text-neutral-300 max-w-xl truncate`}>{message}</p>
        </div>
      </li>

      <li>{recipientName}</li>
      <li className="relative">
        <button onClick={()=>showOptions(prev=>!prev)}><EllipsisVertical /></button>
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
