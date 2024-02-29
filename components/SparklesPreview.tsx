"use client";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { AnimatedBall } from "./ui/AnimatedBall";
import useScreen from "@/hooks/useScreen";

export function SparklesPreview() {
  const isLargeScreen = useScreen()

  return (
    <div
      id="hero"
      className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold 4xs:text-4xl md:text-5xl md:mb-[-25px] 2xl:text-7xl 2xl:mb-[-50px] text-white">
          Hello there
        </h1>
      </motion.div>
      <div className="w-[40rem] h-40 relative mb-40">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={isLargeScreen ? 1000 : 100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <motion.div
        className="text-center 4xs:text-md md:text-lg 2xl:text-xl "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <h1 className="text-white">Let&apos;s build something amazing together!</h1>
      </motion.div>
      <div className="mt-10">
        <AnimatedBall />
      </div>
    </div>
  );
}
