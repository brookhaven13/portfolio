import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "A Frontend Web Developer",
      "TurnCoffeeIntoCode.tsx",
      "<VisualStudioCode theme={Nord}/>",
      ".keyboard-style: {color: white}",
    ],
  });
  return <div>Hero</div>;
};

export default Hero;
