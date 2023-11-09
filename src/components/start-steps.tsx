import { cn } from "@/lib/utils";
import { FC } from "react";

interface StartStepsProps {
  number: number;
  text: string;
}

const StartSteps: FC<StartStepsProps> = ({ number, text }) => {
  return (
    <div className={cn("flexCenter flex-row")}>
      <div
        className={cn(
          "flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]"
        )}
      >
        <p className="font-bold text-white text-[20px]">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
