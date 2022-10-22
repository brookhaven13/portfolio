import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuBotton from "./MenuButton";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-between px-2 mx-auto max-w-full z-20 xl:items-center">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-col px-2 text-gray-500"
      >
        <span>Har</span>
        <span>ley</span>
      </motion.div>
      <motion.div
        initial={{
          x: 5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="lg:hidden md:hidden sm:inline-flex"
      >
        <MenuBotton />
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="uppercase hidden md:inline-flex text-sm text-gray-500"
      >
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </motion.div>
    </header>
  );
}

export default Header;
