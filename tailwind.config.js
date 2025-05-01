/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', "sans-serif"],
      },
      borderRadius: {
        button_radius: "7px",
      },
      backgroundColor: {
        main: "#1E90FF",
        hover: "#0d78e1",
        line: "#30363d",
      },
      textColor: {
        main: "#1E90FF",
        hover: "#0d78e1",
      },
      borderColor: {
        main: "#1E90FF",
        hover: "#0d78e1",
      },
      boxShadow: {
        neon: "0 0 5px #fff, 0 0 20px #1E90FF, 0 0 30px #1E90FF",
      },
      fontSize: {
        mainSize: "20px"
      }
    },
  },
  plugins: [],
};
