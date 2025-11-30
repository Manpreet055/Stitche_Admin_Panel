import { Toast, ToastToggle } from "flowbite-react";
import { motion } from "framer-motion";

const ToastComp = ({ text = "", icon }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center absolute left-[50%]"
    >
      <Toast className="primary-bg items-center flex">
        {icon && (
          <div className=" p-1 ustify-center rounded-lg bg-amber-50 ">
            {icon}
          </div>
        )}
        <div className="ml-3 font-normal mr-3">{text}</div>
        <ToastToggle
          className="text-lg rounded-xl hover:bg-white p-1 transition-all ease-in-out"
          theme=""
        />
      </Toast>
    </motion.div>
  );
};

export default ToastComp;
