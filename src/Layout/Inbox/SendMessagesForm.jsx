import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import sendMessages from "../../Utilities/inbox/sendMessages";

const SendMessagesForm = ({ id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // send chat to the Database
  const submitChat = (data) => {
    if (data.text.trim().length === 0) return;
    sendMessages(id, data.text);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(submitChat)}
      className="border-b w-full max-w-7xl fixed bottom-0  p-6"
    >
      <div className="w-full place-items-center grid grid-cols-[1fr_100px]  h-full">
        <input
          className="text-wrap h-full w-full text-lg focus:outline-none"
          {...register("text", {
            required: true,
          })}
          type="text"
          placeholder="Type a Messages..."
        />
        <button
          type="submit"
          className={`${isSubmitting ? "cursor-progress" : "cursor-pointer"} ${
            errors.text && "text-neutral-600"
          }`}
        >
          <Send size={28} />
        </button>
      </div>
    </form>
  );
};

export default SendMessagesForm;
