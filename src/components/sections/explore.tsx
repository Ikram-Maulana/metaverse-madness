"use client";

import { TitleText, TypingText } from "@/components/custom-texts";
import ExploreCard from "@/components/explore-card";
import { exploreWorlds } from "@/constants";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC, useState } from "react";

const Explore: FC = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={cn("paddings")} id="explore">
      <motion.div
        variants={staggerContainer(0.5, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.25,
        }}
        className={cn("innerWidth mx-auto flex flex-col")}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
