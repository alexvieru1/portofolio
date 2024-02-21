import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Contact = () => {
  const words = [
    {
      text: "Got your",
    },
    {
      text: "interest?",
    },
    {
      text: "Let's have a",
    },
    {
      text: "chat!",
      className: "text-[#38bdf8] dark:text-[#38bdf8] ",
    },
  ];
  return (
    <div className="flex flex-col items-center 4xs:mt-40  lg:mt-80">
      <div
        className="flex flex-col items-center justify-center h-[20rem]"
        id="contact"
      >
        <TypewriterEffectSmooth words={words} className="h-[40rem]" />
      </div>
      <div className="grid grid-cols-1 gap-6 4xs:mt-[-150px] sm:mt-0 xl:grid-cols-2">
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
