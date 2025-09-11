import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import clickEvent from "../../Utilities/Animations/onClick";

const ErrorPage = () => {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate(-1);
  };
  const GoHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full px-12 lg:px-36 flex flex-wrap justify-around  md:items-center h-screen">
      <img
        className="w-[50vw] lg:w-[25vw]"
        src="/src/assets/ErrorPageImg.svg"
        alt="ErrorImage"
      />
      <div className=" flex flex-col items-center lg:items-start gap-8 ">
        <span className="md:text-9xl text-6xl font-semibold">404</span>
        <p className="text-xl max-w-sm text-center lg:max-w-2xl font-medium">
          <span className="text-xl md:text-2xl text-center">Oops!! </span>
          The page you are looking does not exist.
        </p>
        <div className="flex flex-wrap w-full justify-center lg:justify-start  gap-4">
          <motion.button
            variants={clickEvent}
            initial="default"
            whileHover="hover"
            whileTap="click"
            onClick={GoBack}
            className="button-style"
          >
            Go Back
          </motion.button>
          <motion.button
            variants={clickEvent}
            initial="default"
            whileHover="hover"
            whileTap="click"
            onClick={GoHome}
            className="button-style"
          >
            Go Home
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
