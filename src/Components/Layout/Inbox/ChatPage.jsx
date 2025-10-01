import React from "react";
import SendMessages from "./SendMessages";
import { EllipsisVertical } from "lucide-react";
import { useParams } from "react-router-dom";
import inboxData from "./inbox.json"
const ChatPage = () => {
  const {conversationId} = useParams();
  const conversation = inboxData.find((convo)=>(
      String(convo.conversationId) === String(conversationId)
  ))
 
  const { user, messages } = conversation;
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

  return (
    <div className="h-screen flex flex-col  w-full p-4 ">
      <div className="flex items-center justify-between  border-b border-gray-500 w-full p-2">
        {/* Navbar container userInfo */}
        <div className="flex items-center gap-6">
          <img
            src={profilePic}
            alt="ProfilePic"
            className="h-8 rounded-full "
          />
          <span className="text-xl font-medium">{senderName}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm flex flex-col">
            <div className="text-lg">Last seen</div>
            {latestDate}
            {", "}
            {latestTime}
          </div>
          <button>
            <EllipsisVertical />
          </button>
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
                    ? "bg-blue-600 text-white"
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
        <SendMessages />
      </div>
    </div>
  );
};

export default ChatPage;
