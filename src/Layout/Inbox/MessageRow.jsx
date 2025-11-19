import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MessageRow = ({ inbox }) => {
  const { _id, user, messages, subject } = inbox;
  const { email: senderEmail, name: senderName } = user;
  const totalUnreadMessages = messages.filter((text) => text.isRead === false);

  const isRead = messages.some((text) => text.isRead === false); //find any unread messages
  const [read, setRead] = useState(!isRead);
  const [loadingState, setLoadingState] = useState(false);

  const navigate = useNavigate();
  const goToChat = () => {
    navigate(`/inbox/chats/${_id}`);
  };

  return (
    <ul
      onClick={goToChat}
      className={`py-2 w-full  border-b border-gray-300 grid grid-cols-[250px_300px_1fr_230px] px-6 place-items-center  ${
        loadingState ? "cursor-progress" : "cursor-pointer"
      } text-lg`}
    >
      <li>{senderName}</li>
      <li className="justify-self-start">{senderEmail}</li>

      <li className="w-full justify-self-start pl-10">
        <h2 className="w-full">{subject}</h2>
        <p className={`text-neutral-500 max-w-lg truncate `}>
          {messages.at(-1).text}
        </p>
      </li>

      <li className="primary-bg w-7 rounded-full text-center  ">
        {Number(totalUnreadMessages.length) !== 0 && totalUnreadMessages.length}
      </li>
    </ul>
  );
};

export default MessageRow;
