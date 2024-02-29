"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const InfiniteCarousel = () => {
  const logos = [
    { src: "/images/technologies/nextjs.svg", alt: "Next.js" },
    { src: "/images/technologies/typescript.svg", alt: "TypeScript" },
    { src: "/images/technologies/java.svg", alt: "Java" },
    { src: "/images/technologies/spring-boot.svg", alt: "Spring Boot" },
    { src: "/images/technologies/docker.svg", alt: "Docker" },
    { src: "/images/technologies/javascript.svg", alt: "JavaScript" },
    { src: "/images/technologies/react.webp", alt: "React" },
    { src: "/images/technologies/node-js.svg", alt: "Node.js" },
    { src: "/images/technologies/express-js.svg", alt: "Express.js" },
    { src: "/images/technologies/api.webp", alt: "API" },
    { src: "/images/technologies/mongo-db.webp", alt: "MongoDB" },
    { src: "/images/technologies/postgres.svg", alt: "PostgreSQL" },
    { src: "/images/technologies/html.webp", alt: "HTML" },
    { src: "/images/technologies/css.svg", alt: "CSS" },
    { src: "/images/technologies/framer.webp", alt: "Framer" },
    { src: "/images/technologies/tailwind-css.svg", alt: "Tailwind CSS" },
    { src: "/images/technologies/bootstrap.svg", alt: "Bootstrap" },
    { src: "/images/technologies/mui.webp", alt: "Material-UI" },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 500);
    };

    window.addEventListener("resize", updateScreenSize);

    updateScreenSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="mt-16">
      <motion.div
        className="flex justify-center items-center font-bold text-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.8,
          },
        }}
        viewport={{ once: true }}
      >
        <h1>Areas of Expertise:</h1>
      </motion.div>
      {isLargeScreen ? (
        <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image src={logo.src} width={100} height={100} alt={logo.alt} />
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <li key={index}>
                <Image src={logo.src} width={100} height={100} alt={logo.alt} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image src={logo.src} width={50} height={50} alt={logo.alt} />
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <li key={index}>
                <Image src={logo.src} width={50} height={50} alt={logo.alt} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfiniteCarousel;
