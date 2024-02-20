"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { motion, useScroll } from "framer-motion";
import AnimatedCharacters from "./ui/AnimatedCharacters";
import { AnimatedBall } from "./ui/AnimatedBall";

export function Hero() {
  const placeholderText = [
    { type: "heading1", text: "Hello there" },
    {
      type: "heading2",
      text: "Let's build something amazing together!",
    },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <div id="hero">
      <WavyBackground className="max-w-4xl mx-auto pb-60">
        <motion.div
          className="App"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedCharacters {...item} key={index} />;
            })}
          </div>
        </motion.div>
      </WavyBackground>
      <div className="mt-[-110px]">
        <AnimatedBall />
      </div>
    </div>
  );
}
