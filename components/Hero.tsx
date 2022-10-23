import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      'let myMotto = "Keep calm and <code> on"',
      "TurnCoffeeIntoCode.tsx",
      "<VisualStudioCode theme={Nord} />",
      "#keyboard: {color: white, switches: brown}",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 20,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden">
      <div className="flex flex-col">
        <span className="font-thin text-xl text-slate-400 text-left ml-8 z-10">
          I AM
        </span>
        <span className="my-2 text-9xl font-noto-sans font-bold z-10">
          HARLEY
        </span>
        <BackgroundCircles />
      </div>
      <div className="font-thin text-xl text-slate-400 flex flex-col items-end justify-evenly h-6 w-60">
        <span>A FRONTEND</span>
        <span>WEB DEVELOPER</span>
      </div>
      <div className="flex justify-end text-[#88c0d0]">
        {text}
        <Cursor cursorColor="#81a1c1" />
      </div>
    </div>
  );
};

export default Hero;
