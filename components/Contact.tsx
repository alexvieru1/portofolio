import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import ContactForm from "./ui/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className: "text-[#0099ff] dark:text-[#0099ff] ",
    },
  ];
  const socialMedia = [
    // {
    //   title: "Instagram",
    //   image: "/images/instagram.svg",
    //   link: "https://www.instagram.com/alexvieru/",
    // },
    {
      title: "LinkedIn",
      image: "/images/linkedin.svg",
      link: "https://www.linkedin.com/in/vieru-alexandru/",
    },
    {
      title: "GitHub",
      image: "/images/github-mark-white.svg",
      link: "https://github.com/alexvieru1",
    },
    // {
    //   title: "Facebook",
    //   image: "/images/facebook.svg",
    //   link: "https://www.facebook.com/vieru.alexandruu/",
    // },
  ];
  return (
    <div className="flex flex-col items-center 4xs:mt-40  lg:mt-80">
      <div
        className="flex flex-col items-center justify-center h-[20rem]"
        id="contact"
      >
        <TypewriterEffectSmooth words={words} className="h-[40rem]" />
      </div>
      <div className="grid grid-cols-1 justify-items-between 4xs:gap-10 sm:gap-50 4xs:mt-[-150px] 2xl:mt-0 xl:grid-cols-2">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-xl font-bold mb-4 ">Contact</h1>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold mb-4 ">Check my</h1>
          {socialMedia.map((s, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index,
                },
              }}
              viewport={{ once: false }}
            >
              <Link href={s.link} target="_blank">
                <button className="my-6 w-60 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <Image
                    src={s.image}
                    width={20}
                    height={20}
                    alt="githublogo"
                    className="mr-2"
                    draggable={false}
                  />
                  {s.title}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
