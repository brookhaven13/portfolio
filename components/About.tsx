import React from "react";
import { motion } from "framer-motion";
import avatar from "./../public/avatar.jpg";
import about from "./../data/about.json";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col h-screen text-center md:text-left  max-w-7xl justify-evenly items-center mx-auto">
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
      >
        <p className="custom-mask relative top-10 md:top-20 md:-left-36 -left-24 font-noto-sans font-black text-7xl md:text-8xl tracking-wider">
          01
        </p>

        <h3 className="uppercase mt-8 tracking-[20px] text-[#ECEFF4] text-2xl drop-shadow-xl">
          About Me
          <div className="bg-[#434C5E] w-[17rem] h-[1px] mt-1"></div>
          <div className="bg-[#88C0D0] w-12 h-1 -mt-[3px]"></div>
        </h3>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col items-center gap-1 md:gap-4 h-auto md:flex-row"
      >
        <motion.img
          initial={{
            x: -200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          src={avatar.src}
          className="md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:ml-8 md:rounded-3xl md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
        />
        <motion.div
          initial={{
            x: 200,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          className="text-[#D8DEE9] text-xs text-left px-6 font-thin md:px-9 md:text-sm xl:text-base"
        >
          <h4 className="text-[#ECEFF4] text-base text-center md:text-left lg:text-lg lg:text-left xl:text-2xl xl:mb-8 xl:text-left">
            {about.title}
          </h4>
          {about.paragraph.map((p, idx) => {
            return (
              <p className="mt-2" key={idx}>
                {p}
              </p>
            );
          })}
          <div className="mt-4">
            <h4 className="text-[#ECEFF4] text-sm">{about.status.title}</h4>
            <ul>
              {about.status.list.map((p, idx) => {
                return (
                  <li className="text-xs mt-1 ml-4 list-disc" key={idx}>
                    {p}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
