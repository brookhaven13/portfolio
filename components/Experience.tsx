import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex flex-col h-screen text-center md:text-left  max-w-7xl justify-evenly items-center mx-auto">
      <h3 className="uppercase mt-8 tracking-[20px] text-[#ECEFF4] text-2xl drop-shadow-xl">
        Experience
      </h3>
      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
