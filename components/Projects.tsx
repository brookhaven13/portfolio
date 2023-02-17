/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Masonry from "@mui/lab/Masonry";
import projectData from "./../data/projects.json";

import PreviewIcon from "@mui/icons-material/Preview";
import GitHubIcon from "@mui/icons-material/GitHub";

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
        <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory md:p-4 scrollbar- scrollbar-thin scrollbar-track-[#E5E9F0]/25 scrollbar-thumb-[#88C0D0] scrollbar-thumb-rounded">
          <Masonry
            className="xs: px-2"
            columns={{ xs: 2, sm: 3, md: 3 }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {projectData.map((element, index) => {
              return (
                <div key={index} className="flex flex-col justify-center gap-1">
                  <div className="cursor-pointer flex flex-col flex-wrap gap-2 justify-evenly items-center text-sm text-white text-medium">
                    {element.name}
                  </div>
                  <div className="relative overflow-hidden bg-no-repeat bg-cover w-full">
                    <img
                      className="rounded-lg hover:scale-110 transition duration-300"
                      src={element.image}
                    />
                    <div className="absolute rounded top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 text-white text-xs hover:opacity-90 transition duration-300 ease-in-out bg-slate-800">
                      <div className="w-full h-full flex flex-wrap flex-col justify-evenly items-center gap-2 p-4">
                        <div className="font-thin">{element.description}</div>
                        <div className="flex flex-rol flex-wrap gap-3 text-xs text-white">
                          {element.skills?.map((skill, index) => {
                            return (
                              <span
                                className="flex flex-rol gap-1 items-center pr-1"
                                key={index}
                              >
                                <i
                                  className={`${skill.icon} text-base md:text-sm`}
                                ></i>
                                {skill.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 text-xs">
                    Links:
                    {element.github ? (
                      <GitHubIcon
                        className="cursor-pointer w-5"
                        onClick={() => {
                          window.open(element.demo, "_blank");
                        }}
                      />
                    ) : null}
                    <PreviewIcon
                      className="cursor-pointer"
                      onClick={() => {
                        window.open(element.demo, "_blank");
                      }}
                    />
                  </div>
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
