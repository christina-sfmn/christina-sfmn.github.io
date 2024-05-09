/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    container: {
      padding: '5%',
    },
    fontFamily: {
      Raleway: ["Raleway"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // hier können die Standardwerte von Tailwind um eigene erweitert werden (z. B. eigene Farben, Screengrößen, Abstände, etc.)
      colors: {
        darkestblue: "#2d3d4c",
        darkblue: "#394d60",
        ashblue: "#7f8790",
        mediumblue: "#aab4bd",
        lightblue: "#bdc8d2",
        lightestblue: "#d9e1e9",
        matteblack: "#2f2f2f",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideintop: {
          from: { top: "-30rem", opacity: 0 },
          to: { top: 0, opacity: 1 },
        },
      },
      animation: {
        rotateouttop: "rotate 20s linear infinite",
        rotateintop: "rotate 10s linear infinite",
        rotateoutbottom: "rotate 20s linear infinite",
        rotateinbottom: "rotate 10s linear infinite",
        slideintop: "slideintop 0.5s",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
  autoprefixer: {},
};