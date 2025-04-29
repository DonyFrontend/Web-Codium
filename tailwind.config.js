/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', "sans-serif"],
      },
      borderRadius: {
        button_radius: "7px"
      },
      backgroundColor: {
        main: "#1E90FF",
        hover: "#0d78e1"
      },
      textColor: {
        main: "#1E90FF",
        hover: "#0d78e1"
      },
      borderColor: {
        main: "#1E90FF",
        hover: "#0d78e1"
      }
    },
  },
  plugins: [],
};
