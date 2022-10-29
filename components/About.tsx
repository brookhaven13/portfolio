import React from "react";
import { motion } from "framer-motion";
import avatar from "./../public/avatar.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col h-screen text-center md:text-left  max-w-7xl justify-evenly items-center mx-auto">
      <motion.h3
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="uppercase mt-8 tracking-[20px] text-slate-300 text-2xl"
      >
        About Me
      </motion.h3>
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
        className="flex flex-col items-center gap-10 h-auto md:flex-row"
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
          className="text-xs text-left px-6 font-light md:px-9 md:text-sm xl:text-base"
        >
          <h4 className="font-bold text-lg my-2 md:text-xl xl:text-2xl xl:mb-8">
            Story About a Dreamer Persuer
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
            <span className="font-bold"> I want to be a programmer</span>. This
            thought I&apos;d kept in my mind since college. This time I was more
            determined than ever. I quit the job and attended a coding bootcamp;
            I worked as hard as I could. Becuase of this course, I learned the
            difference between frontend and backend. I found out I like frontend
            more.
          </p>
          <p className="mt-2">
            Finally, all the hard work has paid off. Now I am a Front-end Web
            developer for almost 3-year. And I&apos;ll continuse to move
            forward.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
