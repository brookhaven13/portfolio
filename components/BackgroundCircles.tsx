import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1.5, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#D8DEE9] rounded-full h-[300px] w-[300px] mt-16 animate-ping" />
      <div className="absolute border border-[#3b4252] rounded-full h-[400px] w-[400px] mt-16" />
      <div className="absolute border border-[#4c566a] opacity-20 rounded-full h-[600px] w-[600px] mt-16 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
