import React from "react";
import SendMessages from "./SendMessages";
import { Star, ChevronLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import inboxData from "./inbox.json";
import ProfileDropDown from "../Navbar/ProfileDropDown";
import ChatDropdown from "./ChatDropdown";

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    console.log("Id is not valid or found...");
    return;
  }

  // ---------------------------------
  // This entire block fetch users info
  const conversation = inboxData.find((c) => String(c.conversationId) == id); //Finding the chat
  const {
    user,
    messages,
    isStarred: initialStarred,
    conversationId,
  } = conversation;
  const { email: senderEmail, name: senderName, profilePic } = user;

  // Extract the latest message timestamp
  const latestMessage = messages.reduce(
    (latest, msg) =>
      new Date(msg.timestamp) > new Date(latest.timestamp) ? msg : latest,
    messages[0]
  );

  // Convert to Date object
  const dateObj = new Date(latestMessage.timestamp);

  // Format to 12-hour with AM/PM
  const latestTime = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Format to readable date
  const latestDate = dateObj.toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // ------------------------------------------------
  return (
    <div className="h-screen flex flex-col  w-full p-4 ">
      {!id && <div className="absolute inset-0">Loading</div>}
      <div className="flex items-center justify-between  border-b border-gray-500 w-full p-2">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center scale-transition hover:underline text-lg"
          >
            <ChevronLeft size={20} />
            Back
          </button>
          <ProfileDropDown
            userEmail={senderEmail}
            userName={senderName}
            profilePic={profilePic}
          />
        </div>

        <div className="flex items-center gap-4">
          {initialStarred && <Star />}
          <div className="text-sm flex flex-col">
            <div className="text-lg">Last seen</div>
            {latestDate}
            {", "}
            {latestTime}
          </div>
          <ChatDropdown
            conversationId={conversationId}
            initialStarred={initialStarred}
          />
        </div>
      </div>
      <div className="h-full pb-56 pt-6 flex-1 scrollbar-hidden overflow-scroll">
        <ul className="w-full flex flex-col   gap-6">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`w-full flex ${
                msg.sender.includes("admin") ? "justify-end" : "justify-start"
              } `}
            >
              <div
                className={`w-fit flex flex-col justify-start max-w-[50%] p-4 rounded-2xl ${
                  msg.sender.includes("admin")
                    ? "primary-bg"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center relative">
        <SendMessages id={conversationId} />
      </div>
    </div>
  );
};

export default ChatPage;
