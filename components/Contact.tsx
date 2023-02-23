import React, { PureComponent } from "react";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";

export class Contact extends PureComponent {
  render() {
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
            04
          </p>

          <h3 className="uppercase mt-8 tracking-[20px] text-[#ECEFF4] text-2xl drop-shadow-xl">
            Contact Me
            <div className="bg-[#434C5E] w-[21rem] h-[1px] mt-1"></div>
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
          <div className="text-left mx-2 px-6 py-4 h-[26rem] w-[24rem] md:w-[28rem] rounded-xl backdrop-blur-sm bg-[#4C566A]/60 text-[#D8DEE9] xl:w-[32rem] snap-center cursor-default hover:bg-[#4C566A] duration-200">
            <div className="flex flex-col gap-10">
              <div className="text-[#ECEFF4] text-base text-center">
                <div
                  className="devicon-linkedin-plain-wordmark cursor-pointer text-8xl -mb-6 hover:text-[#0288D1]"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/yu-hsuan-lin-4034b1157/",
                      "_blank"
                    );
                  }}
                ></div>
                <span>yu-hsuan-lin-4034b1157</span>
              </div>
              <div className="text-[#ECEFF4] text-base text-center">
                <div
                  className="devicon-github-original-wordmark cursor-pointer text-6xl mb-2 hover:text-[#92419e]"
                  onClick={() => {
                    window.open("https://github.com/brookhaven13", "_blank");
                  }}
                ></div>
                <span>brookhaven13</span>
              </div>
              <div className="text-[#ECEFF4] text-base text-center flex flex-col justify-center items-center">
                <EmailIcon
                  className="cursor-pointer text-6xl hover:text-[#EA4335]"
                  onClick={() =>
                    (window.location.href = "mailto:harleylin0612@outlook.com")
                  }
                />
                <span>Outlook: harleylin0612</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default Contact;
