import React, { useEffect, useState } from "react";
import SendMessagesForm from "../../Layout/Inbox/SendMessagesForm";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import ProfileDropDown from "../../Layout/Navbar/ProfileDropDown";
import ChatDropdown from "../../Layout/Inbox/ChatDropdown";
import BackButton from "../../ui/BackButton";
import { fetchAllDataById } from "../../services/fetchData";
import AsyncBoundary from "../../ui/AsyncBoundary";

const ChatPage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState("");
  const [conversation, setConversation] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    try {
      fetchAllDataById("inbox", id, setLoadingState, setError).then((data) =>
        setConversation(data),
      );
    } catch (err) {
      setError(err?.message ?? err ?? "Failed to load Chat");
    }

  }, [id]);

  if (loadingState) {
    return <AsyncBoundary loadingState={true} errorState={null} />;
  }
  if (error) {
    return <AsyncBoundary loadingState={false} errorState={error} />;
  }

  if (
    typeof conversation !== "object" ||
    Object.keys(conversation).length === 0
  ) {
    return <AsyncBoundary customMessage="No Chat found." />;
  }

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
    messages[0],
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
    <section className="h-screen flex flex-col  w-full p-4 ">
      <div className="flex items-center justify-between  border-b border-gray-500 w-full p-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <ProfileDropDown
            userEmail={senderEmail}
            userName={senderName}
            profilePic={profilePic}
          >
            <div className="text-sm flex items-center pt-5 flex-col">
              <div className="text-lg hiddn">Last seen</div>
              {latestDate}
              {", "}
              {latestTime}
            </div>
          </ProfileDropDown>
        </div>

        <div className="flex items-center gap-4">
          {initialStarred && <Star />}
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
                className={`w-fit flex flex-col justify-start max-w-[70%] sm:max-w-[50%] p-4 rounded-2xl ${
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
        <SendMessagesForm id={conversationId} />
      </div>
    </section>
  );
};

export default ChatPage;
