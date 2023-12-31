"use client";

import { cn } from "@/lib/utils";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const Feedback: FC = () => {
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
          "innerWidth flexCenter mx-auto flex lg:flex-row flex-col gap-6"
        )}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative h-auto lg:h-[610px]"
        >
          <div className="feedback-gradient" />

          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Samantha
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Founder | Metaversus
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            “With the development of today&apos;s technology, metaverse is very
            useful for today&apos;s work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src="/planet-09.png"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            width={1920}
            height={1080}
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <Image
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
              width={200}
              height={200}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
