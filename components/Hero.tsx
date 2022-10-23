import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "A Frontend Web Developer",
      "TurnCoffeeIntoCode.tsx",
      'let myMotto = "Keep calm and <code> on"',
      "<VisualStudioCode theme={Nord} />",
      "#keyboard: {color: white, switches: brown}",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 20,
  });
  return <div>{text}</div>;
};

export default Hero;
