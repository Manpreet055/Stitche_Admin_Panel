import React, { useState, useRef } from "react";
import toggleStarred from "../../Utilities/toggleStarred";
import { Trash2, EllipsisVertical, Star, StarOff } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import deleteRequest from "../../services/deleteRequest";
import { useNavigate, useParams } from "react-router-dom";

const ChatDropdown = ({ conversationId, initialStarred }) => {
  const [loadingState, setLoadingState] = React.useState(false);
  const { id } = useParams();
  const [starred, setStarred] = useState(initialStarred);
  const [options, showOptions] = React.useState(false);
  const navigate = useNavigate();
  // to show option on hover
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
    <div className="">
      <div className="relative">
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
              className="absolute flex flex-col profile-card  gap-3 right-3 top-8 h-44 w-44 text-lg rounded-2xl theme z-90 pr-6 pl-3 py-4"
            >
              <button
                className={`flex gap-2 items-center border-b py-2 ${
                  loadingState ? "cursor-progress" : "cursor-pointer"
                } `}
                onClick={() =>
                  toggleStarred(
                    !starred,
                    conversationId,
                    setStarred,
                    setLoadingState
                  )
                }
              >
                {starred ? <StarOff /> : <Star />}
                {starred ? "Unstar" : "Starred"}
              </button>
              <button
                onClick={() => {
                  if (confirm("Do you really want to delete the Chat ??")) {
                    deleteRequest("inbox", id).then(navigate(-1));
                  }
                }}
                className={`flex gap-2 items-center md:text-lg hover:underline border border-gray-400 rounded-lg p-3 ${
                  loadingState ? "cursor-progress" : "cursor-pointer"
                }`}
              >
                {" "}
                <Trash2 />
                Delete
              </button>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatDropdown;
