import { FC } from "react";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard: FC<ExploreCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={cn(
        "relative",
        active === id ? "lg:flex-[3.5] flex-[18]" : "lg:flex-[0.5] flex-[2]",
        "flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden rounded-[24px]"
      )}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
        width={1920}
        height={894}
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)]">
          <div
            className={cn(
              "flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]"
            )}
          >
            <Image
              src="/headset.svg"
              alt="headset"
              width={40}
              height={40}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
