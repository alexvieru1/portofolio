/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";

const About = () => {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "talk",
    },
    {
      text: "a little",
    },
    {
      text: "bit about",
    },
    {
      text: "me.",
      className: "text-[#6366f1] dark:text-[#6366f1] ",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col items-center justify-center h-[20rem]"
        id="about"
      >
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="grid space-x-10 space-y-8 sm:mx-auto 4xs:grid-cols-1 4xs:mt-[-100px] lg:grid-cols-2 2xl:mt-0">
        <motion.div
          className="4xs:max-w-[200px] sm:max-w-[350px] xl:max-w-[450px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 2,
            },
          }}
          viewport={{ once: false }}
        >
          <Image
            className="rounded-xl"
            src="/images/eu.webp"
            width={500}
            height={500}
            alt="profile pic"
            draggable={false}
          />
        </motion.div>
        <motion.div
          className="4xs:max-w-[200px] sm:max-w-[350px] xl:max-w-[450px] 4xs:text-xs sm:text-sm lg:text-md xl:text-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1.5 },
          }}
          viewport={{ once: false }}
        >
          <h1>
            My name is Alexandru Vieru, a recently qualified Full Stack
            Developer, with a great eye for detail and a knack for
            problem-solving.
          </h1>
          <h1>
            For leisure, I enjoy practicing and following sports, watching
            movies, engaging in various activities with my friends, and last but
            not least, going for walks with my dog.
          </h1>
          <h1>
            I would describe myself as an energetic person, always eager to
            learn, easygoing, selfless, and very thoughtful of others.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
