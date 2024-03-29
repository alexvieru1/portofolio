"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { projectsData } from "@/constants/projectsData";

const Projects = () => {
  const words = [
    {
      text: "Take",
    },
    {
      text: "a look",
    },
    {
      text: "over my",
    },
    {
      text: "projects:",
      className: "text-[#0099ff] dark:text-[#0099ff] ",
    },
  ];
  const projects = projectsData;
  return (
    <div className="flex flex-col items-center 4xs:mt-40  lg:mt-80">
      <div
        className="flex flex-col items-center justify-center h-[20rem]"
        id="projects"
      >
        <TypewriterEffectSmooth words={words} className="h-[40rem]" />
      </div>
      <div className="grid grid-cols-1 gap-8 4xs:mt-[-150px] sm:mt-0 xl:grid-cols-2 2xl:grid-cols-3">
        {projects.map((p, index) => (
          <div key={index} className="">
            <CardContainer className="inter-var 4xs:max-w-[90%] sm:max-w-none ">
              <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white dark:text-white"
                >
                  {p.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {p.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={p.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    draggable={false}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <Link
                    href={{
                      pathname: `/projects/${p.id}`,
                      query: { ...p },
                    }}
                  >
                    <button className="inline-flex items-center px-2 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                      Read More
                      <ArrowLongRightIcon className="ml-1 w-5 h-5" />
                    </button>
                  </Link>
                  <Link href={p.github} target="_blank">
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <Image
                        src="/images/github-mark-white.svg"
                        width={20}
                        height={20}
                        alt="githublogo"
                        className="mr-2"
                        draggable={false}
                      />
                      Github
                    </button>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
