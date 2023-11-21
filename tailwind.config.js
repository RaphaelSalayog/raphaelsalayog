/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      borderColor: {
        "[#0b0a14]": "#0b0a14",
        "[#007BFF]": "#007BFF",
      },
      animation: {
        "scale-forward-title": "scale-forward 0.8s ease-out both 0.2s",
        "scale-forward-content1": "scale-forward 0.8s ease-out backwards 0.4s",
        "fade-left-to-right-content1":
          "fade-left-to-right 0.8s ease-out both 0.4s",
        "spin-scale-forward-content1":
          "spin-scale-forward 1s ease-out backwards 0.4s",
        "fade-bottom-to-top-content2":
          "fade-bottom-to-top 0.8s ease-out both 0.6s",
        "fade-bottom-to-top-card": "fade-bottom-to-top 0.8s ease-out backwards",
      },
      keyframes: {
        "fade-left-to-right": {
          "0%": { opacity: 0, transform: "translateX(-50%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-bottom-to-top": {
          "0%": { opacity: 0, transform: "translateY(50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "spin-scale-forward": {
          "0%": {
            opacity: 0,
            transform: "scale(0) rotate(0deg)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1) rotate(360deg)",
          },
        },
        "scale-forward": {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
