import github_dark from "@/shared/assets/icons/github.svg";
import linked_in_logo from "@/shared/assets/icons/linkedin_dark.svg";
import instagram_logo from "@/shared/assets/icons/instagram_dark.svg";
import youtube_logo from "@/shared/assets/icons/youtube.svg";

const advantages: { emoji?: string; title: string; description: string }[] = [
  {
    emoji: "🚀",
    title: "Real-time coding -",
    description: "See your teammates' edits as they happen.",
  },
  {
    emoji: "🪐",
    title: "Cosmic UI -",
    description:
      "A space-inspired design that’s clean, modern, and distraction-free.",
  },
  {
    emoji: "📌",
    title: "Inline comments -",
    description:
      "Highlight lines of code and leave feedback without leaving the editor.",
  },
  {
    emoji: "🔗",
    title: "GitHub sync -",
    description: "Import your existing repos and push changes effortlessly.",
  },
  {
    emoji: "🧑‍🚀",
    title: "Team roles -",
    description:
      "Manage access and responsibilities with role-based permissions.",
  },
  {
    emoji: "🧠",
    title: "Built-in AI assistant (coming soon) -",
    description: "Get coding help without context switching.",
  },
];

const operations: { title: string; description: string }[] = [
  {
    title: "1. Sign in with GitHub",
    description:
      "Instantly connect your repositories and pull your projects into CollabX with just a few clicks, making setup fast and easy.",
  },
  {
    title: "2. Create or join a session",
    description:
      "Collaborate live with teammates in a shared coding environment designed for real-time productivity and seamless teamwork.",
  },
  {
    title: "3. Comment & communicate",
    description:
      "Use line comments or chat to exchange ideas, resolve issues quickly, and keep everyone on the same page during development.",
  },
  {
    title: "4. Build, push, repeat",
    description:
      "Stay in flow — and in sync — with seamless GitHub integration that keeps your codebase updated and your team moving forward.",
  },
];

const networks: {
  img: string;
  alt: string;
  link: string;
}[] = [
  {
    img: github_dark,
    alt: "Github",
    link: "https://github.com/DonyFrontend",
  },
  {
    img: linked_in_logo,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/samir-abramov-dony/",
  },
  {
    img: instagram_logo,
    alt: "Instagram",
    link: "https://www.instagram.com/dfriskb/",
  },
  {
    img: youtube_logo,
    alt: "Youtube",
    link: "https://www.youtube.com/@dfriskb",
  },
];

export { advantages, operations, networks };
