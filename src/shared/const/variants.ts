import { Variants } from "motion/react";

const variants: Variants = {
  hidden: {
    opacity: 0,
    translateY: 25,
  },
  animate: {
    transition: {
      duration: 1,
    },
  },
  whileInView: {
    opacity: 1,
    translateY: 0,
  },
};

export { variants };
