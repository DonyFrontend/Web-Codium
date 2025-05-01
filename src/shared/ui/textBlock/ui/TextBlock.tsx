import React from "react";
import { ITextBlock } from "../types/text-block-types";
import { motion } from "motion/react";
import { variants } from "@/shared/const/variants";

const TextBlock: React.FC<ITextBlock> = ({ children, title }) => {
  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      transition={{ duration: 0.8 }}
      whileInView={"whileInView"}
      className="flex flex-col gap-y-8 text-mainSize"
    >
      <div className="flex flex-col gap-y-4">
        <h3 className="text-4xl">{title}</h3>
        <span className="h-[1px] w-full bg-line"></span>
      </div>
      <div className="p-2 border border-white rounded-button_radius shadow-neon hover:-translate-y-3 transition-all">
        <p>{children}</p>
      </div>
    </motion.div>
  );
};

export { TextBlock };
