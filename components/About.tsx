import React from "react";
import { motion } from "framer-motion";
import avatar from "./../public/avatar.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center mx-auto">
      <h3 className="uppercase absolute top-24 tracking-[20px] text-slate-300 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.1,
        }}
        viewport={{ once: true }}
        src={avatar.src}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />
    </div>
  );
};

export default About;
