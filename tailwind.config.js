/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "ease-out-custom": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      fontFamily: {
        base: ["Golos Text", "sans-serif"],
      },
      colors: {
        card: "#F8F9FA",
        graphite: "#0B2027",
        lightgraphite: "#0B202799",

        mint: "#00C08B",
        minthover: "#00AB7C",
        mintactive: "#00966D",

        rose: "#F14F4F",
        rosehover: "#DE4949",
        roseactive: "#C94242",
        rose: "#F14F4F",
        sidebar: "#F8F9FA",

        yellow: "#D8F69A",
        yellowhover: "#CEEB93",
        yellowactive: "#C5E08C",

        darkblue: "#003B4C",
        darkbluehover: "#004B61",
        darkblueactive: "#005B75",

        orange: "#FFBB00",
      },

      backgroundSize: {
        "200%": "200% 50%",
      },
      animation: {
        shine: "shine 4s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "-200% 0%" },
        },
      },
      gradientColorStops: {
        "shine-start": "#f8f9fa",
        "shine-middle": "#ffffff",
        "shine-end": "#f8f9fa",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
