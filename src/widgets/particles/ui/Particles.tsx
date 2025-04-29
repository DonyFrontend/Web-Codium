import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { particlesOptions } from "../model/utils/particles-options";
import { motion } from "motion/react";

const ReactParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <motion.div initial={{opacity: 0}} transition={{duration: 7}} animate={{opacity: 1}} className="w-full">
      {init && <Particles id="tsparticles" options={particlesOptions} />}
    </motion.div>
  );
};

export { ReactParticles };
