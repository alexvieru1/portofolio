"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologiesLogos } from "@/constants/technologiesLogos";
import useScreen from "@/hooks/useScreen";

const InfiniteCarousel = () => {
  const logos = technologiesLogos;

  const isLargeScreen = useScreen();

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
      <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                width={isLargeScreen ? 100 : 50}
                height={isLargeScreen ? 100 : 50}
                alt={logo.alt}
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image
                src={logo.src}
                width={isLargeScreen ? 100 : 50}
                height={isLargeScreen ? 100 : 50}
                alt={logo.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
