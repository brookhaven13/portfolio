import React from "react";
import { motion } from "framer-motion";
import avatar from "./../public/avatar.jpg";

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
        <p className="custom-mask relative top-10 md:top-20 md:-left-32 -left-24 font-noto-sans font-black text-7xl md:text-8xl tracking-wider">
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
          className="text-[#aeb5c3] text-xs text-left px-6 font-thin md:px-9 md:text-sm xl:text-base"
        >
          <h4 className="text-[#E5E9F0] text-base text-center my-2 md:text-left lg:text-lg lg:text-left xl:text-2xl xl:mb-8 xl:text-left">
            Story About a Dream Pursuer
          </h4>
          <p>
            Since I was a teenager, I have a great interest in Computer
            Technology. Though my major in college is English Education, I
            self-taught myself assemble a computer from scratch and basic
            knowledge of Computor Science. After graduated, I could only worked
            as a interpreter and a customer service agent due to my degree
            limitation.
          </p>
          <p className="mt-2">
            To be honest, I don&apos;t like those jobs. Espically the customer
            sevice work made me depressed. About a year and half, I started
            getting sick and doctors were unable to find out what&apos;s wrong
            with my body. Then I realised it was my mental health affected
            physical health.
          </p>
          <p className="mt-2">
            So I decided to follow my heart:
            <span className="text-[#E5E9F0]"> I want to be a programmer</span>.
            This thought I&apos;d kept in my mind since college. This time I was
            more determined than ever. I quit the job and attended a coding
            bootcamp; I worked as hard as I could. Becuase of this course, I
            learned the difference between frontend and backend. I found out I
            like frontend more.
          </p>
          <p className="mt-2">
            Finally, all the hard work has paid off. Now I am a frontend
            developer for almost 3-year. It took me a long way to acheive my
            dream, and I&apos;ll continue to move forward.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
