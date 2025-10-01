import React from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
const SendMessages = () => {
  const { register, handleSubmit } = useForm();
  const submitChat = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submitChat)}
      className="bg-gray-900 rounded-2xl w-full max-w-7xl  fixed bottom-0 border border-gray-500 bo p-6"
    >
      <div className="w-full place-items-center grid grid-cols-[1fr_100px]  h-full">
        <input
          className="text-white text-wrap h-full w-full text-lg focus:outline-none"
          {...register("Message")}
          type="text"
          placeholder="Type a Messages..."
        />
        <button>
          <Send size={28} />
        </button>
      </div>
    </form>
  );
};

export default SendMessages;
