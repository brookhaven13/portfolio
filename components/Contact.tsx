import React, { PureComponent } from "react";
import { motion } from "framer-motion";
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
      </div>
    );
  }
}

export default Contact;
