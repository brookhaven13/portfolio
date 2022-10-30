/* eslint-disable react/jsx-key */
import React from "react";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";

type Props = {
  expData: {
    icon: string;
    year: string;
    period: string;
    company: string;
    title: string;
    description: string[];
    skills: string[];
  };
};

const ExperienceCard = (props: Props) => {
  let icon;
  switch (props.expData.icon) {
    case "code":
      icon = <CodeRoundedIcon />;
      break;
    case "computer":
      icon = <ComputerRoundedIcon />;
      break;
    case "history":
      icon = <WorkHistoryRoundedIcon />;
      break;
    default:
      icon = <CodeRoundedIcon />;
      break;
  }

  return (
    <div className="flex flex-col items-center mb-4 flex-shrink-0 text-sm md:text-base">
      <div className="text-left mx-2 px-6 py-4 w-[22rem] md:w-[24rem] rounded-xl backdrop-blur-sm bg-[#4C566A]/30 text-[#D8DEE9] xl:w-[28rem] snap-center cursor-default hover:bg-[#4C566A]/50 duration-200">
        <div className="mb-2">
          <span className="font-bold text-lg">{props.expData.year}</span>
          <span className="font-light ml-2">( {props.expData.period} )</span>
        </div>
        <div className="mb-4">
          <span className="text-base font-medium my-2 mr-4">
            {props.expData.company}
          </span>
          <span className="text-[#88C0D0]">{props.expData.title}</span>
        </div>
        <ul className="list-disc text-xs font-thin ml-4">
          {props.expData.description.map((e) => {
            return <li className="mb-2">{e}</li>;
          })}
        </ul>
      </div>
      <div className="bg-[#4C566A] w-[1px] h-[4rem]"></div>
      <div className="flex flex-col items-center">
        <div className="bg-[#4C566A] w-[30rem] h-[1px]"></div>
        <div className="flex items-center justify-center text-[#4c566a] bg-[#88C0D0] p-2 rounded-full -mt-5">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
