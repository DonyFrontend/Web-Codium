import { TextBlock } from "@/shared/ui/textBlock";
import arrow_down_img from "@/shared/assets/icons/arrow_down.svg";
import { advantages, operations, networks } from "../../utils/infos";
import { motion } from "motion/react";
import { useState } from "react";
import github_logo from "@/shared/assets/icons/github.svg";

const About = () => {
  const [displayLink, setDisplayLink] = useState<number>(-1);

  return (
    <div id="about" className="flex flex-col gap-y-28 items-center">
      <div className="flex flex-col gap-y-16 items-center">
        <TextBlock title="About">
          <span className="text-neon">Web-Codium</span> is a space-themed platform
          for real-time code collaboration. Whether you're coding solo or with a
          team, Web-Codium provides an immersive environment where distance fades
          and ideas flow. Inspired by the endless void of space, we built
          Web-Codium to be fast, minimal, and deeply connected — just like the
          developers who use it. With <span className="text-neon">GitHub</span>{" "}
          integration, inline code comments, team management, and project
          syncing, it's everything you need to collaborate without boundaries.
        </TextBlock>
        <img src={arrow_down_img} alt="Arrow" className="w-[50px] h-[50px]" />
        <TextBlock title="What is Web-Codium?">
          <span className="text-neon">Web-Codium</span> is more than just a tool —
          it's a digital space station for developers. Think of it as a command
          center where your team can write code, leave comments, and communicate
          in real time. No more switching tabs or syncing files manually. With a
          beautiful interface, cosmic animations, and developer-focused
          features, Web-Codium transforms the way you work together on code.
        </TextBlock>
        <img src={arrow_down_img} alt="Arrow" className="w-[50px] h-[50px]" />
        <TextBlock title="Features Overview">
          From real-time editing to integrated chat, Web-Codium is packed with
          tools that make teamwork easy. Manage your repositories, track
          progress, and keep conversations connected — all within one unified
          interface.
        </TextBlock>
      </div>

      <div className="w-full flex flex-col gap-y-8 items-center">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-4xl">Why choose Web-Codium ?</h3>
          <span className="h-[1px] w-full bg-line"></span>
        </div>
        <div className="w-full flex flex-col shadow-neon gap-y-8 border border-[#30363d] rounded-button_radius py-4 hover:-translate-y-3 transition-all">
          {advantages.map((advantage, index) => (
            <div
              className="flex gap-x-2 items-center text-mainSize"
              key={index}
            >
              <span className="h-[1px] w-[10vh] bg-white shadow-neon"></span>
              <div className="flex gap-x-1 items-center">
                {advantage.emoji}
                <h6 className="font-semibold">{advantage.title}</h6>
              </div>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-8 items-center">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-4xl">How it works</h3>
          <span className="h-[1px] w-full bg-line"></span>
        </div>
        <div className="w-full grid grid-cols-2 auto-rows-auto shadow-neon border border-[#30363d] rounded-button_radius transition-all">
          {operations.map((operation, index) => (
            <motion.div
              onHoverStart={() => setDisplayLink(index)}
              onHoverEnd={() => setDisplayLink(-1)}
              className="flex gap-x-2 p-10 border border-[#30363d] items-center text-mainSize"
              key={index}
            >
              <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-4xl">{operation.title}</h3>
                    <span className="h-[1px] w-full bg-line"></span>
                  </div>
                  <p className="text-[#90959b]">{operation.description}</p>
                </div>
                <motion.button
                  className={`${
                    displayLink == index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  } duration-500 p-2 bg-main hover:bg-hover rounded-button_radius shadow-neon`}
                >
                  Try it now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-8 items-center">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-4xl">What’s next?</h3>
          <span className="h-[1px] w-full bg-line"></span>
        </div>
        <div className="w-[60%] flex flex-col items-center gap-y-16">
          <div>
            <p className="text-[#90959b] text-[25px]">
              That’s up to you! Dive into your code, invite your team, and let
              Web-Codium handle the rest. Smooth collaboration is just a click
              away. Whether you're starting a small side project or launching a
              large-scale app, Web-Codium gives you the tools and flexibility to
              grow. Your next big idea is waiting — and we’re here to help you
              build it.
            </p>
            <button className="flex gap-x-2 text-nowrap items-center p-2 bg-main hover:bg-hover transition-colors rounded-button_radius mt-2">
              <img
                src={github_logo}
                className="w-[30px] h-[30px]"
                alt="Github"
              />
              Sing in with Github
            </button>
          </div>
          <div className="flex flex-col gap-x-4">
            <div className="flex gap-x-4 items-center justify-center">
              {networks.map((network, index) => (
                <a href={network.link} target="_blank" key={index}>
                  <img
                    src={network.img}
                    alt={network.alt}
                    className="w-[50px] h-[50px] hover:bg-[#1e90ff] rounded-button_radius transition-all p-2"
                  />
                </a>
              ))}
            </div>
            <p className="text-[#90959b] text-[25px]">
              {" "}
              As possible, please, subscribe to my own networks on these
              platforms, thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
