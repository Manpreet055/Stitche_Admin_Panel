import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchChat from "../../../Utilities//inbox/FetchChat";
const InboxListComp = ({ inbox, serial }) => {
  const { conversationId, user, messages, subject } = inbox;
  const { email: senderEmail, name: senderName } = user;
  const totalUnreadMessages = messages.filter((text) => text.isRead === false);

  const isRead = messages.some((text) => text.isRead === false);
  const [read, setRead] = useState(!isRead);
  const [loadingState, setLoadingState] = useState(false);

  const navigate = useNavigate();
  const goToChat = () => {
    navigate(`/chats/${conversationId}`);
  };

  return (
    <ul
      onClick={async () => {
        if (!loadingState) {
          await fetchChat(read, conversationId, setLoadingState, setRead);
          goToChat();
        }
      }}
      className={`py-2 w-full border-b border-gray-300 grid grid-cols-[80px_250px_300px_1fr_80px_100px] px-6 place-items-start  ${
        loadingState ? "cursor-progress" : "cursor-pointer"
      } text-lg`}
    >
      <li>{serial}</li>
      <li>{senderName}</li>
      <li className="justify-self-start">{senderEmail}</li>

      <li className="w-full justify-self-start pl-10">
        <div className="w-full ">
          <h2 className="w-full">{subject}</h2>
          <p className={`text-neutral-500 max-w-lg truncate `}>
            {messages.at(-1).text}
          </p>
        </div>
      </li>

      <li className="primary-bg w-7 rounded-full text-center ">
        {Number(totalUnreadMessages.length) !== 0 && totalUnreadMessages.length}
      </li>
    </ul>
  );
};

export default InboxListComp;
