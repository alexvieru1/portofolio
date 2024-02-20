import React from "react";
import { motion } from "framer-motion";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};

// Map component types to their corresponding text sizes
const componentMap: { [key: string]: React.ElementType } = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

const textSizeMap: { [key: string]: string } = {
  paragraph: "text-base",
  heading1: "4xs:text-4xl sm:text-6xl font-bold mt-40 ",
  heading2: "4xs:text-2xl sm:text-2xl mt-40",
};

interface AnimatedCharactersProps {
  text: string;
  type: string;
}

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = (props) => {
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "white",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = props.text.split(" ");
  const words: string[][] = [];

  for (const item of splitWords) {
    words.push(item.split(""));
  }

  words.forEach((word) => {
    word.push("\u00A0");
  });

  // Use componentMap instead of tagMap
  const Tag = componentMap[props.type];
  // Use textSizeMap to get the corresponding text size
  const textSizeClass = textSizeMap[props.type];

  return (
    <Tag className={`${textSizeClass} text-center `}>
      {words.map((word, index) => (
        <Wrapper key={index}>
          {word.flat().map((element, index) => (
            <span
              style={{
                overflow: "hidden",
                display: "inline-block",
              }}
              key={index}
            >
              <motion.span style={{ display: "inline-block" }} variants={item}>
                {element}
              </motion.span>
            </span>
          ))}
        </Wrapper>
      ))}
    </Tag>
  );
};

export default AnimatedCharacters;
