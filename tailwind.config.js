/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#6C63FF",
        "primary-300": "#6C63FF",
        "primary-500": "#543FF4",
        "navy": "#00008B",
        "danger":"#FF0000",
        "success-400":"#008000",
        "success-300":"#00FF7F",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      post:{
        rowRevers: {}
      },

      content: {
        backOff: "#FFA6A3",
        backgroundImg: "url('./src/assets/mainbg.jpg')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
