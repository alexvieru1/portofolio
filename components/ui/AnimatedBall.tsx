import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";

export const AnimatedBall = () => {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 300) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bounceTransition = {
    y: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut",
    },
    opacity: {
      delay: 2,
    },
  };

  return (
    <div className="flex justify-center">
      <motion.span
        className="rounded-full"
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          backgroundColor: ["#22d3ee", "#c084fc"],
          opacity: opacity,
        }}
        initial={{ opacity: 0 }}
        style={{ transition: "opacity  0.3s ease" }}
      >
        <ArrowDownCircleIcon className="w-8 h-8 text-black" />
      </motion.span>
    </div>
  );
};
