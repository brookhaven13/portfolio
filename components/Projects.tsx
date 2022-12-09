/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Masonry from "@mui/lab/Masonry";
import projectData from "./../data/projects.json";

type Props = {};

const Projects = (props: Props) => {
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
        <p className="custom-mask relative top-10 md:top-20 md:-left-36 -left-28 font-noto-sans font-black text-7xl md:text-8xl tracking-wider">
          03
        </p>

        <h3 className="uppercase mt-8 tracking-[20px] text-[#ECEFF4] text-2xl drop-shadow-xl">
          Projects
          <div className="bg-[#434C5E] w-[16rem] h-[1px] mt-1"></div>
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
          duration: 2,
        }}
      >
        <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory p-4 md:p-6 scrollbar- scrollbar-thin scrollbar-track-[#E5E9F0]/25 scrollbar-thumb-[#88C0D0] scrollbar-thumb-rounded">
          <Masonry columns={3} spacing={2}>
            {projectData.map((element, index) => {
              return (
                <div key={index}>
                  <img src={element.image} />
                  <span key={element.name}>{element.name}</span>
                </div>
              );
            })}
          </Masonry>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
