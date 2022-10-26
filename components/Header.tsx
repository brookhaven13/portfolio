import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuBotton from "./MenuButton";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-between px-2 mx-auto max-w-full z-20 xl:items-center font-noto-sans">
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
        className="flex flex-col px-2 text-slate-300 uppercase font-black text-3xl"
      >
        <span>Har</span>
        <span className="flex justify-around">
          <span>l</span>
          <span>e</span>
          <span>y</span>
        </span>
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
        className="hidden md:flex max-w-md w-full justify-evenly gap-2 uppercase text-sm text-slate-300"
      >
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Projects</span>
        <span className="cursor-pointer">Contact</span>
      </motion.div>
    </header>
  );
}

export default Header;
