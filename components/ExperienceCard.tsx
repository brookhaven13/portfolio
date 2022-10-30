import React from "react";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="rounded-xl backdrop-blur-sm bg-[#ECEFF4]/10 text-[#D8DEE9] mx-2 px-6 py-4">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit omnis sed fugiat sequi iure! Et nostrum, nobis, eveniet
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit omnis sed fugiat sequi iure! Et nostrum,
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit omnis sed fugiat sequi iure! Et nostrum,
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit omnis sed fugiat sequi iure! Et nostrum,
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit omnis sed fugiat sequi iure! Et nostrum,
          </li>
        </ul>
      </div>
      <div className="bg-[#434C5E] w-[1px] h-[4rem]"></div>
      <div className="flex flex-col items-center">
        <div className="bg-[#434C5E] w-[20rem] h-[1px]"></div>
        <div className="flex items-center justify-center bg-[#4C566A] p-2 rounded-full -mt-5">
          <CodeRoundedIcon />
        </div>
        <div className="font-noto-sans font-bold text-lg">2018</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
