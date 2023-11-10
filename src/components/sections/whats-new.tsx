"use client";

import { TitleText, TypingText } from "@/components/custom-texts";
import NewFeatures from "@/components/new-features";
import { newFeatures } from "@/constants";
import { cn } from "@/lib/utils";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const WhatsNew: FC = () => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New" textStyles="text-start" />
          <TitleText
            title={<>What&#39;s new about Metaversus?</>}
            textStyles="text-start"
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={cn("flex-1 flexCenter")}
        >
          <Image
            src="/whats-new.png"
            alt="whats-new"
            className="w-[90%] h-[90%] object-contain"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
