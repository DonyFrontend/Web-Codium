import { ReactParticles } from "@/widgets/particles";
import { motion } from "motion/react";
import github_logo from "@/shared/assets/icons/github.svg";

const WelcomePage = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full">
        <ReactParticles />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-20 items-center justify-center font-exo2">
        <motion.div className="flex flex-col gap-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="flex flex-col items-start justify-center gap-4 text-center"
          >
            <motion.h1
              initial={{ translateY: -60 }}
              animate={{
                translateY: 0,
                transition: { duration: 3, ease: "linear" },
              }}
              className="text-4xl font-semibold"
            >
              Far away, but together in the code
            </motion.h1>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="bg-white h-[1px] w-full rounded-full"
            />
            <div className="w-full flex items-center justify-center">
              <motion.h4
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, ease: "linear", delay: 1 }}
                className="text-xl text-center"
              >
                With <span className="text-neon">CollabX</span>
              </motion.h4>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            animate={{opacity: 1, translateY: 0}}
            transition={{duration: 2, ease: "linear", delay: 1}}
            className="w-full flex justify-around items-center"
          >
            <motion.button className="flex gap-x-2 text-nowrap items-center p-2 bg-main hover:bg-hover transition-colors rounded-button_radius">
              <img
                src={github_logo}
                className="w-[30px] h-[30px]"
                alt="Github"
              />
              Sing in with Github
            </motion.button>
            <a
              href="#about"
              className="border borde-white transition-all rounded-button_radius p-2 hover:border-hover hover:text-hover"
            >
              More about us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export { WelcomePage };
