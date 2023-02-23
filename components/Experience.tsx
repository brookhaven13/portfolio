/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import ExperienceCard from "./ExperienceCard";
import data from "./../data/experience.json";

type Props = {};

const Experience = () => {
  const [expData, setExpData] = useState(data);
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
        <p className="custom-mask relative top-10 md:top-20 md:-left-32 -left-28 font-noto-sans font-black text-7xl md:text-8xl tracking-wider">
          02
        </p>

        <h3 className="uppercase mt-8 tracking-[20px] text-[#ECEFF4] text-2xl drop-shadow-xl">
          Experience
          <div className="bg-[#434C5E] w-[20.5rem] h-[1px] mt-1"></div>
          <div className="bg-[#88C0D0] w-12 h-1 -mt-[3px]"></div>
        </h3>
      </motion.div>
      <div className="w-[38rem]">
        <Carousel
          fullHeightHover={false}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation={"slide"}
          duration={600}
          className="w-full flex flex-col items-center justify-center px-8"
        >
          {/* <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory p-4 md:p-6 scrollbar- scrollbar-thin scrollbar-track-[#E5E9F0]/25 scrollbar-thumb-[#88C0D0] scrollbar-thumb-rounded"> */}
          {expData.map((element: any, idx: number) => {
            return <ExperienceCard expData={element} key={idx} />;
          })}
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
