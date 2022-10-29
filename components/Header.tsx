import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuBotton from "./MenuButton";
import Link from "next/link";

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
        className="flex flex-col px-2 text-slate-300 uppercase font-black text-base my-2 md:text-3xl"
      >
        <Link href="#hero">
          <div className="cursor-pointer">
            <span>Har</span>
            <span className="flex justify-around">
              <span>l</span>
              <span>e</span>
              <span>y</span>
            </span>
          </div>
        </Link>
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
        <Link href="#about">
          <button className="uppercase hover:text-white drop-shadow-sm">
            About
          </button>
        </Link>
        <Link href="#projects">
          <button className="uppercase hover:text-white">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="uppercase hover:text-white">Contact</button>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
