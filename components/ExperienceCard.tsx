/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import { Tooltip } from "@mui/material";
import { IExpData } from "./data-define.model";

type Props = {
  expData: IExpData;
};

const ExperienceCard = (props: Props) => {
  let workTypeIcon;
  switch (props.expData.icon) {
    case "code":
      workTypeIcon = <CodeRoundedIcon />;
      break;
    case "computer":
      workTypeIcon = <ComputerRoundedIcon />;
      break;
    case "history":
      workTypeIcon = <WorkHistoryRoundedIcon />;
      break;
    default:
      workTypeIcon = <CodeRoundedIcon />;
      break;
  }

  return (
    <div className="flex flex-col items-center justify-end mb-4 flex-shrink-0 text-sm md:text-base">
      <div className="h-full text-left mx-2 px-6 py-4 w-[22rem] md:w-[24rem] rounded-xl backdrop-blur-sm bg-[#4C566A]/30 text-[#D8DEE9] xl:w-[28rem] snap-center cursor-default hover:bg-[#4C566A]/50 duration-200">
        <div className="mb-2">
          <span className="font-bold text-lg">{props.expData.year}</span>
          <span className="font-light ml-2">( {props.expData.period} )</span>
        </div>
        <div className="flex flex-row gap-2 mb-2">
          {/* devicon */}
          <span className="flex flex-row gap-2">
            {props.expData.skills.devicon &&
              props.expData.skills.devicon.map((element, idx) => {
                return (
                  <Tooltip title={element.tooltip}>
                    <i className={`${element.icon} text-lg`} key={idx}></i>
                  </Tooltip>
                );
              })}
          </span>

          {/* imgages */}
          <span className="flex flex-row items-center gap-2">
            {props.expData.skills.img &&
              props.expData.skills.img.map((element, idx) => {
                return (
                  <Tooltip title={element.tooltip}>
                    <img className="w-5 h-5" src={element.icon} key={idx} />
                  </Tooltip>
                );
              })}
          </span>
        </div>
        <div className="mb-4">
          <span className="text-base font-medium my-2 mr-4">
            {props.expData.company}
          </span>
          <br />
          <span className="text-[#88C0D0]">{props.expData.title}</span>
        </div>
        <ul className="list-disc text-xs font-thin ml-4">
          {props.expData.description.map((element, idx) => {
            return (
              <li className="mb-2" key={idx}>
                {element}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-[#4C566A] w-[1px] h-[4rem]"></div>
      <div className="flex flex-col items-center">
        <div className="bg-[#4C566A] w-[30rem] h-[1px]"></div>
        <div className="flex items-center justify-center text-[#4c566a] bg-[#88C0D0] p-2 rounded-full -mt-5">
          {workTypeIcon}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
