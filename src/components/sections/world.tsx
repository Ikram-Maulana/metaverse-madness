"use client";

import { TitleText, TypingText } from "@/components/custom-texts";
import { cn } from "@/lib/utils";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const World: FC = () => {
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
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] w-full h-[550px]"
        >
          <Image
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
            width={1920}
            height={863}
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-01.png"
              alt="people-01"
              className="w-full h-full"
              width={58}
              height={58}
            />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-02.png"
              alt="people-02"
              className="w-full h-full"
              width={58}
              height={58}
            />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <Image
              src="/people-03.png"
              alt="people-03"
              className="w-full h-full"
              width={58}
              height={58}
            />
          </div>

          <div
            className="absolute top-[30%] left-[15%] xl:top-[35%] xl:left-[18%] w-[160px] lg:w-[150px] h-[120px]
             lg:h-[119px] xl:w-[217px] xl:h-[167px] p-[9px] rounded-xl xl:rounded-3xl bg-[#5d6680] hidden md:block"
          >
            <Image
              src="/planet-02.png"
              alt="planet-02-card2"
              className="w-full h-full rounded-lg xl:rounded-2xl object-cover"
              width={1920}
              height={863}
            />

            <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-end align-middle gap-4 bg-[rgba(255,255,255,0.2)] rounded-xl xl:rounded-3xl p-4">
              <div className="h-[24px] w-auto flex relative">
                <Image
                  src="/people-02.png"
                  alt="people-02-card2"
                  className="w-[24px] h-[24px] rounded-full"
                  width={24}
                  height={24}
                />
                <Image
                  src="/people-01.png"
                  alt="people-01-card2"
                  className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-1]"
                  width={24}
                  height={24}
                />
                <Image
                  src="/people-03.png"
                  alt="people-03-card2"
                  className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-2]"
                  width={24}
                  height={24}
                />
                <h5 className="h-[24px] text-left text-[10px] p-1 text-white ml-1">
                  + 264 has joined
                </h5>
              </div>
              <h3 className="text-white font-bold">The Upside Down</h3>
            </div>
          </div>

          <div className="absolute top-[10%] right-[15%] xl:top-[45px] xl:right-[19%] w-[156px] lg:w-[146px] h-[116px] lg:h-[113px] xl:w-[211px] xl:h-[159px] p-[9px] rounded-xl xl:rounded-3xl bg-[#5d6680] hidden md:block">
            <Image
              src="/planet-03.png"
              alt="planet-03-card"
              className="w-full h-full rounded-lg xl:rounded-2xl object-cover"
              width={1920}
              height={863}
            />

            <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-end align-middle gap-4 bg-[rgba(255,255,255,0.2)] rounded-xl xl:rounded-3xl p-4">
              <div className="h-[24px] w-auto flex relative">
                <Image
                  src="/people-02.png"
                  alt="people-02-card"
                  className="w-[24px] h-[24px] rounded-full"
                  width={24}
                  height={24}
                />
                <Image
                  src="/people-01.png"
                  alt="people-01-card"
                  className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-1]"
                  width={24}
                  height={24}
                />
                <Image
                  src="/people-03.png"
                  alt="people-03-card"
                  className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-2]"
                  width={24}
                  height={24}
                />

                <h5 className="h-[24px] text-left text-[10px] p-1 text-white ml-1">
                  + 264 has joined
                </h5>
              </div>
              <h3 className="text-white font-bold">Hawkins Labs</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
