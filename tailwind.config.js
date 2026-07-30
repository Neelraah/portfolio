/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#00F5FF",
        purple: "#8B5CF6",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        blink: {
          "0%,49%,100%": { opacity: "1" },
          "50%,99%": { opacity: "0" },
        },
        glitch: {
          "0%,100%": { clip: "rect(0,900px,0,0)" },
          "25%": { clip: "rect(10px,9999px,90px,0)" },
          "50%": { clip: "rect(40px,9999px,50px,0)" },
          "75%": { clip: "rect(10px,9999px,90px,0)" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
        glitch: "glitch 2s infinite",
      },
      backgroundImage: {
        "gradient-aurora":
          "linear-gradient(135deg,#00F5FF,#8B5CF6)",
      },
    },
  },
  plugins: [],
};