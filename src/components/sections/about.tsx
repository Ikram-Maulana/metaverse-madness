"use client";

import { TypingText } from "@/components/custom-texts";
import { cn } from "@/lib/utils";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <section className={cn("paddings relative z-20")}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.5, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className={cn("innerWidth flexCenter mx-auto flex-col")}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it&#39;s really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let&#39;s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mt-7">
          <Image
            src="/arrow-down.svg"
            alt="arrow-down"
            width={18}
            height={28}
            className="w-[18px] h-7 object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
