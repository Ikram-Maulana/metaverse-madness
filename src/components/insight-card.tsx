import { FC } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
}

const InsightCard: FC<InsightCardProps> = ({
  imgUrl,
  title,
  subtitle,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        alt="planet-01"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
        width={1920}
        height={863}
      />

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>

        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border-[1px] border-white bg-transparent">
          <Image
            src="/arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
            width={24}
            height={24}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
