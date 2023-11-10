"use client";

import { TitleText, TypingText } from "@/components/custom-texts";
import InsightCard from "@/components/insight-card";
import { insights } from "@/constants";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC } from "react";

const Insights: FC = () => {
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
        className={cn("innerWidth flexCenter mx-auto flex flex-col")}
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText
          title={<>Insight about metaverse</>}
          textStyles="text-center"
        />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
