import { Toast, ToastToggle } from "flowbite-react";
import {motion} from "framer-motion"

const ToastComp = ({ text = "", icon }) => {
  return (
   <motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:0.8}} transition={{duration:0.3}} className="flex justify-center absolute left-[50%]">
     <Toast  className="primary-bg gap-3 flex">
      {icon && (
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          {icon}
        </div>
      )}
      <div className="ml-3 text-sm font-normal">{text}</div>
      <ToastToggle />
    </Toast>
   </motion.div>
  );
};

export default ToastComp;
