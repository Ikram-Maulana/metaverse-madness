"use client";

import { cn } from "@/lib/utils";
import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => {
  return (
    <motion.p
      variants={textContainer}
      className={cn(
        `${textStyles}`,
        "font-normal text-sm text-secondary-white"
      )}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span
          key={index}
          variants={textVariant2}
          className={cn(
            `${textStyles}`,
            "font-normal text-sm text-secondary-white"
          )}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

const TitleText = ({
  title,
  textStyles,
}: {
  title: ReactNode;
  textStyles: string;
}) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={cn(
        `${textStyles}`,
        "mt-2 font-bold md:text-[64px] text-[40px] text-white"
      )}
    >
      {title}
    </motion.h2>
  );
};

export { TypingText, TitleText };
