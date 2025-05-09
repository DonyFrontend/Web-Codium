import { ReactParticles } from "@/widgets/particles";
import { motion, useScroll, useTransform } from "motion/react";
import github_logo from "@/shared/assets/icons/github.svg";
import { About } from "./pages/About";
import { useRef } from "react";
import { Footer } from "@/widgets/footer";

const WelcomePage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 20%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="font-exo2">
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <ReactParticles />
      </div>
      <div className="w-full flex flex-col gap-y-20 items-center justify-center">
        <div className="w-[90%] flex flex-col">
          <div className="w-full h-full flex flex-col gap-y-20 items-center justify-center">
            <motion.div
              style={{ scale, opacity }}
              className="flex h-[110vh] flex-col justify-center gap-y-16"
            >
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
                    With <span className="text-neon">Web-Codium</span>
                  </motion.h4>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 2, ease: "linear", delay: 1 }}
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
          <div ref={ref}>
            <About />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export { WelcomePage };
