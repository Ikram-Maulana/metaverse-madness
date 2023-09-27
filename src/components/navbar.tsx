"use client";

import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-1/2 inset-0 gradient-01 z-10" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative z-20`}
      >
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="w-6 h-6 object-contain cursor-pointer"
        />
        <h2 className="font-extrabold text-2xl leading-[30px] uppercase text-white">
          Metaversus
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="w-6 h-6 object-contain cursor-pointer"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
