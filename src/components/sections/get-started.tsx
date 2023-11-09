"use client";

import { TitleText, TypingText } from "@/components/custom-texts";
import StartSteps from "@/components/start-steps";
import { startingFeatures } from "@/constants";
import { cn } from "@/lib/utils";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const GetStarted: FC = () => {
  return (
    <section className={cn("paddings relative z-10")}>
      <motion.div
        variants={staggerContainer(0.5, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className={cn(
          "innerWidth flexCenter mx-auto flex flex-col lg:flex-row gap-8"
        )}
      >
        <motion.div
          variants={planetVariants("left")}
          className={cn("flex-1 flexCenter")}
        >
          <Image
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| How Metaversus Works" textStyles="text-start" />
          <TitleText
            title={<>Get started with just a few clicks</>}
            textStyles="text-start"
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
